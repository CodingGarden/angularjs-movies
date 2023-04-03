angular
  .module('moviesApp')
  .service('MoviesService', function MoviesService($http){
    function getPopularMovies(page) {
      return $http.get('https://api.themoviedb.org/3/movie/popular?api_key=' + config.apiKey + '&page=' + page)
        .then(function (result) {
          return result.data.results;
        });
    }

    function getMovie(id) {
      return $http.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + config.apiKey)
        .then(function (result) {
          return result.data;
        });
    }

    this.getPopularMovies = getPopularMovies;
    this.getMovie = getMovie;
  });