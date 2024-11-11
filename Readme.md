Question One

php artisan job:run "App\Console\Jobs\JobRunner" "myMethod" '["param1","param2"]'

run this code on your terminal for question 

i created the helper file registered it composer.json and run composer dump-autoload

i created RunBackgroundJob.php in App/Console/Commands/RunBackgroundJob.php

i created jobRunner.php  App/JOBS/jobRunner.php

i added this to my logging.php

  'bg_jobs_errors'=>[
            'driver' => 'single',
            'path' => storage_path('logs/bg_jobs_errors.log'),
            'level' => 'error',
        ],

        it create a new log file aside from laravel.log



Question Two