package com.stefanini.projeto.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.stefanini.projeto.model.Biblioteca;
import com.stefanini.projeto.service.BibliotecaService;

@CrossOrigin
@Controller
@RequestMapping(value = "/biblioteca", produces = MediaType.APPLICATION_JSON_VALUE)
public class BibliotecaController {

	@Autowired
	private BibliotecaService service;
	@GetMapping
	public @ResponseBody List<Biblioteca> findAll() {
		return service.findAll();
	}	
	
	@RequestMapping(method= RequestMethod.POST, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> create(@RequestBody Biblioteca biblioteca) {
		service.create(biblioteca);
		return new ResponseEntity<>("Sucesso- 1 coca", HttpStatus.CREATED);
	}

}