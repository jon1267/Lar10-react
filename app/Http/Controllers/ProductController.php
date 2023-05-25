<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class ProductController extends Controller
{
    public function addProduct(Request $request)
    {
        $product = new Product();
        $product->name = $request->name;
        $product->description = $request->description;
        if($request->photo != '') {
            $strPos = strpos($request->photo, ';');
            $substr = substr($request->photo, 0, $strPos);
            $ext = explode('/',$substr)[1];
            $name = time().'.'.$ext;
            $img = Image::make($request->photo)->resize(117,100);
            $uploadPath = public_path().'/upload/';
            $img->save($uploadPath.$name);
            $product->photo = $name;
        } else {
            $product->photo = 'image.png';
        }
        $product->type = $request->type;
        $product->quantity = $request->quantity;
        $product->price = $request->price;
        $product->save();
    }
}
