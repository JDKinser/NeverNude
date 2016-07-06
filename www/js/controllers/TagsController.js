neverNude.controller('TagsController', ['$scope', 'tags', function($scope, tags) {
  tags.success(function(data) {
    $scope.tags = data;
  });
}]);
