package com.globes.service;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.globes.entity.Category;
import com.globes.repository.CategoryRepository;

@Service
public class CategoryService {
	//instantiates interface using autowired
	@Autowired
	CategoryRepository categoryRepository;
	
	public String storeCategory(Category category) {
		category.setAddedOn(Date.valueOf(LocalDate.now()));
		categoryRepository.save(category);
		return "Category details successfully";
	}
	
	public List<Category> findAllCategory() {
		return categoryRepository.findAll();
	}
	
	public Category findCategoryById(int categoryid) {
		if(categoryRepository.findById(categoryid).isPresent()) {
			return categoryRepository.findById(categoryid).get();
		}
		else {
			return null;
		}
		
	}
	
	public String deleteCategoryById(int cid) {
		Optional<Category> result = categoryRepository.findById(cid);
		if(result.isPresent()) {
			Category cc = result.get();
			categoryRepository.delete(cc);
			return "Record deleted successfully";
		}else {
			return "Record not present";
		}
	}
	
	public String deleteAllCategory() {
		categoryRepository.deleteAll();
		return "All category deleted";
	}
}
