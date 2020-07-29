<?php

namespace App\Http\Controllers;

use Exception;
use App\VotingItem;
use Illuminate\Http\Request;

class VotingItemController extends Controller
{
   public function index()
   {
      $resource = VotingItem::get();

      return response()->json($resource);
   }

   public function store(Request $request)
   {
      $voting = new VotingItem();
      $voting->name = $request->name;
      $voting->description = $request->description;
      $voting->votes = $request->votes;
      $voting->voting_id = $request->voting_id;

      try {
         $voting->save();
      } catch (Exception $e) {
         return response()->json($e, 404);
      }

      return response()->json($voting, 201);
   }

   public function show(int $id)
   {
      $resource = VotingItem::find($id);

      if (is_null($resource)) {
         return response()->json('', 204);
      }
      return response()->json($resource);
   }

   public function update(int $id, Request $request)
   {
      $resource = VotingItem::find($id);

      if (is_null($resource)) {
         return response()->json(['Error' => 'Voting item ' . 'not found'], 404);
      }

      $resource->fill($request->all());
      $resource->save();

      return response()->json($resource);
   }

   public function destroy(int $id)
   {
      $quantity = VotingItem::destroy($id);

      if ($quantity === 0) {
         return response()->json(['Error' => 'Voting item ' . 'not found'], 404);
      }

      return response()->json('', 204);
   }
}
