<?php

namespace App;

use App\Voting;
use Illuminate\Database\Eloquent\Model;

class VotingItem extends Model
{
   protected $fillable = ['name', 'description', 'votes', 'voting_id'];

   public function voting()
   {
      return $this->belongsTo(Voting::class);
   }
}
