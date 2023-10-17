package com.marcus.crudspring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.core.env.CommandLinePropertySource;

import com.marcus.crudspring.model.Course;
import com.marcus.crudspring.repository.CourseRepository;

@SpringBootApplication
public class CrudspringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudspringApplication.class, args);
	}
	@Bean	
	CommandLineRunner initDatabase(CourseRepository courseRepository){
		return args -> {
			courseRepository.deleteAll();
			Course c = new Course();
			c.setName("Java");
			c.setCategory("Backend");
			courseRepository.save(c);
		};
	}
 
}
