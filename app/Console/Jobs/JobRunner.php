<?php

namespace App\Console\Jobs;

use Exception;
use Illuminate\Support\Facades\Log;

class JobRunner {

    public function myMethod(...$params)
    {
        // Your job logic here
        Log::info("myMethod executed with parameters: " . json_encode($params));
    }


    public function execute($className, $method, $params = [], $retries = 3)
{
    $attempt = 0;
    $result = null;

    while ($attempt < $retries) {
        $result = $this->attemptJob($className, $method, $params);
        if ($result['status'] === 'success') {
            return $result;
        }
        $attempt++;
        sleep(1); // Delay between retries
    }

    return $result;
}




private function attemptJob($className, $method, $params)
{
    try {
        if (!class_exists($className) || !method_exists($className, $method)) {
            throw new Exception("Invalid class or method: $className::$method");
        }

        // Ensure $params is an array
        $params = is_array($params) ? $params : [];

        $instance = new $className();
        $result = call_user_func_array([$instance, $method], $params);

        Log::info("Job executed successfully: {$className}::{$method}", ['params' => $params]);
        return ['status' => 'success', 'result' => $result];

    } catch (Exception $e) {
        Log::channel('bg_jobs_errors')->error("Job failed: {$className}::{$method}", [
            'params' => $params,
            'error' => $e->getMessage()
        ]);
        return ['status' => 'error', 'error' => $e->getMessage()];
    }
}

}
