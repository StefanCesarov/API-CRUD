<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Proizvod;

class ProizvodController extends Controller
{
    //

    public function index () {
        return Proizvod::all();
    }
   
    public function show(Proizvod $proizvod)
    {
        return $proizvod;
    }

    public function store(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|max:255',
            'price' => 'required|integer'
        ]);

        $proizvod = Proizvod::create($request->all());
 
        return response()->json($proizvod, 201);
    }
 
    public function update(Request $request, Proizvod $proizvod)
    {
        $this->validate($request, [
            'title' => 'max:255',
            'price' => 'integer'
        ]);
        $proizvod->update($request->all());
 
        return response()->json($proizvod, 200);
    }
 
    public function delete(Proizvod $proizvod)
    {
        $proizvod->delete();
 
        return response()->json(null, 204);
    }
}
