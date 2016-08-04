System.register(["foo.js", "bar.js"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var foo_js_1, bar_js_1;
    return {
        setters:[
            function (foo_js_1_1) {
                foo_js_1 = foo_js_1_1;
            },
            function (bar_js_1_1) {
                bar_js_1 = bar_js_1_1;
            }],
        execute: function() {
            console.log(bar_js_1.bar.sayHello("hello"));
            foo_js_1.foo.awesome();
        }
    }
});
