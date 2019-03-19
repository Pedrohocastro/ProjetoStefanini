import angular from 'angular';

class BibliotecaService {

    constructor($http) {
        this.$http = $http;
        //const apiBase = "http://localhost:9090/projeto/api";
        const apiBase = "http://localhost:8080";
        this.path =  apiBase + "/biblioteca";
    }
    
    getBibliotecas() {
        return this.$http.get(this.path);
    }
    createBiblioteca(biblioteca) {
        return this.$http.post(this.path,biblioteca)
    }
    updateBiblioteca(biblioteca) {
        return this.$http.put(this.path,biblioteca)
    }
    deleteBiblioteca(biblioteca) {
        return this.$http.delete(this.path,biblioteca)

    }

}

export default angular.module('services.biblioteca-service', [])
.service('bibliotecaService', BibliotecaService)
.name;

