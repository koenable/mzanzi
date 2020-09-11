<?php

namespace App\Http\Controllers;

use App\Tournament;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TournamentController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {}


    // create a new Tournament
    public function createTournament(Request $request){
        // validate user input
        $this->validate($request, [
            'name' => 'required',
            'description' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
            'active' => 'required'
        ]);

        $results = Tournament::where('name', '=', $request->input('name'))->count();

        if($results>0){
            return "This Tournament is already registered:" . $request->input('name') . ". Register a new Tournament.";
        } 
        else
        {   // Save new the new Tournament
            $team = Tournament::create($request->all());
            return response()->json($team, 201);
        }

    }




    // Update existing Tournament
    // Soft delete an existing Tournament( change 'active' = 1)
    public function updateTournament($id,Request $request){
        $this->validate($request, [
            'name' => 'required',
            'description' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
            'active' => 'required'
        ]);

        $tournament_update = Tournament::findOrFail($id);
        $tournament_update->update($request->all());
        return response()->json($tournament_update, 200); 

    }



    // get all extisting Tournamanets
    public function getallTournament(Request $results){
        return response()->json(Tournament::all());
    }







}
