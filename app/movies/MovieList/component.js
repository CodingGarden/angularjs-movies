angular.
  module('moviesApp')
  .component('movieList', {
    templateUrl: '/app/movies/MovieList/template.html',
    controller: function MovieListController(MoviesService) {
      this.currentPage = 0;
      this.pages = [];
      this.loading = false;
      var self = this;
      function getNextPage() {
        if (self.loading) return;
        self.loading = true;
        self.currentPage += 1;
        MoviesService
          .getPopularMovies(self.currentPage)
          .then(function (movies) {
            console.log('Got movies!', movies);
            self.pages.push(movies);
            self.loading = false;
          });
      }
      getNextPage();
      this.endOfPage = function () {
        getNextPage();
      };
    }
  });