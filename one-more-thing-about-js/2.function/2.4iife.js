
function foo() {
	var a = 2;
	console.log(a);
}

foo();


//立即执行函数
(function foo() {
	var a = 2;
	console.log(a);
})();


(function IIFE() {
	var a = 2;
	console.log(a);
})();

(function IIFE() {
	var a = 2;
	console.log(a);
}());


/*进阶用法*/
var a = 2;

(function IIFE(global) {
	var a = 3;
	console.log(a);
	console.log(global.a);
})(window);


/*UMD reverse invoke order*/
var a = 2;

(function IIFE(def) {
	def(window);
})(function def(global) {
	var a = 3;
	console.log(a);
	console.log(global.a);
})