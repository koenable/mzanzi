<?php

namespace App\Http\Controllers;

use App\Company;
use Illuminate\Http\Request;

class CompanyDataController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {}



    public function showCompanyData(){
            return response()->json(Company::all());
    }

    public function showSingleData($id){
        return response()->json(Company::find($id));
     }


    public function createnNew(Request  $request){
        //validation
        $this->validate($request, [
         'name' => 'required',
         'logo' => 'required',
         'address' => 'required',
         'phone__1' => 'required', 
         'phone__2' => 'required'
        ]);

        // save entry to database
        $companydata = Company::create($request->all());
        return response()->json($companydata, 201);
        
    }   


    public function updatedetails($id,Request $request){
        //validate 
        $this->validate($request, [
            'name' => 'required',
            'logo' => 'required',
            'address' => 'required',
            'phone__1' => 'required', 
            'phone__2' => 'required'
           ]);
    
        // find and update
        $companydata_update = Company::findOrFail($id);
        $companydata_update->update($request->all());
        return response()->json($companydata_update, 200); 
    
        }

}
