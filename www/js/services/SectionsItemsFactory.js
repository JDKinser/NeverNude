neverNude.factory('sectionsitems', ['$resource', function($resource) {
  return $resource(rootUrl + "/sections/:id/items");
}]);
