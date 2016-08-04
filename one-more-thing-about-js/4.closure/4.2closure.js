
function foo() {
    "use strict";
    var a = 0;

    function bar() {
        console.log(a);
    }

    return bar;
}

var bar = foo();

bar();  //0