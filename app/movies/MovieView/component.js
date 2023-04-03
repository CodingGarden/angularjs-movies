angular.
  module('moviesApp')
  .component('movieView', {
    templateUrl: '/app/movies/MovieView/template.html',
    controller: function MovieViewController($routeParams, MoviesService) {
      this.loading = false;
      this.movie = null;
      var self = this;
      this.$onInit = function() {
        this.loading = true;
        MoviesService
          .getMovie($routeParams.id)
          .then(function (movie) {
            console.log(movie);
            self.movie = movie;
            self.loading = false;
          });
      };
    }
  });