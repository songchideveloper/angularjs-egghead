/**
 * Created by chi on 2/9/16.
 */


(function(){

    'use strict';

    // module pattern (configurable per app)
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


    var provider = droidProvider();
    provider.configure({greeting: "Hi, this is "});
    var droid = provider.$get();
    droid.name = 'Robot-2342';
    console.log(droid.speak());

})();