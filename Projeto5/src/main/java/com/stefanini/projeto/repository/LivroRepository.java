package com.stefanini.projeto.repository;

import org.springframework.data.repository.CrudRepository;

import com.stefanini.projeto.model.Livro;

public interface LivroRepository extends CrudRepository<Livro, Long>{

}
