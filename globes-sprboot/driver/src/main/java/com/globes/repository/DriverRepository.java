package com.globes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.globes.entity.Driver;


@Repository
public interface DriverRepository extends JpaRepository<Driver, Integer>{
	//JPQL Query to select dvr from your entity class e.g: "Driver.java" 
	@Query("select dvr from Driver dvr where dvr.email = :emailname and dvr.password = :pass")
	public Driver signIn(@Param("emailname") String email, @Param("pass") String password);
}
