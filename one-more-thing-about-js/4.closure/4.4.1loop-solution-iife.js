
for (var i = 0; i < 5; ++i) {
    (function () {
        setTimeout(function timer() {
            console.log(i);
        }, i * 1000);
    })();
}

//Every time the loop was continued, there will be a variable to capture the value, and be used in the closure.

for (var i = 0; i < 5; ++i) {
    (function () {
        var j = i;
        setTimeout(function timer() {
            console.log(j);
        }, j * 1000);
    })();
}

for (var i = 0; i < 5; ++i) {
    (function (j) {
        setTimeout(function timer() {
            console.log(j);
        }, j * 1000);
    })(i);
}



//展开
(function IIFE() {
    var i = 0;

    setTimeout(function timer() {
        console.log(i);
    }, i * 1000);

    ++i;

    setTimeout(function timer() {
        console.log(i);
    }, i * 1000);

    ++i;
    setTimeout(function timer() {
        console.log(i);
    }, i * 1000);

})();

(function IIFE() {
    var i = 0;
    (function (j) {
        setTimeout(function timer() {
            console.log(j);
        }, j * 1000);
    })(i);

    ++i;

    (function (j) {
        setTimeout(function timer() {
            console.log(j);
        }, j * 1000);
    })(i);

    ++i;
    (function (j) {
        setTimeout(function timer() {
            console.log(j);
        }, j * 1000);
    })(i);

})();
