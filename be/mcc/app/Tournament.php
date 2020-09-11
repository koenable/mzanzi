<?php

namespace App;


use Illuminate\Database\Eloquent\Model;


class Tournament extends Model 
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description','start_date','end_date','active'
    ];

    
}
