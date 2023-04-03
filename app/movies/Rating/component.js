angular.
  module('moviesApp')
  .component('appRating', {
    templateUrl: '/app/movies/Rating/template.html',
    bindings: {
      rating: '<',
    },
    controller: function RatingController() {
      this.$onInit = function () {
        var value = Math.floor(this.rating / 2);
        var stars = [];
        for (var i = 0; i < 5; i++) {
          if (i <= value) {
            stars.push('✭');
          } else {
            stars.push('☆');
          }
        }
        this.starRating = stars.join('');
      };
    }
  });