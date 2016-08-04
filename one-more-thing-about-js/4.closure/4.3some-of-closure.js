
//Call functions inside, but the bar function was invoked outside eventually.
function foo() {
    "use strict";
    var a = 0;

    function bar() {
        console.log(a);
    }

    baz(bar);
}

function baz(func) {
    func();
}


//间接传递函数
var func;
function foo() {
    "use strict";
    var a = 0;

    function bar() {
        console.log(a);
    }

    func = bar;
}

foo();
baz();

function baz(func) {
    func();
}

