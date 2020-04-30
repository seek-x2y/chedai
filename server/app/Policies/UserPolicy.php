<?php

namespace App\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class UserPolicy
{
    use HandlesAuthorization;

    public function view(User $user, User $model)
    {
        return true;
    }

    public function create(User $user)
    {
        return false;
    }

    public function update(User $user, User $model)
    {
        return $user->is($model);
    }

    public function delete(User $user, User $model)
    {
        return $this->update($user, $model);
    }
}
