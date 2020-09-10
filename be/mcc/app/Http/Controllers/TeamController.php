<?php

namespace App\Http\Controllers;

use App\Team;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TeamController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {}


    public function createTeam(Request $request){
        //   validate
        $this->validate($request, [
            'name' => 'required',
            'logo' => 'required',
            'home_kit_shirt' => 'required',
            'away_kit_shorts' => 'required',
        ]);

        $results = Team::where('name', '=', $request->input('name'))->count();

        if($results>0){
            return "Team Already exits";
        } else
        {
            $team = Team::create($request->all());
            return response()->json($team, 201);
        }

    }


  







}
