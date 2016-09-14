angular.module('pokeFinder').controller('routesCtrl', function($scope, mainSrv) {
var vm = this;

vm.routes = mainSrv.pokeInfo;


});
