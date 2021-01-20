<?php

namespace App\Http\Controllers\Backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Customer;
use Illuminate\Support\Facades\DB;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::pagedList(null, 0, 200);
        return view('backend.customer.index', compact('customers'));
    }

    public function showEditForm(Request $request)
    {
        $customer = Customer::getById($request->id);
        return view('backend.customer.edit', compact('customer'));
    }

    public function edit(Request $request)
    {
        $customer = Customer::getById($request->id);
        $customer->company = $request->company;
        $flg = $customer->update();
        if ($flg) {
            return back()->with('success', trans('backend/common.success'))->withInput();
        } else {
            return back()->with('error', trans('backend/common.error'))->withInput();
        }
        //$customer->save();
    }
}
