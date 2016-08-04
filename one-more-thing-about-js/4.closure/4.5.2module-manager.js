var ModuleManager = (function Manager() {
    var modules = [];

    function define(name, deps, impl) {
        for (var i = 0; i < deps.length; ++i) {
            deps[i] = modules[deps[i]];
        }
        modules[name] = impl.apply(impl, deps);
    }

    function require(name) {
        return modules[name];
    }

    return {
        define: define,
        require: require
    };
})();

ModuleManager.define("bar", [], function () {
    function sayHello(who) {
        return "Let me introduce " + who;
    }

    return {
        sayHello: sayHello
    };
});

ModuleManager.define("foo", ["bar"], function (bar) {
    var hungry = "hippo";
    function awesome() {
        console.log(bar.sayHello(hungry).toUpperCase());
    }

    return {
        awesome: awesome
    };
});

ModuleManager.require("foo").awesome();
var message = ModuleManager.require("bar").sayHello("Haha");
console.log(message);