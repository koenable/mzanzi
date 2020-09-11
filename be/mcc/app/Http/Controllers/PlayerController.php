<?php

namespace App\Http\Controllers;

use App\Player;
use Illuminate\Http\Request;

class PlayerController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {}



    public function showAllPlayers(){
            return response()->json(Player::all());
    }


    // Create new player information 
    public function createNewPlayer(Request $request){
        // validate user input
        $this->validate($request, [
            'name' => 'required',
            'surname' => 'required',
            'email' => 'required',
            'team_id' => 'required',
            'active' => 'required',
        ]);

        $results = Player::where('email', '=', $request->input('email'))->count();

        if($results>0){
            return "This Player is already registered:" . $request->input('name') . ". Register a different player.";
        } 
        else
        {   // Save new the new Player
            $team = Player::create($request->all());
            return response()->json($team, 201);
        }

    }



    // Update player information 
    public function updatePlayerDetails($id,Request $request){
        $this->validate($request, [
            'name' => 'required',
            'surname' => 'required',
            'email' => 'required',
            'team_id' => 'required',
            'active' => 'required',
           ]);
    
        $player_to_update = Player::findOrFail($id);
        $player_to_update->update($request->all());
        return response()->json($player_to_update, 200); 
    
        }



    }
