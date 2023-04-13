package com.globes.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.globes.entity.Admin;
import com.globes.service.AdminService;


@RestController					//use rest-controller for frameworks like angular, etc
@RequestMapping("admin") 		//map url to admin webpage = http://localhost:6161/admin
@CrossOrigin					//to address CORS issues
public class AdminController {
	//instantiates class using autowired
	@Autowired
	AdminService adminService;
	
	//code for admin sign-up
	//map url to admin sign-up webpage = http://localhost:6161/admin/signUp
	@PostMapping(value = "signUp",consumes = MediaType.APPLICATION_JSON_VALUE)	//pass data in json format 
	//@request-body binds the http request values to the entity class
	public String signUp(@RequestBody Admin admin) {
		System.out.println(admin);
		return adminService.signUp(admin);
	}
	
	//code for admin sign-in
	//map url to admin sign-in webpage = http://localhost:6161/admin/signIn
	@PostMapping(value = "signIn")		
	//@request-body binds the http request values to the entity class
	public String signInAdmin(@RequestBody Admin admin) {
		return adminService.signInAdmin(admin);
	}
}
