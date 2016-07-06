neverNude.factory('tags', ['$http', function($http) {
  return $http.get(rootUrl + "/tags")
      .success(function(data) {
        return data;
      })
      .error(function(err) {
        return err;
      });
}]);
