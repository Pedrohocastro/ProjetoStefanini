import { inherit } from "@uirouter/core";

export default class BibliotecaController {

  constructor(bibliotecaService) {
    var vm = this;
    this.name = 'Biblioteca';
   
    init();

    function init(){
      bibliotecaService.getBibliotecas().then(function abc(resp) {
        vm.bibliotecas = resp.data;
      });
    }
    vm.salvar= function(biblioteca){
      bibliotecaService.salvar(biblioteca).then(function abc(resp) {
        vm.resposta = resp.data;
        init();
      });
    }
    vm.excluir = function(id){
      bibliotecaService.deletar(id).then(function abc(resp) {
        vm.resposta = resp.data;
        init()
      });
    }
    vm.editarModal = function(biblioteca){
      vm.acao = "editar"
      vm.biblioteca = biblioteca
    }
    vm.editar = function(biblioteca){
      bibliotecaService.editar(biblioteca).then(function abc(resp) {
        vm.resposta = resp.data;
        init()
      });
      
    }
    vm.adcionarLivro= function(){
      vm.livro = {"id":null, "nome":vm.nomeLivro, "biblioteca":vm.biblioteca}
      bibliotecaService.adcionarLivro(vm.livro).then(function abc(resp) {
        vm.resposta = resp.data;
        init()
      });
    }
    vm.novaBiblioteca= function(){
      vm.acao = "cadastrar"
      vm.biblioteca = {"id":null, "nome":vm.nome, "livros":[]}
    }
    vm.removerLivro = function(id){
      bibliotecaService.deletarFilho(id).then(function abc(resp) {
        vm.resposta = resp.data;
        init()
      });
      
    }

  }
  
}
BibliotecaController.$inject = ['bibliotecaService'];
