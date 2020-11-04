// var value = 1;
// function foo() {
//     console.log(value);
// }
// function bar() {
//     let value = 2;
//     foo();
// }
// bar();

// 作用域是指代码中定义变量的区域
// js采用的是静态作用域, 也就是函数定义时决定的


// var scope = "global scope";
// function checkscope(){
//     var scope = "local scope";
//     function f(){
//         return scope;
//     }
//     return f();
// }
// checkscope();
// var scope = "global scope";
// function checkscope(){
//     var scope = "local scope";
//     function f(){
//         return scope;
//     }
//     return f;
// }
// checkscope()(); 
// 打印是相同的, 但是又有些不同

// 第一个
// ECStack.push(checkscope);
// ECStack.push(f);
// ECStack.pop();
// ECStack.pop();


// ======================================================
// var foo = function () {
//     console.log('foo1');
// }
// foo();  // foo1
// var foo = function () {
//     console.log('foo2');
// }
// foo(); // foo2

// function foo() {
//     console.log('foo1');
// }
// foo();  // foo2
// function foo() {
//     console.log('foo2');
// }
// foo(); // foo2


// 函数调用的时候js引擎创建执行上下文栈来管理执行上下文

//定义一个执行上下文栈
// var ECStack = []
// ECStack = [
//     globalContext
// ];
// //执行下面代码
// function fun3() {
//     console.log('fun3')
// }
// function fun2() {
//     fun3();
// }
// function fun1() {
//     fun2();
// }
// fun1();

// ECStack.push(func1)
// ECStack.push(func2)
// ECStack.push(func3)
// ECStack.pop()
// ECStack.pop()
// ECStack.pop()

// 每一个执行上下文有三个重要属性 
// 1.变量对象(variable object VO)
// ①全局上下文中的变量对象就是全局对象 window
// var a = 2
// console.log(window.a)

// ②函数上下文中用 活动对象(activation object AO)来表示变量对象
// Ⅰ: 函数的所有形参 (如果是函数上下文)
// Ⅱ: 函数声明
// Ⅲ: 变量声明

// function foo(a) {
//     var b = 2;
//     function c() { }
//     var d = function () { };
//     b = 3;
// }
// foo(1);

// 创建阶段
// AO = {
//     a: 1,
//     b: undefined,
//     c: reference to function c(){},
//     d: undefined,
//     arguments: {
//         0: 1,
//         length: 1
//     }
// }

//执行阶段
// AO = {
//     a: 1,
//     b: 3,
//     c: reference to function c(){},
//     d: reference to FunctionExpression "d",
//     arguments: {
//         0: 1,
//         length: 1
//     }
// }

// 思考题
// function foo() {
//     console.log(a);
//     a = 1;
// }

// foo(); // ??? 

// function bar() {
//     a = 1;
//     console.log(a); 
// }
// bar(); // ??? 

// var foo = 1;
// console.log(foo);
// function foo(){
//     console.log("foo");
// }

// console.log(foo);
// var foo = 1;
// function foo(){
//     console.log("foo");
// }

// 2.作用域链


// 3.this