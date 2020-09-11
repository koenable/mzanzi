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


    // create a new team
    public function createTeam(Request $request){
        // validate user input
        $this->validate($request, [
            'name' => 'required',
            'logo' => 'required',
            'home_kit_shirt' => 'required',
            'away_kit_shorts' => 'required',
            'active' => 'required'
        ]);

        $results = Team::where('name', '=', $request->input('name'))->count();

        if($results>0){
            return "This Team is already registered:" . $request->input('name') . ". Chose different team name.";
        } 
        else
        {   // Save new the new team
            $team = Team::create($request->all());
            return response()->json($team, 201);
        }

    }



    // Update existing Team
    // Soft delete an existing team( change 'active' = 1)
    public function updateTeam($id,Request $request){
        //validate
        $this->validate($request,[
            'name' => 'required',
            'logo' => 'required',
            'home_kit_shirt' => 'required',
            'away_kit_shorts' => 'required',
            'active' => 'required'
        ]);
        
        $results = Team::find(($id))->update([
            'name' => $request->input('name'),
            'logo' => $request->input('logo'),
            'home_kit_shirt' => $request->input('home_kit_shirt'),
            'away_kit_shorts' => $request->input('away_kit_shorts'),
            'active' => $request->input('active')
         ]);
         return response()->json($results);


    }


    // get all extisting Teams
    public function getallTeams(Request $results){
        return response()->json(Team::all());
    }







}
