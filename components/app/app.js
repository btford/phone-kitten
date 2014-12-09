'use strict';

angular.module('phoneKitten', [
  'ngFuturisticRouter',
  'ngAnimate',

  'phoneKitten.phoneDetail',
  'phoneKitten.phoneList',

  'phoneKitten.filters',
  'phoneKitten.services'
]).
controller('AppController', ['router', AppController]).
config(['componentLoaderProvider', function (componentLoaderProvider) {
  componentLoaderProvider.setTemplateMapping(function (name) {
    var dashName = dashCase(name);
    return '/components/' + dashName + '/' + dashName + '.html';
  });
}]);


function AppController(router) {
  router.config([
    { path: 'phones'          , component: 'phoneList'   },
    { path: 'phones/:phoneId' , component: 'phoneDetail' }
  ]);
}

function dashCase(str) {
  return str.replace(/([A-Z])/g, function ($1) {
    return '-' + $1.toLowerCase();
  });
}
