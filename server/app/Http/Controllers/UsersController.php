<?php

namespace App\Http\Controllers;

use CloudCreativity\LaravelJsonApi\Http\Controllers\JsonApiController;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Request;

class UsersController extends JsonApiController
{
    public function current()
    {
        dd(12111);
        return $this->reply()->content(auth()->user());
    }
}
