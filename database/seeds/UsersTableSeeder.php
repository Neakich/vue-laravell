<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'first_name' => 'Иван',
            'phone' => rand(1,999),
            'sex' => 'мужской',
            'personal_data' => 1
        ]);
        DB::table('users')->insert([
            'first_name' => 'Елена',
            'phone' => rand(1,999),
            'sex' => 'женский',
            'personal_data' => 1
        ]);
        DB::table('users')->insert([
            'first_name' => 'Екатерина',
            'phone' => rand(1,999),
            'sex' => 'женский',
            'personal_data' => 1
        ]);
        DB::table('users')->insert([
            'first_name' => 'Евгений',
            'phone' => rand(1,999),
            'sex' => 'мужской',
            'personal_data' => 1
        ]);
        DB::table('users')->insert([
            'first_name' => 'Дмитрий',
            'phone' => rand(1,999),
            'sex' => 'мужской',
            'personal_data' => 1
        ]);
    }
}
