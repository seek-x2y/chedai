<?php

use Illuminate\Database\Seeder;
use App\Brand;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $arr = ['奔驰', '宝马', '大众', '丰田', '马自达'];
        foreach($arr as $val){
            Brand::firstOrCreate([
                'name' => $val,
                'logo' => ''
            ]);
        }
    }
}
