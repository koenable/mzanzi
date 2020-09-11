<?php

namespace App\Http\Controllers;

use App\Fixture;
use Illuminate\Http\Request;

class FixtureController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {}


    // create a new Fixture table
    public function createFixture(Request $request){
        // validate user input
        $this->validate($request, [
            'name' => 'required',
            'date' => 'required',
            'start_time' => 'required',
            'end_time' => 'required',
            'active' => 'required',
            'tournament_id' => 'required',
            'team_one_id' => 'required',
            'team_two_id' => 'required'
            ]);

        $results = Fixture::where('name', '=', $request->input('name'))->count();

        if($results>0){
            return "This Fixure is already Set Up:" . $request->input('name') . ". Chose a different Name for the fixture.";
        } 
        else
        {   // Save new the new team
            $team = Fixture::create($request->all());
            return response()->json($team, 201);
        }

    }



    // Update existing Team
    // Soft delete an existing team( change 'active' = 1)
    // public function updateFixture($id,Request $request){
    //     //validate
    //     $this->validate($request,[
    //         'name' => 'required',
    //         'logo' => 'required',
    //         'home_kit_shirt' => 'required',
    //         'away_kit_shorts' => 'required',
    //         'active' => 'required'
    //     ]);
        
    //     $results = Team::find(($id))->update([
    //         'name' => $request->input('name'),
    //         'logo' => $request->input('logo'),
    //         'home_kit_shirt' => $request->input('home_kit_shirt'),
    //         'away_kit_shorts' => $request->input('away_kit_shorts'),
    //         'active' => $request->input('active')
    //      ]);
    //      return response()->json($results);


    // }


    // get all extisting Fixture
    public function getallTeams(Request $results){
        return response()->json(Team::all());
    }







}
