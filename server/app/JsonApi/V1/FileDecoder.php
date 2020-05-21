<?php
namespace App\JsonApi\V1;

use CloudCreativity\LaravelJsonApi\Contracts\Decoder\DecoderInterface;

class FileDecoder implements DecoderInterface
{

    /**
     * @inheritdoc
     */
    public function decode($request): array
    {
        return $request->allFiles();
    }
}
