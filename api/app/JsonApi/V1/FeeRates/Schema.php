<?php

namespace App\JsonApi\V1\FeeRates;

use Neomerx\JsonApi\Schema\SchemaProvider;

class Schema extends SchemaProvider
{

    /**
     * @var string
     */
    protected $resourceType = 'fee-rates';

    /**
     * @param $resource
     *      the domain record being serialized.
     * @return string
     */
    public function getId($resource)
    {
        return (string)$resource->getRouteKey();
    }

    /**
     * @param $resource
     *      the domain record being serialized.
     * @return array
     */
    public function getAttributes($resource)
    {
        return [
            'down_payment_rate' => $resource->down_payment_rate,
            'discount_ceiling' => $resource->discount_ceiling,
            'discount_type' => $resource->discount_type,
            'seller_rate' => $resource->seller_rate,
            'customer_rate' => $resource->customer_rate,
            'created-at' => $resource->created_at->toAtomString(),
            'updated-at' => $resource->updated_at->toAtomString(),
        ];
    }
}
