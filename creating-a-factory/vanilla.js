/**
 * Created by chi on 2/8/16.
 */


(function() {
    "user strict";

    // module pattern
    function droidFactory() {
        return {
            name: '',
            speak: function() {
                return "Hi I am " + this.name;
            }
        }
    }

    var d1 = droidFactory();
    d1.name = 'robot378';
    console.log(d1.speak());


})();


(function() {
    "user strict";

    function speakingPrivately() {
        return "Hi I am " + this.name;
    }


    // revealing module pattern
    function droidFactory() {
        return {
            name: '',
            speak: speakingPrivately
        }
    }

    var d1 = droidFactory();
    d1.name = 'robot378';
    console.log(d1.speak());


})();