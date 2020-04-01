<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CarType extends Model
{
    public $tiemstamps = false;

    public function configurations(){
        return $this->hasMany('App\Configuration', 'type_id', 'id');
    }
}
