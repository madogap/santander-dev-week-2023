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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.marcus.crudspring.model.Conta;
import com.marcus.crudspring.repository.ContasRepository;

import lombok.AllArgsConstructor;
/* 
* 
*
*
*/
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/contas")
@AllArgsConstructor
public class ContaController {
   
    //Anotacao de Injecao de dependecia marca um construtor campo 
    //Utilização dos metodos diposniveis da JPARepository
    @Autowired
    private ContasRepository contaRepository;

    // @RequestMapping(method=RequestMethod.GET)
    // Metodo de busca de todas as contas do repository 
    //Utilização dos metodos diposniveis da JPARepository
    @GetMapping
    public List<Conta> list() {
        return contaRepository.findAll();
    }

    /**
     * @apiNote Metodo de busca conta por ID vindo da URI 
     * @param id Parametro vindo da URI do TYPE Long de acordo com a class Conta 
     * @param @PathVariable anotação que indica que um parâmetro de método deve ser 
     * vinculado a uma variável de modelo URI. Com suporte para métodos manipuladores anotados 
     * RequestMapping.
     * 
     * @return É optional do Java o valor pode ou nao exitir entao devemos 
     * controlar adicionando a class ResponseEntity que permite 
     * a funcao map temos que saber de que tipo que api espera tipo Conta
     * @contaRepository metodo da interface que extends JpaRepository que aplica   
     * na Resposta da requiscao Response agora da pra mapear e tratar o recordFound 
     * o registro encontrado recordFound na lambda de status code e corpo de resposta 
     * e caso  nao encontre a conta buscada orElse entra em execucao dando o erro do notFound e a build de retorno
     * @see https://trello.com/c/20I3zYor/121-26-buscar-por-id-no-back-end
     *
     */ 
    @GetMapping("/{id}")
    public ResponseEntity<Conta> findById(@PathVariable("id") Long id) {

        return contaRepository.findById(id)

                .map(recordFound -> ResponseEntity.ok().body(recordFound))

                .orElse(ResponseEntity.notFound().build());
    }

    // @RequestMapping(method=RequestMethod.POST)
    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Conta create(@RequestBody Conta account) {
        return contaRepository.save(account);
        // return ResponseEntity.status()
        // .body(contaRepository.save(account
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
