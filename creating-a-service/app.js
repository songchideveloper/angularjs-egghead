/**
 * Created by chi on 2/8/16.
 */


(function(){

    function DroidService() {
        this.name = '';
    }

    DroidService.prototype.speak = function() {
        return "Hi, I am " + this.name;
    };

    angular.module('app', [])
        .service('droid', DroidService)
        .controller('DroidController', DroidController);


    // Controller
    function DroidController(droid) {

        var DroidCtrl = this;
        droid.name = "Robot-022";
        DroidCtrl.message = droid.speak();

    }


})();