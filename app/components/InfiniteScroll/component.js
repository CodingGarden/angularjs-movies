angular.
  module('moviesApp')
  .component('infiniteScroll', {
    bindings: {
      onVisible: '&'
    },
    templateUrl: '/app/components/InfiniteScroll/template.html',
    controller: function InfiniteScrollController($element) {
      var elementRef = $element[0];
      var self = this;
      function listener() {
        if (elementRef.getBoundingClientRect().y <= window.innerHeight) {
          self.onVisible();
        }
      }
      document.addEventListener('scrollend', listener);
      this.$onDestroy = function () {
        document.removeEventListener('scrollend', listener);
      };
    }
  });