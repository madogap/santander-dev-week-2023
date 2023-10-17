package com.marcus.crudspring.repository;

import com.marcus.crudspring.model.Conta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ContasRepository extends JpaRepository<Conta, Long> {
    
}
