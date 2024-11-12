<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Jobs extends Model
{
    use HasFactory;
    
    protected $fillable = [
        'title',
        'status',
        'priority',
        'company',
        'size',
        'from_age',
        'to_age'
       ];
}
