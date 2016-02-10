/**
 * Created by chi on 2/9/16.
 */


(function(){

    var app = angular.module('MainApp', []);

    app.controller('MainController', function(){
        var mainCtrl = this;
        mainCtrl.message = 'hello'
    });

    app.directive('helloDirective', function(){
       return function(scope, element, attrs) {
           element.text('Hello ' + " " + attrs.message)
       }
    });

})();