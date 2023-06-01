<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Intervention\Image\Facades\Image;

class ProductController extends Controller
{
    public function getAllProduct()
    {
        return response()->json(['products' => Product::all()],200);
    }

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

    public function editProduct($id)
    {
        return response()->json(['product' => Product::find($id)],200);
    }

    public function updateProduct(Request $request, $id)
    {
        $product = Product::find($id);

        $product->name = $request->name;
        $product->description = $request->description;

        if($product->photo != $request->photo) {
            $strPos = strpos($request->photo, ';');
            $substr = substr($request->photo, 0, $strPos);
            $ext = explode('/',$substr)[1];
            $name = time().'.'.$ext;
            $img = Image::make($request->photo)->resize(117,100);
            $uploadPath = public_path().'/upload/';
            $image = $uploadPath . $product->photo;
            $img->save($uploadPath . $name);
            if (file_exists($image)) {
                @unlink($image);
            }
        } else {
            $name = $product->photo;
        }
        $product->photo = $name;
        $product->type = $request->type;
        $product->quantity = $request->quantity;
        $product->price = $request->price;
        $product->save();
    }

    public function removeProduct($id)
    {
        $product = Product::findOrFail($id);
        $imagePath = public_path().'/upload/';
        $image = $imagePath . $product->photo;
        if(file_exists($image)) {
            @unlink($image);
        }
        $product->delete();
    }
}
