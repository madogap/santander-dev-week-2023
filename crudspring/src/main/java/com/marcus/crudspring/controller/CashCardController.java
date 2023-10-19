package com.marcus.crudspring.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.marcus.crudspring.model.CashCard;

@RestController
public class CashCardController {
    @GetMapping("/{requestedId}")
    public ResponseEntity<CashCard> findById() {
        CashCard cashCard = new CashCard(99L, 0.0);
        return ResponseEntity.ok(cashCard);
    }

    @GetMapping("/{requestedId}")
    public ResponseEntity<CashCard> findById(@PathVariable Long requestedId) {
        if (requestedId.equals(99L)) {
            CashCard cashCard = new CashCard(99L, 123.45);
            return ResponseEntity.ok(cashCard);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}