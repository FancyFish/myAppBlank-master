var app=angular.module('starter');
app.directive('cliente', function(){
    // cliente es como se va a ainstanciar la etiqueta o directiva
    return {
        templateUrl: '/cliente/cliente.html',
        restict: 'AE',
        scope: {
            nombre: '='
        }
    }
});