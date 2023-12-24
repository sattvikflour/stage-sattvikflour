<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index()
    {
        $categories = Category::all();
        return view('admin.categories_view', compact('categories'));
    }

    public function create()
    {
        return view('admin.category_create');
    }

    public function store(Request $request)
    {
        //dd($request);
        $imagePath=null;
        $request->validate([
            'category_name' => 'required|string|max:255',
            'category_img' => 'required|image|mimes:jpeg,png,jpg,gif|max:5120', // 5120 KB (5 MB) limit
            'avail_status' => 'required|boolean',
            // Add validation rules for other fields if needed
        ]);
        //dd($request);
    
        // Handle image upload
        //dd($request->hasFile('category_img'));
        if ($request->hasFile('category_img')) {
        $imagePath = $request->category_img->store('category_images', 'public');
        //dd($imagePath);
        }
        Category::create([
            'category_name' => $request->input('category_name'),
            'category_img' => $imagePath,
            'avail_status' => $request->input('avail_status'),
            // Add other fields if needed
        ]);
    
        return redirect()->route('categories.view')->with('success', 'Category added successfully!');
    }
    

    // You can add more methods for handling CRUD operations

    public function edit($id)
    {
        // Fetch the category with the given ID
        $category = Category::findOrFail($id);

        // Pass the category to the edit view
        return view('admin.category_edit', compact('category'));
    }

    public function update(Request $request, $id)
{
    $request->validate([
        'category_name' => 'required|string|max:255',
        'avail_status' => 'required|boolean',
        'category_img' => 'image|mimes:jpeg,png,jpg,gif|max:2048', // Adjust the validation for image upload
        // Add validation rules for other fields if needed
    ]);

    $category = Category::findOrFail($id);

    $category->update([
        'category_name' => $request->input('category_name'),
        'avail_status' => $request->input('avail_status'),
        // Update image only if a new one is provided
        'category_img' => $request->hasFile('category_img') ? $this->uploadImage($request->file('category_img')) : $category->category_img,
        // Add other fields if needed
    ]);

    return redirect()->route('categories.view')->with('success', 'Category updated successfully!');
}

// Helper method to upload image
private function uploadImage($file)
{
    $fileName = time() . '.' . $file->getClientOriginalExtension();
    $file->storeAs('public/category_images', $fileName);
    return $fileName;
}
}
