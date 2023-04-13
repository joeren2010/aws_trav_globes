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


import com.globes.entity.Cab;
import com.globes.service.CabService;

@RestController						//use rest-controller for frameworks like angular, etc
@RequestMapping("cab") 				//map url to products webpage = http://localhost:7171/cab
@CrossOrigin						//to address CORS issues
public class CabController {
	//instantiates class using autowired
	@Autowired
	CabService cabService;
	
	// http://localhost:7171/cab/storeCab 
	@PostMapping(value = "storeCab",consumes = MediaType.APPLICATION_JSON_VALUE)	//pass data in json format 
	//@request-body binds the http request values to the entity class
	public String storeCab(@RequestBody Cab cab) {
		System.out.println(cab);
		//return "done";
		return cabService.storeCab(cab);
	}
	
	// http://localhost:7171/cab/findAllCab
	@GetMapping(value = "findAllCab",produces = MediaType.APPLICATION_JSON_VALUE)		//pass data in json format
	public List<Cab> findAllCab() {
		return cabService.findAllCab();
	}
	
	// http://localhost:7171/cab/findCabById/1 or // http://localhost:7171/cab/findCabById/100
	@GetMapping("findCabById/{pid}")
	public ResponseEntity<Cab>findCabById (@PathVariable int pid){
		Cab cab = cabService.findCabById(pid);	
		if(cab!=null)
			return new ResponseEntity<Cab>(cab, HttpStatus.OK);
		else
			return new ResponseEntity<Cab>(cab, HttpStatus.NOT_FOUND);
	}

	//method by Nikunj - it works - DO NOT DELETE
//	// http://localhost:7171/cab/1 or // http://localhost:7171/cab/100
//	@GetMapping("/{id}")
//	public ResponseEntity<Cab>getCabById (@PathVariable int id){
//		Cab cab= cabService.getCabById(id);	
//		if(cab!=null)
//			return new ResponseEntity<Cab>(cab, HttpStatus.OK);
//		else
//			return new ResponseEntity<Cab>(cab, HttpStatus.NOT_FOUND);
//	}
	
//	// http://localhost:7171/cab/findCabById/1 or // http://localhost:7171/cab/findCabById/100
//	@GetMapping(value = "findCabById/{pid}")
//	//@pathvariable extracts data directly from the url e.g: pid = 1 or 100 as above
//	public String findCabById(@PathVariable("pid") int pid) {
//		return cabService.findCabById(pid);
//	}
	
	// http://localhost:7171/cab/findCabByPrice/35000
	@GetMapping(value = "findCabByPrice/{price}")
	//@pathvariable extracts data directly from the url e.g: price = 35000 as above
	public List<Cab> findCabByPrice(@PathVariable("price") int price) {
		return cabService.findCabByPrice(price);
	}
	
	// http://localhost:7171/cab/updateCab
	@PutMapping(value = "updateCab",consumes = MediaType.APPLICATION_JSON_VALUE)		//pass data in json format
	//@request-body binds the http request values to the entity class
	public String updateCab(@RequestBody Cab cab) {
		return cabService.updateCabDetails(cab);
	}
	
	// http://localhost:7171/cab/deleteCabById/1
	@DeleteMapping(value = "deleteCabById/{pid}")
	//@pathvariable extracts data directly from the url e.g: pid = 1 as above
	public String deletetCabById(@PathVariable("pid") int pid) {
		return cabService.deleteCabUsingId(pid);
	}
	
	// http://localhost:7171/cab/deleteAll
	@DeleteMapping(value = "deleteAll")
	public String deletetAll() {
		return cabService.deleteAllCab();
	}
}
