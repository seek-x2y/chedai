<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Brand extends Model
{
    public $timestamps = false;
    
    public function cars{
        return $this->hasMany('App\CarType', 'brand_id', 'id');
    }
}
