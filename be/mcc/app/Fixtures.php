<?php

namespace App;


use Illuminate\Database\Eloquent\Model;


class Fixtures extends Model 
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'date','start_date','end_date','active','tournament_id','team_one_id','team_two_id'
    ];

    
}
