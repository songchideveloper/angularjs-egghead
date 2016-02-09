/**
 * Created by chi on 2/9/16.
 */


(function(){

    function droidProvider() {
        var greeting = '';
        return {
            configure: function(setting){
                greeting = setting.greeting;
            },
            $get: function(){
                return {
                    name: '',
                    speak: function(){
                        return greeting + this.name;
                    }
                }
            }
        }
    }


    angular.module('app', [])
        .config(['droidProvider', function (droidProvider) {
            droidProvider.configure({greeting: 'Hi, I am '});
        }])
        .provider('droidProvider', droidProvider)
        .controller('DroidController', DroidController);



    // Controller
    function DroidController(droidProvider) {
        var ctrl = this;
        droidProvider.name = 'Robot-2341';
        ctrl.message = droidProvider.speak();
    }

})();