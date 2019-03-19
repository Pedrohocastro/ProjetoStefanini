import angular from 'angular';

class BibliotecaService {

    constructor($http) {
        this.$http = $http;
        //const apiBase = "http://localhost:9090/projeto/api";
        const apiBase = "http://localhost:8080";
        this.path =  apiBase + "/biblioteca";
        this.pathLivro =  apiBase + "/livro";
    }
    
    getBibliotecas() {
        return this.$http.get(this.path);
    }
    salvar(biblioteca){
        return this.$http.post(this.path,biblioteca);
    }
    deletar(id){
        return this.$http.delete(this.path + "/"+id,{'Content-Type': 'application/json'});
    }
    editar(biblioteca){
        return this.$http.put(this.path,biblioteca);
    }
    adcionarLivro(livro){
        return this.$http.post(this.pathLivro,livro);
    }
    deletarFilho(id){
        return this.$http.delete(this.pathLivro + "/"+id,{'Content-Type': 'application/json'});
    }
}

export default angular.module('services.biblioteca-service', [])
.service('bibliotecaService', BibliotecaService)
.name;