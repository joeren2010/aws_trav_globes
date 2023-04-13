package com.globes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.globes.entity.Cart;


@Repository
public interface CartRepository extends JpaRepository<Cart, Integer>{
//	//JPQL Query to select cart from your entity class e.g: "Cart.java" 
//	@Query("select cart from Cart cart where cart.price > :price")
//	//java method to search cart by price from list of carts
//	public List<Cart> searchCabByPrice(@Param("price") int price);
}
