package com.globes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
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
	
	// http://localhost:7171/category/storeCategory
	@PostMapping(value = "storeCategory",consumes = MediaType.APPLICATION_JSON_VALUE)
	public String storeCategory(@RequestBody Category category) {
		return categoryService.storeCategory(category);
	}
	
	// http://localhost:7171/category/findCategory
	@GetMapping(value = "findCategory",produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Category> findCategory() {
		return categoryService.findAllCategory();
	}
	
	// http://localhost:7171/category/findCategoryById/1 or // http://localhost:7171/category/findCategoryById/100
	@GetMapping("findCategoryById/{pid}")
	public ResponseEntity<Category>findCategoryById (@PathVariable int pid){
		Category category = categoryService.findCategoryById(pid);	
		if(category!=null)
			return new ResponseEntity<Category>(category, HttpStatus.OK);
		else
			return new ResponseEntity<Category>(category, HttpStatus.NOT_FOUND);
	}
	
	// http://localhost:7171/category/deleteCategoryById/1
	@DeleteMapping(value = "deleteCategoryById/{cid}")
	public String deleteCategoryById(@PathVariable("cid") int cid) {
		return categoryService.deleteCategoryById(cid);
	}
	
	// http://localhost:7171/category/deleteAll
	@DeleteMapping(value = "deleteAll")
	public String deletetAll() {
		return categoryService.deleteAllCategory();
	}
}
