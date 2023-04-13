package com.globes.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.globes.entity.Cart;
import com.globes.repository.CartRepository;


@Service
public class CartService {
	//instantiates interface using autowired
	@Autowired
	CartRepository cartRepository;
	
	public String storeCart(Cart cart) {
		cartRepository.save(cart);			//insert query = similar to pojo
		return "Cart Details stored successfully";
	}
	
	public List<Cart> findAllCart() {
		return cartRepository.findAll();			//select query 
	}
	
//	public List<Cart> findCartByPrice(int price){
//		return cartRepository.searchCartByPrice(price);
//	}
	
	
	public Cart findCartById(int cartid) {
		if(cartRepository.findById(cartid).isPresent()) {
			return cartRepository.findById(cartid).get();
		}
		else {
			return null;
		}
		
	}
	
//	public String findCartById(int cartid) {
//		//using "optional" method
//		Optional<Cart> result = cartRepository.findById(cartid);			//using primary key
//		if(result.isPresent()) {
//			Cart pp = result.get();
//			return pp.toString();
//		}else {
//			return "Cart not present";
//		}
//	}
	
	public String updateCartDetails(Cart cart) {
		//using "optional" method
		Optional<Cart> result = cartRepository.findById(cart.getCartId());		//using primary key
		if(result.isPresent()) {
			Cart pp	= result.get();
			//pp.setPrice(cart.getPrice());
			/*
			 * 	we can update more property 
			 * 
			 */
			cartRepository.saveAndFlush(pp);			//flush = clears-out the repo of any buffer data
			return "Cart Details updated successfully";
		}else {
			return "Cart not present";
		}
	}
	
	public String deleteCartUsingId(int cartid) {
		//using "optional" method
		Optional<Cart> result = cartRepository.findById(cartid);              //using primary key
		if(result.isPresent()) {
			Cart pp = result.get();
			cartRepository.deleteById(pp.getCartId());
			return "Cart details deleted successfully";
		}else {
			return "Cart not present";
		}
	}
	
	public String deleteAllCart() {
		cartRepository.deleteAll();
		return "All cart deleted";
	}
}
