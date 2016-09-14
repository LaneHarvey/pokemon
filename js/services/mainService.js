angular.module('pokeFinder').service('mainSrv', function(){

    this.pokeInfo = [{
        name: 'Bulbasaur',
        type: 'Grass/Poison',
        image: "../img/bulbasaur.svg",
        id: 'Route 2',
    }, {
        name: 'Charmander',
        type: 'Fire',
        image: "../img/charmander.png",
        id: 'Route 3',
    },{
        name: 'Squirtle',
        type: 'Water',
        image: "../img/squirtle.png",
        id: 'Route 4',
    }];
});
