package com.stefanini.projeto.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.stefanini.projeto.model.Biblioteca;
import com.stefanini.projeto.repository.BibliotecaRepository;

@Service
public class BibliotecaService {

	@Autowired
	private BibliotecaRepository repository;
	
	public List<Biblioteca> findAll(){
		return (List<Biblioteca>) repository.findAll();
	}
	
	public void create(Biblioteca biblioteca) {
		repository.save(biblioteca);
	}
	
	public void delete(Biblioteca biblioteca) {
		repository.delete(biblioteca);
	}
	
	public void update(Biblioteca bibloteca) {
		this.create(bibloteca);
	}
	
	

}