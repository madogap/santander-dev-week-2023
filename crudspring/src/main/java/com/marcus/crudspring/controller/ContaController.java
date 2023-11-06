package com.marcus.crudspring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.marcus.crudspring.model.Conta;
import com.marcus.crudspring.repository.ContasRepository;

import lombok.AllArgsConstructor;
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/contas")
@AllArgsConstructor
public class ContaController {
   
    @Autowired
    private ContasRepository contaRepository;

    @GetMapping
    public List<Conta> list() {
        return contaRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Conta> findById(@PathVariable("id") Long id) {

        return contaRepository.findById(id)

                .map(recordFound -> ResponseEntity.ok().body(recordFound))

                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Conta create(@RequestBody Conta account) {
        return contaRepository.save(account);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<Conta> update(@PathVariable("id") Long id, @RequestBody Conta conta) {
        return contaRepository.findById(id)
                .map(recordFound -> {
                    recordFound.setName(conta.getName());
                    recordFound.setCategory(conta.getCategory());
                    recordFound.setDinheiroTotal(conta.getDinheiroTotal());
                    Conta update = contaRepository.save(recordFound);
                    return ResponseEntity.ok().body(update);

                }).orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        return contaRepository.findById(id)
                .map(recordFound -> {
                    contaRepository.deleteById(id);
                    return ResponseEntity.noContent().<Void>build();

                }).orElse(ResponseEntity.notFound().build());

    }
}
