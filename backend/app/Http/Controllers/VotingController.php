<?php

namespace App\Http\Controllers;

use Exception;
use App\Voting;
use Illuminate\Http\Request;

class VotingController extends Controller
{
   public function index()
   {
      $resource = Voting::orderBy('id', 'desc')->get();

      return response()->json($resource);
   }

   public function store(Request $request)
   {
      $voting = new Voting();
      $voting->name = $request->name;
      $voting->end_date = $request->end_date;
      $voting->created_by = $request->created_by;
      $voting->voted = $request->voted;

      try {
         $voting->save();
      } catch (Exception $e) {
         return response()->json($e, 404);
      }

      return response()->json($voting, 201);
   }

   public function show(int $id)
   {
      $resource = Voting::find($id);

      if (is_null($resource)) {
         return response()->json('', 204);
      }
      return response()->json($resource);
   }

   public function update(int $id, Request $request)
   {
      $resource = Voting::find($id);

      echo $resource;

      if (is_null($resource)) {
         return response()->json(['Error' => 'Voting ' . 'not found'], 404);
      }

      $resource->fill($request->all());
      $resource->save();

      return response()->json($resource);
   }

   public function destroy(int $id)
   {
      $quantity = Voting::destroy($id);

      if ($quantity === 0) {
         return response()->json(['Error' => 'Voting ' . 'not found'], 404);
      }

      return response()->json('', 204);
   }
}
