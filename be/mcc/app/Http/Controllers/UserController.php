<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {}



    public function getAllUser(){
            return response()->json(User::all());
    }

    public function getUsers($id){
        return response()->json(User::find($id));
     }


    public function createnNewUser(Request  $request){
        //validation
        $this->validate($request, [
         'name' => 'required',
         'email' => 'required',
         'password' => 'required',
        ]);

        // save entry to database
        $Userdata = User::create($request->all());
        return response()->json($Userdata, 201);

    }


    public function updateUserdetails($id,Request $request){
        //validate
        $this->validate($request, [
            'name' => 'required',
            'email' => 'required',
            'password' => 'required',
           ]);

        // find and update
        $updated_user = User::findOrFail($id);
        $updated_user->update($request->all());
        return response()->json($updated_user, 200);

        }

}
