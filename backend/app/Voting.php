<?php

namespace App;

use App\VotingItem;
use Illuminate\Database\Eloquent\Model;

class Voting extends Model
{
   protected $fillable = ['name', 'end_date', 'created_by', 'voted'];

   public function votingItems()
   {
      return $this->hasMany(VotingItem::class);
   }

   public function getVotedAttribute($voted): bool
   {
      return $voted;
   }
}
