<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Configuration extends Model
{

    public function fee(){
        return $this->hasOne('App\FeeRate', 'config_id', 'id');
    }
}
