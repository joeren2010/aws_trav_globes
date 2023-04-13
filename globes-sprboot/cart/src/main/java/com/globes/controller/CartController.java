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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.globes.entity.Cart;
import com.globes.service.CartService;


@RestController						//use rest-controller for frameworks like angular, etc
@RequestMapping("cart") 		//map url to products webpage = http://localhost:5151/cart
@CrossOrigin						//to address CORS issues
public class CartController {
	//instantiates class using autowired
	@Autowired
	CartService cartService;
	
	// http://localhost:5151/cart/storeCart 
	@PostMapping(value = "storeCart",consumes = MediaType.APPLICATION_JSON_VALUE)	//pass data in json format 
	//@request-body binds the http request values to the entity class
	public String storeCart(@RequestBody Cart cart) {
		System.out.println(cart);
		//return "done";
		return cartService.storeCart(cart);
	}
	
	// http://localhost:5151/cart/findAllCart
	@GetMapping(value = "findAllCart",produces = MediaType.APPLICATION_JSON_VALUE)		//pass data in json format
	public List<Cart> findAllCart() {
		return cartService.findAllCart();
	}
	
	// http://localhost:5151/cart/findCartById/1 or // http://localhost:5151/cart/findCartById/100
	@GetMapping("findCartById/{pid}")
	public ResponseEntity<Cart>findCartById (@PathVariable int pid){
		Cart cart = cartService.findCartById(pid);	
		if(cart!=null)
			return new ResponseEntity<Cart>(cart, HttpStatus.OK);
		else
			return new ResponseEntity<Cart>(cart, HttpStatus.NOT_FOUND);
	}
	
//	// http://localhost:5151/cart/findCartById/1 or // http://localhost:5151/cart/findCartById/100
//	@GetMapping(value = "findCartById/{pid}")
//	//@pathvariable extracts data directly from the url e.g: pid = 1 or 100 as above
//	public String findCartById(@PathVariable("pid") int pid) {
//		return cartService.findCartById(pid);
//	}
	
//	// http://localhost:5151/cart/findCartByPrice/35000
//	@GetMapping(value = "findCartByPrice/{price}")
//	//@pathvariable extracts data directly from the url e.g: price = 35000 as above
//	public List<Cart> findCartByPrice(@PathVariable("price") int price) {
//		return cartService.findCartByPrice(price);
//	}
	
	// http://localhost:5151/cart/updateCart
	@PutMapping(value = "updateCart",consumes = MediaType.APPLICATION_JSON_VALUE)		//pass data in json format
	//@request-body binds the http request values to the entity class
	public String updateCart(@RequestBody Cart cart) {
		return cartService.updateCartDetails(cart);
	}
	
	// http://localhost:5151/cart/deleteCartById/1
	@DeleteMapping(value = "deleteCartById/{pid}")
	//@pathvariable extracts data directly from the url e.g: pid = 1 as above
	public String deletetCartById(@PathVariable("pid") int pid) {
		return cartService.deleteCartUsingId(pid);
	}
	
	// http://localhost:5151/cart/deleteAll
	@DeleteMapping(value = "deleteAll")
	public String deletetAll() {
		return cartService.deleteAllCart();
	}
}
