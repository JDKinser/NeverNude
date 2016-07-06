neverNude.controller('OutfitsController', ['$scope', 'outfits', function($scope, outfits) {
  outfits.get({ id: 1 }, function(data) {
    $scope.outfits_items = data.outfits_items;
    $scope.pictures = data.image_urls;
  });
}]);
