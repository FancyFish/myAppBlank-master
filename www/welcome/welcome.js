angular.module('starter').controller('welcomeCtrl',['$scope','miConfiguracion','pelicula','miServicio', function($scope,miConfiguracion,pelicula, miServicio){
	$scope.welcome="Bienvenida al Sena";
	console.log(miConfiguracion);
	console.log(pelicula);
	console.log(miServicio.obtenerDatos());
	
}]);
	