<?php

namespace App\Console\Commands;
use Illuminate\Support\Facades\Log;
use Illuminate\Console\Command;
use App\Console\Jobs\JobRunner;

class RunBackgroundJob extends Command
{
    protected $signature = 'job:run {className} {method} {params?}';
    protected $description = 'Run a specific class method in the background';

    public function handle()
    {
        $className = $this->argument('className');
        $method = $this->argument('method');
        
        // Decode params and ensure it's an array
        $params = json_decode($this->argument('params'), true) ?? [];

        // Log for debugging
        Log::info("Running {$className}::{$method} with parameters:", $params);

        // Instantiate class and call method
        if (!class_exists($className) || !method_exists($className, $method)) {
            Log::error("Invalid class or method: $className::$method");
            return;
        }

        $jobInstance = new $className();
        call_user_func_array([$jobInstance, $method], $params);

        Log::info("Job executed successfully: $className::$method with params " . json_encode($params));
    }
}
