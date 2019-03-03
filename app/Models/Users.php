<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    protected $fillable = [
            'first_name', 
            'phone', 
            'sex', 
            'personal_data', 
        ];
}

