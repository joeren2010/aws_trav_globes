package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication(scanBasePackages = "com")
@EntityScan(basePackages = "com.globes.entity")
@EnableJpaRepositories(basePackages = "com.globes.repository")
@EnableEurekaClient
public class ResvApplication {

	public static void main(String[] args) {
		SpringApplication.run(ResvApplication.class, args);
		System.out.println("Resv Microservice Up!");
	}
	
	
	@Bean
	@LoadBalanced					// di for Rest API to invoke another microservice 
	public RestTemplate restTemplate() {
		return new RestTemplate();
	}
}
