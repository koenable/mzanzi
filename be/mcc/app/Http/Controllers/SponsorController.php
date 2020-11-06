<?php

namespace App\Http\Controllers;

use App\Sponsor;
use Illuminate\Http\Request;

class SponsorController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {}


    // create a new Sponsor
    public function createSponsor(Request $request){
        // validate user input
        $this->validate($request, [
            'name' => 'required',
            'logo' => 'required',
            'description' => 'required',

        ]);

        $results = Sponsor::where('name', '=', $request->input('name'))->count();

        if($results>0){
            return "This Sponser is already registered:" . $request->input('name') . ". Please register a different Sponsor..";
        }
        else
        {   // Save new the new team
            $team = Sponsor::create($request->all());
            return response()->json($team);
        }

    }




    // Update existing Sponsor
    // Soft delete an existing team( change 'active' = 1)
    public function updateSponsor($id,Request $request){
        //validate
        $this->validate($request,[
                'name' => 'required',
                'logo' => 'required',
                'description' => 'required',
        ]);

        $sponsor_update = Sponsor::findOrFail($id);
        $sponsor_update->update($request->all());
        return response()->json($sponsor_update, 200);

    }





    // get all extisting Sponsors
    public function getallSponsors(Request $results){
        return response()->json(Sponsor::all());
    }


}
