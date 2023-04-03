angular
  .module('moviesApp', ['ngRoute'])
  .config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<movie-list></movie-list>'
        }).
        when('/movie/:id', {
          template: '<movie-view></movie-view>'
        }).
        when('/not-found', {
          template: '<h1>Not Found</h1>'
        }).
        otherwise('/not-found');
    }
  ]);
