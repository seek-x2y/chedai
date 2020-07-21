<?php

namespace Tests\Unit;

//use Maatwebsite\Excel\Excel;
use PHPUnit\Framework\TestCase;
use Maatwebsite\Excel\Facades\Excel;

class ExcelImportTest extends TestCase
{
    public function testUserCanImport()
    {
        Excel::fake();
//        $this->actingAs($this->givenUser())
//            ->get('/users/import/xlsx');

        $file = '/var/www/chedai/server/storage/app/public/2020-07-20/f3427b5f12ed08025dec478b5bf0a2e7.xlsx';

        Excel::assertImported($file, 'public');

//        Excel::assertImported($file, 'public', function(UsersImport $import) {
//            return true;
//        });
//
//        // When passing the callback as 2nd param, the disk will be the default disk.
//        Excel::assertImported($file, function(UsersImport $import) {
//            return true;
//        });
    }
}
