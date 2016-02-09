/**
 * Created by chi on 2/8/16.
 */


(function(){
    'use strict';

    // constructor function
    function DroidService() {
        this.name = '';
    }

    DroidService.prototype.speak = function() {
        return "Hi, I am " + this.name;
    }

    var d1 = new DroidService();
    d1.name = "Robot-223";
    console.log(d1.speak());


})();