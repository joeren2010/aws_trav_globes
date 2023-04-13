package com.globes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.globes.entity.Category;
import com.globes.service.CategoryService;


@RestController						//use rest-controller for frameworks like angular, etc
@RequestMapping("category") 		//map url to categories webpage = http://localhost:7272/category
@CrossOrigin						//to address CORS issues
public class CategoryController {
	//instantiates class using autowired
	@Autowired
	CategoryService categoryService;
	
	// http://localhost:7272/category/storeCategory
	@PostMapping(value = "storeCategory",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String storeCategory(@RequestBody Category category) {
		return categoryService.storeCategory(category);
	}
	
	// http://localhost:7272/category/findCategory
	@GetMapping(value = "findCategory",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Category> findCategory() {
		return categoryService.findAllCategory();
	}
	
	// http://localhost:7272/category/deleteCategory/1
	@DeleteMapping(value = "deleteCategory/{cid}")
	public String deleteCategory(@PathVariable("cid") int cid) {
		return categoryService.deleteCategory(cid);
	}
}
