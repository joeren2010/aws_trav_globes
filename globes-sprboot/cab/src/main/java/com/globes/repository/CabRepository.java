package com.globes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.globes.entity.Cab;

@Repository
public interface CabRepository extends JpaRepository<Cab, Integer>{
	//JPQL Query to select cab from your entity class e.g: "Cab.java" 
	@Query("select cab from Cab cab where cab.price > :price")
	//java method to search cab by price from list of cabs
	public List<Cab> searchCabByPrice(@Param("price") int price);
}
