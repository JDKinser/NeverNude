// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

var rootUrl = 'https://nevernude.herokuapp.com'
var neverNude = angular.module('neverNude', ['ionic', 'ngResource', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {url: '/home', templateUrl: 'templates/home.html', controller: 'MenuController'})
    .state('login', {url: '/login', templateUrl: 'templates/login.html'})
    .state('registration', {url: '/registration', templateUrl: 'templates/registration.html'})
    .state('accessories', {url: '/accessories', templateUrl: 'templates/accessories.html'})
    .state('tops', {url: '/tops', templateUrl: 'templates/tops.html'})
    .state('bottoms', {url: '/bottoms', templateUrl: 'templates/bottoms.html'})
    .state('outfits', {url: '/outfits', templateUrl: 'templates/outfits.html'})
    .state('footwear', {url: '/footwear', templateUrl: 'templates/footwear.html'})
    .state('devs', {url: '/devs', templateUrl: 'templates/devs.html'})
    .state('photoedit', {url: '/photoedit', templateUrl: 'templates/photoedit.html'})
    .state('profile', {url: '/profile', templateUrl: 'templates/profile.html'});
  $urlRouterProvider.otherwise('/login');
});
