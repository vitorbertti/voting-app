<?php

namespace App;

use App\VotingItem;
use Illuminate\Database\Eloquent\Model;

class Voting extends Model
{
   protected $fillable = ['name', 'endDate', 'voted'];

   public function votingItems()
   {
      return $this->hasMany(VotingItem::class);
   }

   public function getVotedAttribute($voted): bool
   {
      return $voted;
   }
}
