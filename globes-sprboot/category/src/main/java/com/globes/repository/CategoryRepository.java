package com.globes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.globes.entity.Category;


@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer>{
	//JPQL Query to select cat from your entity class e.g: "Category.java"
	@Query("select cat from Category cat where cat.categoryName > :categoryname")
	//java method to search category by categoryname from list of categories
	public List<Category> searchCategoryByCategoryName(@Param("categoryname") String categoryName);
}
