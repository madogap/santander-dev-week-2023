package com.marcus.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;


import com.marcus.crudspring.model.Conta;
import com.marcus.crudspring.repository.ContasRepository;

@SpringBootApplication
public class CrudspringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudspringApplication.class, args);
	}

	@Bean	
	CommandLineRunner initDatabase(ContasRepository contaRepository){
		return args -> {
			contaRepository.deleteAll();
			Conta c = new Conta();
			c.setName("Major");
			c.setCategory("Pessoa Fisica(Pf)");
			c.setDinheiroTotal(90);
			contaRepository.save(c);

		};
	}
 
}
