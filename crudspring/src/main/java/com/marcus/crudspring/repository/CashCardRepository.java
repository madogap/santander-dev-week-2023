package com.marcus.crudspring.repository;
import org.springframework.data.repository.CrudRepository;

import com.marcus.crudspring.model.CashCard;

public interface CashCardRepository extends CrudRepository<CashCard, Long>{
    
}
