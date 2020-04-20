<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFeeRatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fee_rates', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('config_id');
            $table->unsignedInteger('period_id');
            // $table->string('periods')->comment('期数');
            $table->unsignedInteger('down_payment_rate')->comment('首付比例');
            $table->unsignedInteger('discount_ceiling')->comment('贴息上限');
            $table->tinyInteger('discount_type')->comment('贴息类型');
            $table->unsignedInteger('seller_rate')->comment('商家费率');
            $table->unsignedInteger('customer_rate')->comment('客户费率');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('fee_rates');
    }
}
