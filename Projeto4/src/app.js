'use strict';

import angular from 'angular'
import uirouter from 'angular-ui-router';
var blockUI = require('angular-block-ui');

import 'bootstrap';
import './scss/app.scss';

import routing from './app.config';

import biblioteca from './modulos/biblioteca/biblioteca.js';
import home from './modulos/home/home.js';
// import livro from './modulos/livro/livro';

angular
.module('myApp', [
  uirouter,
  blockUI,
  biblioteca, 
  home
])
.config(routing);