package com.globes.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.globes.entity.Admin;
import com.globes.repository.AdminRepository;


@Service
public class AdminService {
	//instantiates interface using autowired
	@Autowired
	AdminRepository adminRepository;
	
	
	//code for admin sign-up
	public String signUp(Admin admin) {
		adminRepository.save(admin);			//insert query = similar to pojo
		return "Admin Details stored successfully";
	}
	
	//code for admin sign-in
	public String signInAdmin(Admin admin) {
		if(adminRepository.signIn(admin.getEmail(), admin.getPassword())!=null) {
			return "success";
		}else {
			return "failure";
		}
	}
}
