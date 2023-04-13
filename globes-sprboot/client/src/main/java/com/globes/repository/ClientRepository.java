package com.globes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.globes.entity.Client;


@Repository
public interface ClientRepository extends JpaRepository<Client, Integer>{
	//JPQL Query to select clt from your entity class e.g: "Client.java" 
	@Query("select clt from Client clt where clt.email = :emailname and clt.password = :pass")
	public Client signIn(@Param("emailname") String email, @Param("pass") String password);
}
