<?php

namespace App\Imports;

use App\Brand;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Log;
use Maatwebsite\Excel\Concerns\OnEachRow;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithMultipleSheets;
use Maatwebsite\Excel\Reader;
use Maatwebsite\Excel\Row;

class CarsImport implements OnEachRow, WithHeadingRow, WithMultipleSheets, WithChunkReading, WithBatchInserts
{
    /**
     * 默认只取第一个sheet
     * @return array
     */
    public function sheets(): array
    {
        return [
            0 => new static(),
        ];
    }

    /**
     * @param array $row
     *
     * @return Model|null
     */
    public function model(array $row)
    {
        Log::info('row2 is ' . json_encode($row));
//        Reader::macro();
//        return new Brand([
//
//        ]);
    }

    /**
     * 分块读取
     * @return int
     */
    public function chunkSize(): int
    {
        return 1000;
    }

    /**
     * 批量插入
     * @return int
     */
    public function batchSize(): int
    {
        return 1000;
    }

    /**
     * @inheritDoc
     */
    public function onRow(Row $row)
    {
        
        Log::info('row is ' . json_encode($row->getDelegate()));
    }

//    /**
//     * 字段验证
//     * @return array
//     */
//    public function rules():array
//    {
//        return [
//            '1' => Rule::in(['patrick@maatwebsite.nl']),
//
//            // Above is alias for as it always validates in batches
//            '*.1' => Rule::in(['patrick@maatwebsite.nl']),
//
//            // Can also use callback validation rules
//            '0' => function($attribute, $value, $onFailure) {
//                if ($value !== 'Patrick Brouwers') {
//                    $onFailure('Name is not Patrick Brouwers');
//                }
//            }
//        ];
//    }
//
//    /**
//     * @return array
//     */
//    public function customValidationMessages()
//    {
//        return [
//            '1.in' => 'Custom message for :attribute.',
//        ];
//    }
}
