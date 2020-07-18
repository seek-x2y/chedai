<?php

namespace App\Imports;

use App\Brand;
use Maatwebsite\Excel\Concerns\OnEachRow;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Reader;
use Maatwebsite\Excel\Row;

class CarsImport implements  OnEachRow, WithHeadingRow
{

    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
//    public function model(array $row)
//    {
//        Reader::macro();
//        return new Brand([
//
//        ]);
//    }


    /**
     * @inheritDoc
     */
    public function onRow(Row $row)
    {
        // TODO: Implement onRow() method.
    }
}
