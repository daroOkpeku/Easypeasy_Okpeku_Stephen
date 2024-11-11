<?php

use App\Console\Jobs\JobRunner;
use Illuminate\Support\Facades\Log;

if (!function_exists('runBackgroundJob')) {
    function runBackgroundJob($className, $method, $params = [], $retries = 3, $delay = 0)
    {
        // Encode parameters as JSON, escaping for shell commands
        $jsonParams = json_encode($params, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
        $escapedJsonParams = escapeshellarg($jsonParams);

        // Construct the command for Artisan job:run with properly formatted parameters
        $command = "php artisan job:run \"{$className}\" \"{$method}\" {$escapedJsonParams}";

        // Execute command based on the operating system
        if (strtoupper(substr(PHP_OS, 0, 3)) === 'WIN') {
            // For Windows, use `start /B` for background execution
            pclose(popen("start /B " . $command, "r"));
        } else {
            // For Unix-based systems, use `&` to run in the background
            exec($command . " > /dev/null 2>&1 &");
        }

        Log::info("Running background job command: $command");
    }
}