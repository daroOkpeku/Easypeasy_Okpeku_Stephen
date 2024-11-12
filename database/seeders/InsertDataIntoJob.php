<?php

namespace Database\Seeders;

use App\Models\Jobs;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Faker\Factory as Faker;
class InsertDataIntoJob extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
    // run php artisan db:seed --class=InsertDataIntoJob 
        $faker = Faker::create();
       
        for ($i = 0; $i < 100; $i++) {
            Jobs::create([
                'title' => $faker->jobTitle,
                'status' => $faker->randomElement(['active', 'inactive']),
                'priority' => $faker->randomElement(['high', 'medium', 'low']),
                'company' => $faker->company,
                'size' => $faker->randomElement(['small', 'medium', 'large']),
                'from_age' => $faker->numberBetween(20, 30),
                'to_age' => $faker->numberBetween(31, 60),
            ]);
        }
    
        
    }
}
