
var coolModule = (function CoolModule() {
    var something = "cool";
    var otherthings = [1, 2, 3];

    function doSomething() {
        console.log(something);
    }

    function doOtherThing() {
        console.log(otherthings);
    }

    return {
        doSomething: doSomething,
        doOtherThing: doOtherThing
    };
})();

coolModule.doSomething();
