System.register(["foo", "bar"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var foo_1, bar_1;
    return {
        setters:[
            function (foo_1_1) {
                foo_1 = foo_1_1;
            },
            function (bar_1_1) {
                bar_1 = bar_1_1;
            }],
        execute: function() {
            console.log(bar_1.default("hello"));
            foo_1.default();
        }
    }
});
