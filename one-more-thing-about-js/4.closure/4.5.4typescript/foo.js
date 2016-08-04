System.register(["bar"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var bar_1;
    var hungry;
    function awesome() {
        console.log(bar_1.default(hungry).toUpperCase());
    }
    exports_1("default", awesome);
    return {
        setters:[
            function (bar_1_1) {
                bar_1 = bar_1_1;
            }],
        execute: function() {
            hungry = "hippo";
        }
    }
});
