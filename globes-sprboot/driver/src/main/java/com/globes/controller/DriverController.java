package com.globes.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.globes.entity.Driver;
import com.globes.service.DriverService;



@RestController					//use rest-controller for frameworks like angular, etc
@RequestMapping("driver") 		//map url to driver webpage = http://localhost:9191/driver
@CrossOrigin					//to address CORS issues
public class DriverController {
	//instantiates class using autowired
	@Autowired
	DriverService driverService;
	
	
	//code for driver sign-up
	//map url to driver sign-up webpage = http://localhost:9191/driver/signUp
	@PostMapping(value = "signUp",consumes = MediaType.APPLICATION_JSON_VALUE)	//pass data in json format 
	//@request-body binds the http request values to the entity class
	public String signUp(@RequestBody Driver driver) {
		System.out.println(driver);
		return driverService.signUp(driver);
	}
	
	//code for driver sign-in
	//map url to driver sign-in webpage = http://localhost:9191/driver/signIn
	@PostMapping(value = "signIn")		
	//@request-body binds the http request values to the entity class
	public String signInDriver(@RequestBody Driver driver) {
		return driverService.signInDriver(driver);
	}
	
	// http://localhost:9191/driver/findAllDriver
	@GetMapping(value = "findAllDriver",produces = MediaType.APPLICATION_JSON_VALUE)		//pass data in json format
	public List<Driver> findAllDriver() {
		return driverService.findAllDriver();
	}
	
	// http://localhost:9191/driver/findDriverById/1 or // http://localhost:9191/driver/findDriverById/100
	@GetMapping("findDriverById/{pid}")
	public ResponseEntity<Driver>findDriverById (@PathVariable int pid){
		Driver driver = driverService.findDriverById(pid);	
		if(driver!=null)
			return new ResponseEntity<Driver>(driver, HttpStatus.OK);
		else
			return new ResponseEntity<Driver>(driver, HttpStatus.NOT_FOUND);
	}
	
}
