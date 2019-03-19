package com.stefanini.projeto.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import com.stefanini.projeto.model.Biblioteca;
@Transactional
public interface BibliotecaRepository extends CrudRepository<Biblioteca, Long>{
	Biblioteca findByNome(String nome);
}
