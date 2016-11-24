neverNude.controller('SectionsItemsController', ['$scope', '$ionicSlideBoxDelegate', 'sectionsitems', '$http', '$state', '$ionicPopup', 'outfits', function($scope, $ionicSlideBoxDelegate, sectionsitems, $http, $state, $ionicPopup, outfits) {

  showAlert = function(alert) {
    var alertPopup = $ionicPopup.alert({
      title: alert,
      cssClass: 'popupstyle'
    });
  };

  getOutfits = function() {
    outfits.get({ id: 2 }, function(data) {
      $scope.outfits_items = data.outfits_items;
      $scope.pictures = data.image_urls;
    });
  };

  getOutfits();

  $scope.updateSlider = function () {
    $ionicSlideBoxDelegate.update();
    $ionicSlideBoxDelegate.loop(true);
  };

  sectionsitems.get({ id: 1 }, function(data) {
    $scope.onHoldAccer = function() {
      $state.go('accessories');
    }
    $scope.items = data.items;
    $scope.accerPictures = data.med_image_urls;
    $scope.accerLrgPictures = data.lrg_image_urls;
    accessories = data.items;
    $scope.accerTags = data.tags;
  });

  sectionsitems.get({ id: 2 }, function(data) {
    $scope.onHoldTops = function() {
      $state.go('tops');
    }
    $scope.items = data.items;
    $scope.topsPictures = data.med_image_urls;
    $scope.topsLrgPictures = data.lrg_image_urls;
    tops = data.items;
    $scope.topsTags = data.tags;
  });

  sectionsitems.get({ id: 3 }, function(data) {
    $scope.onHoldBottoms = function() {
      $state.go('bottoms');
    }
    $scope.items = data.items;
    $scope.bottomsPictures = data.med_image_urls;
    $scope.bottomsLrgPictures = data.lrg_image_urls;
    bottoms = data.items;
    $scope.bottomsTags = data.tags;
  });

  sectionsitems.get({ id: 4 }, function(data) {
    $scope.onHoldFoot = function() {
      $state.go('footwear');
    }
    $scope.items = data.items;
    $scope.footPictures = data.med_image_urls;
    $scope.footLrgPictures = data.lrg_image_urls;
    foot = data.items;
    $scope.footTags = data.tags;
  });

  $scope.randomizer = function() {
    // alert(accessories.length);
    $ionicSlideBoxDelegate.$getByHandle('accer').slide(Math.floor(Math.random() * accessories.length));
    $ionicSlideBoxDelegate.$getByHandle('tops').slide(Math.floor(Math.random() * tops.length));
    $ionicSlideBoxDelegate.$getByHandle('bottoms').slide(Math.floor(Math.random() * bottoms.length));
    $ionicSlideBoxDelegate.$getByHandle('footwear').slide(Math.floor(Math.random() * foot.length));
  };

  $scope.saveOutfit = function() {
    var accerId = accessories[$ionicSlideBoxDelegate.$getByHandle('accer').currentIndex()].id;
    var topsId = tops[$ionicSlideBoxDelegate.$getByHandle('tops').currentIndex()].id;
    var bottomsId = bottoms[$ionicSlideBoxDelegate.$getByHandle('bottoms').currentIndex()].id;
    var footId = foot[$ionicSlideBoxDelegate.$getByHandle('footwear').currentIndex()].id;

    outfit = JSON.stringify({outfit: {user_id: 1, accer_id: accerId, tops_id: topsId, bottoms_id: bottomsId, foot_id: footId}})

    $http.post(rootUrl + '/outfits', outfit, {
      headers: {'Content-Type': 'application/json'}
    })
    .success(function(data) {
      $state.go('outfits');
      showAlert('Outfit saved.');
      getOutfits();
    })
    .error(function() {
      showAlert('There was an error. Please try again.')
    })
  };
}]);
