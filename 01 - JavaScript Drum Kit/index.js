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
// var test = "test";
// function checkscope() {
//     // var scope = "local scope";
//     function f() {
//         console.log(scope, test)
//     }
//     // var scope = "local scope";
//     f();
//     // function scope () { }
//     // var scope = "local scope";
// }
// checkscope();

// var scope = "global scope";
// var test = "test";
// function checkscope() {
//     var scope = "local scope";
//     function f() {
//         console.log(scope, test)
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


// 函数调用的时候js引擎创建执行上下文栈来管理执行上下文 (Execution context stack，ECS)

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
// 一.变量对象(variable object VO)
// ①全局上下文中的变量对象就是全局对象 window
// var a = 2
// console.log(window.a)

// ②函数上下文中用 活动对象(activation object AO)来表示变量对象 AO = VO + function parameters + arguments
// 变量对象包括
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

// 进入执行上下文
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
// function foo() {
//     console.log("foo");
// }

// console.log(foo);
// function foo() {
//     console.log("foo");
// }
// var foo = 1;

// var x = 1;
// if(function f(){}){
//     x += typeof f;
// }
// console.log(x); // 1undeifned

// 二.作用域链 (Scope)
// 函数的作用域在函数定义的时候就决定了 ! 
// 这是因为函数有一个内部属性 [[scope]]，当函数创建的时候，就会保存所有父变量对象到其中
// function foo() {
//     var a = 1
//     function bar() {
//         console.log(a)
//     }
// }
// 函数创建
// foo[scope] = [
//     globalContext.AO
// ]
// bar[scope] = [
//     fooContext.AO,
//     globalContext.AO
// ]

//函数激活时, 进入执行上下文，创建 VO/AO 后，就会将活动对象添加到作用链的前端。
// Scope = [AO].concat([Scope])

// 例子
// var scope = "global scope";
// function checkscope() {
//     var scope2 = 'local scope';
//     return scope2;
// }
// checkscope();

// // 1.checkscope 函数被创建,保存作用域链到内部属性 scope
// checkscope[scope] = [
//     globalContext.VO
// ]
// // 2.执行函数, 创建checkscope函数执行上下文
// EStack = [
//     checkscopeContext,
//     globalContext,
// ]
// // 3.函数并不立刻执行，开始做准备工作，第一步：复制函数[[scope]]属性创建作用域链
// checkscopeContext = {
//     Scope: checkscope[scope]
// }
// // 4.初始化AO
// checkscopeContext = {
//     AO: {
//         arguments: {
//             length: 0
//         },
//         scope2: undefined
//     },
//     Scope: checkscope[scope]
// }
// // 5.将活动对象压入 checkscope 作用域链顶端
// checkscopeContext = {
//     AO: {
//         arguments: {
//             length: 0
//         },
//         scope2: undefined
//     },
//     Scope: [AO, [Scope]]
// }
// // 6. 开始执行, 修改AO的属性值
// checkscopeContext = {
//     AO: {
//         arguments: {
//             length: 0
//         },
//         scope2: 'local scope'
//     },
//     Scope: [AO, [Scope]]
// }
// // 7.执行完毕
// ECStack = [
//     globalContext
// ];

// 总结: 函数在定义的时候会确定作用域链, 但是在执行阶段才会把变量赋值


// 三.this
// 1.默认绑定 非严格模式下指向window
// function Person() {
//     console.log(this)
// }
// console.log(Person())

// 2.隐式绑定 指向该对象
// var obj = {
//     a: 1,
//     foo: function () {
//         console.log(this, this.a)
//     }
// }
// console.log(obj.foo())

// 3. 显示绑定(apply)
// var obj = {
//   a: 1
// }
// function foo(something) {
//   console.log(this, this.a, something);
//   return this.a + something
// }
// foo.apply(obj, [2, 3])

//4. new 绑定
// var Person = function () {
//   this.name = "jock"
//   console.log(this)
// }
// var a = new Person()
// console.log(this.name)


// 闭包
// var data = []
// for (var i = 0; i < 3; i++) {
//   data[i] = (function (i) {
//     return () => {
//       console.log(i)
//     }
//   })(i)
// }
// console.log(data)
// data[0]()
// data[1]()
// data[2]()

//例子
// var fn = null;
// function foo() {
//     var a = 2;
//     function innnerFoo() { 
//         console.log(c); // ???
//         console.log(a);
//     }
//     fn = innnerFoo; 
// }

// function bar() {
//     var c = 100;
//     fn(); 
// }

// foo();
// bar();

// call 用指定的this值来调用一个函数

// Function.prototype.call2 = function (context, ...args) {
//   // console.log(this, context, args);
//   var context = context || window
//   //this指向调用该函数的函数
//   context.fn = this;
//   var res = context.fn(...args);
//   delete context.fn
//   return res
// }
// function Product(name, price) {
//   this.name = name;
//   this.price = price;
//   console.log('Product....')
// }
// function Food(name, price) {
//   Product.call2(this, name, price);
//   this.category = 'food';
// }
// console.log(new Food('cheese', 5).name);

// var value = 2;
// var obj = {
//     value: 1
// }
// function bar(name, age) {
//     console.log(this.value);
//     return {
//         value: this.value,
//         name: name,
//         age: age
//     }
// }
// bar.call2(null); // 2
// console.log(bar.call2(obj, 'kevin', 18));



