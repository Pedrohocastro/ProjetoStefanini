import angular from 'angular';
import uirouter from 'angular-ui-router';


import BibliotecaController from './biblioteca.controller';

import bibliotecaService from '../../servicos/biblioteca.service';

export default angular.module('myApp.biblioteca', [uirouter, bibliotecaService])
  .controller('BibliotecaController', BibliotecaController)
  .name;

  