package com.globes.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import com.globes.entity.Cab;
import com.globes.entity.Cart;
import com.globes.entity.Client;
import com.globes.entity.Driver;
import com.globes.entity.Resv;
import com.globes.repository.ResvRepository;


@Service
public class ResvService {
	//instantiates interface using autowired
	@Autowired
	ResvRepository resvRepository;
	
	@Autowired
	RestTemplate restTemplate;
	
	public String storeResv(Resv resv) {
		Optional<Resv> result = resvRepository.findById(resv.getResvId());
		if(result.isPresent()) {
			return "Resv id must be unique";
		}else {
		Cab cc = restTemplate.getForObject("http://CAB-MICRO-SERVICE/cab/findCabById/"+resv.getCabId(), Cab.class);
		Cart ct = restTemplate.getForObject("http://CART-MICRO-SERVICE/cart/findCartById/"+resv.getCartId(), Cart.class);
		Client cl = restTemplate.getForObject("http://CLIENT-MICRO-SERVICE/client/findClientById/"+resv.getClientId(), Client.class);
		Driver dr = restTemplate.getForObject("http://DRIVER-MICRO-SERVICE/driver/findDriverById/"+resv.getDriverId(), Driver.class);
//		Cab cc = restTemplate.getForObject("http://CAB-MICRO-SERVICE/cab/findAllCabByName/"+resv.getCabId(), Cab.class);
			System.out.println(cc.getCabId()+" "+cc.getCabTitle());
			System.out.println(ct.getCartId()+" "+ct.getPickupLoc());
			resv.setCabId(cc.getCabId());
			resv.setCartId(ct.getCartId());
			resv.setClientId(cl.getClientid());
			resv.setDriverId(dr.getDriverid());
			resvRepository.save(resv);
			return "Resv Details stored successfully";
		}
	}
	
	public List<Resv> findAllResv() {
		return resvRepository.findAll();			//select query 
	}
	
	public Resv findResvById(int resvid) {
		if(resvRepository.findById(resvid).isPresent()) {
			return resvRepository.findById(resvid).get();
		}
		else {
			return null;
		}
		
	}
	
//	public String findResvById(int resvid) {
//		Optional<Resv> result = resvRepository.findById(resvid);			//using "optional" method; using primary key
//		if(result.isPresent()) {
//			//Resv pp = result.get();
//			return result.get().toString();
//		}else {
//			return "Resv not present";
//		}
//	}
	
	public String updateResv(Resv pp) {
		Optional<Resv> result = resvRepository.findById(pp.getResvId());
		if(result.isPresent()) {
			Resv p = result.get();
			p.setResvStatus(pp.getResvStatus());
			//p.setPrice(pp.getPrice());
			resvRepository.saveAndFlush(p);
			return "Resv details updated successfully";
		}else {
			return "Resv not present";
		}
	}
		
	public String deleteResvById(int resvid) {
		//using "optional" method
		Optional<Resv> result = resvRepository.findById(resvid);              //using primary key
		if(result.isPresent()) {
			Resv p = result.get();
			resvRepository.deleteById(p.getResvId());
			return "Resv details deleted successfully";
		}else {
			return "Resv not present";
		}
	}
	
	public String deleteAllResv() {
		resvRepository.deleteAll();
		return "Add resv deleted";
	}
}
