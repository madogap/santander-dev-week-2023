package com.marcus.crudspring.model;


import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name="tb_contas")
public class Conta {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty("_id")

    private Long id;

    @Column(length = 40, nullable = false)
    private String name;
        
    @Column(length = 20, nullable = false)
    private String category;

    @Column(length = 999999, nullable = false)
    private Integer dinheiroTotal; 

}
