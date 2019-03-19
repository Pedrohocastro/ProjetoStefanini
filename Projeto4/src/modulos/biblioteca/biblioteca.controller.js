import { inherit } from "@uirouter/core";

export default class BibliotecaController {

  constructor(bibliotecaService) {
    var vm = this;
    this.name = 'Biblioteca';
    vm.novaBiblioteca = {"id" : null, "nome": vm.nome, "livros": []};

    init();

    function init(){
      bibliotecaService.getBibliotecas().then(function abc(resp) {
        vm.bibliotecas = resp.data;
      });
    }

    vm.delete = function(biblioteca) {
      bibliotecaService.delete(biblioteca).then(function (resp) {
        // resp.data
      });
    }
  }

}


BibliotecaController.$inject = ['bibliotecaService'];
