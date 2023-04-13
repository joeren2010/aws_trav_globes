package com.globes.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.globes.entity.Resv;


@Repository
public interface ResvRepository extends JpaRepository<Resv, Integer>{
//	//JPQL Query to select resv from your entity class e.g: "Resv.java" 
//	@Query("select resv from Resv resv where resv.price > :price")
//	//java method to search resv by price from list of resv
//	public List<Resv> searchResvByPrice(@Param("price") int price);
}
