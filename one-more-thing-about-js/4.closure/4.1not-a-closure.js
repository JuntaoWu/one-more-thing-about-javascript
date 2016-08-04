
function foo() {
    "use strict";
    var a = 0;

    function bar() {
        console.log(a);
    }

    bar();
}

foo();  //0