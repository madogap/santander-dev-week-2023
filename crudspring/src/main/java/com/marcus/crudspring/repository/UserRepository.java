package com.marcus.crudspring.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.marcus.crudspring.model.User;

import lombok.extern.java.Log;

public interface UserRepository extends JpaRepository<User, Log> {
  Optional<User> findByUsername(String username);

  Boolean existsByUsername(String username);

  Boolean existsByEmail(String email);
}
