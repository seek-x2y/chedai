<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Configuration extends Model
{
   
    public function fee(){
        return $this->hanOne('App\FeeRate', 'config_id', 'id');
    }
}
