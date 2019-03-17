package com.stefanini.projeto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.stefanini.projeto.model.Livro;
import com.stefanini.projeto.repository.LivroRepository;

@Service
public class LivroService {
 
	@Autowired
	LivroRepository repository;
	
	public List<Livro> findAll(){
		return (List<Livro>) repository.findAll();
	}
	
	public void create(Livro livro) {
		repository.save(livro);
	}
	
	public void delete(Livro livro) {
		repository.delete(livro);
	}
	
	public void update(Livro livro) {
		this.create(livro);
	}
}
