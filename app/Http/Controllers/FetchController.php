<?php

namespace App\Http\Controllers;

use App\Models\Jobs;
use Illuminate\Http\Request;

class FetchController extends Controller
{

    public function fetchall(Request $request){
        $request->validate([
            'status' => 'nullable|in:active,inactive',
            'priority' => 'nullable|in:high,medium,low',
        ]);
        $job = Jobs::where(function($query) use ($request) {
            if ($request->has('status') && in_array($request->get('status'), ['active', 'inactive'])) {
                $query->where('status', $request->get('status'));
            } 
            elseif ($request->has('priority') && in_array($request->get('priority'), ['high', 'medium', 'low'])) {
                $query->where('priority', $request->get('priority'));
            }
        })->orderBy('created_at', 'desc')->paginate(8);
       return response()->json(["success"=>$job]);
    }


    public function dashboard(){
        return view('dashboard');
    }
}
