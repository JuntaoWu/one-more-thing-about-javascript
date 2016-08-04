
//Not a block scope
(function IIFE() {
    "use strict";

    function print() {
        console.log(i);
    }

    for (var i = 0; i < 2; ++i) {
        print();
    }
})();

//Not a block scope
(function IIFE() {
    "use strict";

    var foo = true;
    if (foo) {
        var bar = foo * 2;
        console.log("inside if: " + bar);
    }

    console.log(bar);
})();


(function IIFE() {
    try {
        undefined();
    }
    catch (err) {
        console.log(err);
    }

    console.log(err);
})();


