package com.marcus.crudspring.controller;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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
@RequestMapping("/api/contas")
@AllArgsConstructor
public class ContaController {

    @Autowired
    private ContasRepository contaRepository;

    //@RequestMapping(method=RequestMethod.GET)
    @GetMapping
    public List<Conta>list(){
        return contaRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Conta> findById(@PathVariable Long id){
        return contaRepository.findById(id)
                .map(record->ResponseEntity.ok().body(record))
                .orElse(ResponseEntity.notFound().build());
    }

    //@RequestMapping(method=RequestMethod.POST)
    @PostMapping    
    @ResponseStatus(code = HttpStatus.CREATED)
    public Conta create(@RequestBody Conta account){
    return contaRepository.save(account);
        //return ResponseEntity.status()
                //.body(contaRepository.save(account
    }

}
