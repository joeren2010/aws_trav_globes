package com.globes.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.globes.entity.Resv;
import com.globes.service.ResvService;


@RestController						//use rest-controller for frameworks like angular, etc
@RequestMapping("resv") 			//map url to resv webpage = http://localhost:4141/resv
@CrossOrigin						//to address CORS issues
public class ResvController {
	//instantiates class using autowired
	@Autowired
	ResvService resvService;
	
	// http://localhost:4141/cab/storeResv 
	@PostMapping(value = "storeResv",consumes = MediaType.APPLICATION_JSON_VALUE)	//pass data in json format 
	//@request-body binds the http request values to the entity class
	public String storeResv(@RequestBody Resv resv) {
		System.out.println(resv);
		//return "done";
		return resvService.storeResv(resv);
	}
	
	// http://localhost:4141/resv/findAllResv
	@GetMapping(value = "findAllResv",produces = MediaType.APPLICATION_JSON_VALUE)		//pass data in json format
	public List<Resv> findAllResv() {
		return resvService.findAllResv();
	}
	
	// http://localhost:4141/resv/findResvById/1 or // http://localhost:4141/resv/findResvById/100
	@GetMapping("findResvById/{pid}")
	public ResponseEntity<Resv>findResvById (@PathVariable int pid){
		Resv resv = resvService.findResvById(pid);	
		if(resv!=null)
			return new ResponseEntity<Resv>(resv, HttpStatus.OK);
		else
			return new ResponseEntity<Resv>(resv, HttpStatus.NOT_FOUND);
	}
	
//	// http://localhost:4141/resv/findResvById/1
//	@GetMapping(value = "findResvById/{resvid}")
//	//@pathvariable extracts data directly from the url eg: resvid = 1 
//	public String findResvById(@PathVariable("resvid") int resvid) {
//		return resvService.findResvById(resvid);
//	}
		
	// http://localhost:4141/resv/updateResv
	@PutMapping(value = "updateResv",consumes = MediaType.APPLICATION_JSON_VALUE)		//pass data in json format
	public String updateResv(@RequestBody Resv resv) {
		return resvService.updateResv(resv);
	}
	
	// http://localhost:4141/resv/deleteResvById/1
	@DeleteMapping(value = "deleteResvById/{resvid}")
	public String deleteResvById(@PathVariable("resvid") int resvid) {
		return resvService.deleteResvById(resvid);
	}
	
	// http://localhost:4141/resv/deleteAll
	@DeleteMapping(value = "deleteAll")
	public String deletetAll() {
		return resvService.deleteAllResv();
	}
}
