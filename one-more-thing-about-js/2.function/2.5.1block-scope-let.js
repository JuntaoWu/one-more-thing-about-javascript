
//隐式创建块作用域
(function IIFE() {
	"use strict";

	var foo = true;
	if (foo) {
		let bar = foo * 2;
		console.log("inside if: " + bar);
	}

	console.log(bar);
})();

//显式创建块作用域
(function IIFE() {
	"use strict";

	var foo = true;
	if (foo) {
		{
			let bar = foo * 2;
			console.log("inside block: " + bar);
		}
		console.log("inside if: " + bar);
	}

	console.log(bar);
})();

//不提升
(function IIFE() {
	"use strict";

	var foo = true;
	if (foo) {
		{
			console.log("inside block: " + bar);
			let bar = foo * 2;
		}
	}

})();

//GC
(function IIFE() {
	function process(data) {
		console.log(data.a);
	}

	var someBigData = {};

	process(someBigData);

	var btn = document.getElementById("btnTest");

	btn.addEventListener("click", function click(ev) {
		console.log("button click");
	});
})();

(function IIFE() {
	function process(data) {
		console.log(data.a);
	}

	{
		let someBigData = {};
		process(someBigData);
	}

	var btn = document.getElementById("btnTest");

	btn.addEventListener("click", function click(ev) {
		console.log("button click");
	});
})();

//let循环
(function IIFE() {
	for (let i = 0; i < 2; ++i) {
		console.log(i);
	}
	console.log(i);
})();