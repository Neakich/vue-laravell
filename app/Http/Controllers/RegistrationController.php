<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\RegistrationRequest;
use App\Models\Users;

class RegistrationController extends Controller
{
    public function index(RegistrationRequest $request)
    {
        $data = $request->validated();
        $user = Users::where('phone', $data['phone'])->first();

        abort_if($user, 422, 'Пользователь с таким номером уже существует');

        $user = new Users($data);
        $user->save();

        return response()->json($user);

    }
}
