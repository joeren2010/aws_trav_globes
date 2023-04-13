package com.globes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.client.RestTemplate;

import com.globes.entity.Category;


public class ApiCall {
	@Autowired
	private RestTemplate restTemplate;
	
	private static final String urlCategory ="http://localhost:8282";
	
	public Category getCategoryDetails(int categoryId) {
		Category category = restTemplate.getForObject(
				urlCategory + "/category/id?id={categoryId}",
				Category.class, categoryId);
		return category;
	}
	
	// http://localhost:8282/category/findCategory
}
