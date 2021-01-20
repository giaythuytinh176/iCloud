<?php
/**
 * Created by PhpStorm.
 * User: thaotm
 * Date: 11/24/20
 * Time: 00:38
 */
namespace App\Models;
use Illuminate\Database\Eloquent\Model;
use DB;

class Customer extends Model {
    public $timestamps = false;
    protected $table = 'customers';
    protected $primaryKey = 'id';

    public static function pagedList($search, $offset, $limit)
    {
        $list = DB::table('customers')->where('first_name', 'like', '%' . $search . '%')
            ->orWhere('mobile_phone', 'like', '%' . $search . '%')
            ->offset($offset)
            ->limit($limit)
            ->get();
        return $list;
    }

    public static function getById($id)
    {
        return Customer::where('id','=', $id)->first();
    }

}