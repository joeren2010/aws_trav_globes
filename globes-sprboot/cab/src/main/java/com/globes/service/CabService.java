package com.globes.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.globes.entity.Cab;
import com.globes.repository.CabRepository;


@Service
public class CabService {
	//instantiates interface using autowired
	@Autowired
	CabRepository cabRepository;
	
	public String storeCab(Cab cab) {
		cabRepository.save(cab);			//insert query = similar to pojo
		return "Cab Details stored successfully";
	}
	
	public List<Cab> findAllCab() {
		return cabRepository.findAll();			//select query 
	}
	
	public List<Cab> findCabByPrice(int price){
		return cabRepository.searchCabByPrice(price);
	}
	
	public Cab findCabById(int cabid) {
		if(cabRepository.findById(cabid).isPresent()) {
			return cabRepository.findById(cabid).get();
		}
		else {
			return null;
		}
		
	}
	
	//method by Nikunj - it works - DO NOT DELETE
//	public Cab getCabById(int id) {
//		if(cabRepository.findById(id).isPresent()) {
//			return cabRepository.findById(id).get();
//		}
//		else {
//			return null;
//		}
//		
//	}

//	public String findCabById(int cabid) {
//	//using "optional" method
//	Optional<Cab> result = cabRepository.findById(cabid);			//using primary key
//	if(result.isPresent()) {
//		Cab pp = result.get();
//		return pp.toString();
//	}else {
//		return "Cab not present";
//	}
//}
	
	public String updateCabDetails(Cab cab) {
		//using "optional" method
		Optional<Cab> result = cabRepository.findById(cab.getCabId());		//using primary key
		if(result.isPresent()) {
			Cab pp	= result.get();
			pp.setPrice(cab.getPrice());
			/*
			 * 	we can update more property 
			 * 
			 */
			cabRepository.saveAndFlush(pp);			//flush = clears-out the repo of any buffer data
			return "Cab Details updated successfully";
		}else {
			return "Cab not present";
		}
	}
	
	public String deleteCabUsingId(int cabid) {
		//using "optional" method
		Optional<Cab> result = cabRepository.findById(cabid);              //using primary key
		if(result.isPresent()) {
			Cab pp = result.get();
			cabRepository.deleteById(pp.getCabId());
			return "Cab details deleted successfully";
		}else {
			return "Cab not present";
		}
	}
	
	public String deleteAllCab() {
		cabRepository.deleteAll();
		return "All cab deleted";
	}
}
