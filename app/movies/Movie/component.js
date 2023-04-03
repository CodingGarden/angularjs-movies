angular.
  module('moviesApp')
  .component('appMovie', {
    templateUrl: '/app/movies/Movie/template.html',
    bindings: {
      movie: '<',
    },
    controller: function MovieController() {}
  });