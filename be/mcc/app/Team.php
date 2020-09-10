<?php

namespace App;


use Illuminate\Database\Eloquent\Model;


class Team extends Model 
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'logo', 'home_kit_shirt', 'away_kit_shorts'
    ];

    
}
