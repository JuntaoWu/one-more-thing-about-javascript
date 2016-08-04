
(function IIFE() {
    "use strict";
    a = 2;
    var a;
    console.log(a);  //Will it be undefined or ReferenceError?
})();

(function IIFE() {
    "use strict";
    console.log(a);  //Will it be 2 or undefined?
    var a = 2;
})();


(function IIFE() {
    "use strict";
    hello();

    function hello() {
        console.log("Hello");
    }
})();

(function IIFE() {
    "use strict";
    hello();  //Which Error? Reference or Type?

    var hello = function () {
        console.log("Hello");
    };
})();

(function IIFE() {
    "use strict";
    hello();  //Which Error? Reference or Type?
    funcName();  //Which Error? Reference or Type?

    var hello = function funcName() {
        console.log("Hello");
    };
})();

