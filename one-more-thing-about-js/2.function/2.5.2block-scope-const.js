(function IIFE() {
    if (true) {
        var a = 2;
        const HAHA = 1;
        a = 3;
        HAHA = 4; //const error.
    }
    console.log(a);
    console.log(HAHA); //Reference Error.
})();
