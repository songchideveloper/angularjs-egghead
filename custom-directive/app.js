/**
 * Created by chi on 2/9/16.
 */


(function(){

    var app = angular.module('MainApp', [])
        .directive('superman', function($scope){
            return {
                restrict: 'E',
                link: function(){
                    alert('Hello superman!');
                }
            }
        })
        .directive('batman', function(){
            return {
                restrict: 'A',
                link: function(){
                    alert('Batman comes!');
                }
            }
        })





})();