angular.module('pokeFinder').controller('startersCtrl', function($scope, mainSrv) {
var vm = this;

vm.starters = mainSrv.pokeInfo;

});
