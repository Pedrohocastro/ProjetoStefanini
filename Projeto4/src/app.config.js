routing.$inject = ['$stateProvider', '$urlRouterProvider'];

export default function routing($stateProvider, $urlRouterProvider) {
    let homeState = {
        name: 'home',
        url: '/home',
        templateUrl: './modulos/home/home.view.html',
        controller: 'HomeController',
        controllerAs: 'vm'
      }
      $stateProvider.state(homeState);
      
      let bibliotecaState = {
        name: 'biblioteca',
        url: '/biblioteca',
        templateUrl: './modulos/biblioteca/biblioteca.view.html',
        controller: 'BibliotecaController',
        controllerAs: 'vm'
      }
      $stateProvider.state(bibliotecaState);

      
      $urlRouterProvider.otherwise('/home')  
}