/**
 * Created by chi on 2/8/16.
 */


(function() {
   "use strict";

    // revealing module pattern
    function droidFactory() {

        function speakPrivately(){
            return "Hi, I am " + this.name;
        }

        return {
            name: '',
            speak: speakPrivately
        }
    }


    // Controller
    function DroidController(droid) {
       var droidCtrl = this;
        droid.name = "robot-221";
        droidCtrl.message = droid.speak();

    }


    angular.module('app', [])
        .factory('droid', droidFactory)
        .controller('DroidController', DroidController);

})();