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

// bind
// 第三版
// Function.prototype.bind2 = function (context) {
//   var self = this;
//   var args = Array.prototype.slice.call(arguments, 1);
//   // var fNOP = function () { };

//   var fBound = function () {
//     var bindArgs = Array.prototype.slice.call(arguments);
//     // 当作为构造函数时，this 指向实例，此时结果为 true，将绑定函数的 this 指向该实例，可以让实例获得来自绑定函数的值
//     // 以上面的是 demo 为例，如果改成 `this instanceof fBound ? null : context`，实例只是一个空对象，将 null 改成 this ，实例会具有 habit 属性
//     // 当作为普通函数时，this 指向 window，此时结果为 false，将绑定函数的 this 指向 context
//     return self.apply(this instanceof fBound ? this : context, args.concat(bindArgs));
//   }
//   // 修改返回函数的 prototype 为绑定函数的 prototype，实例就可以继承绑定函数的原型中的值
//   // fNOP.prototype = this.prototype;
//   // fBound.prototype = new fNOP();
//   fBound.prototype = this.prototype

//   return fBound;
// }
// var foo = {
//   a: 2,
// }
// function bar(name, age) {
//   this.habit = 'shopping';
//   console.log(this.a)
//   console.log(name)
//   console.log(age)
// }
// bar.prototype.friend = 'kevin';
// var bindFoo = bar.bind2(foo, 'daisy');
// // bindFoo('18');
// // console.log(bindFoo())

// // 当bind返回的函数作为构造函数的时候, bind绑定的this会失效
// var obj = new bindFoo('18');

// console.log('b', bar)
// console.log(obj.habit);
// console.log(obj.friend);

//new 

// Otaku 御宅族，简称宅

// function Otaku(name, age) {
//     this.name = name;
//     this.age = age;
//     this.habit = 'Games';
//     return 'handsome boy';
// }

// // 因为缺乏锻炼的缘故，身体强度让人担忧
// Otaku.prototype.strength = 60;

// Otaku.prototype.sayYourName = function () {
//     console.log('I am ' + this.name);
// }

// function create() {
//     // var obj = Object.create(null);
//     var obj = new Object()
//     var constructor = [].shift.call(arguments);
//     //继承原型链
//     obj.__proto__ = constructor.prototype;
//     //访问属性
//     constructor.apply(obj, arguments);
//     return obj
// }

// var person = new Otaku('Kevin', '18');
// // var person = create(Otaku, 'Kevin', '18');

// console.log(person.name) // Kevin
// console.log(person.habit) // Games
// console.log(person.strength) // 60

// person.sayYourName(); // I am Kevin



// js 模拟 call apply
// 定义 用指定的this值来调用一个函数

function Product(name, price) {
  this.name = name;
  this.price = price;
}
// function Food(name, price) {
//   Product.call(this, name, price);
//   this.category = 'food';
// }

// console.log(new Food('cheese', 5).name);
// // expected output: "cheese"

//第一种方式
// // 用指定的this值来调用一个函数, 在Food中调用 Product, 这样返回的值肯定会有name 和 price属性
// function Food(name, price) {
//   this.call1(name, price)
//   this.catagory = 'food'
// }
// Food.prototype.call1 = Product
// console.log(new Food('cheese', 5).name)

// 但是这种方法有个问题, 每次都需要重新赋值call1

// 第二种方式 
function Food(name, price) {
  Product.apply2(this, [name, price]);
  this.catagory = 'food'
}
Function.prototype.apply2 = function () {
  const context = arguments[0];
  var args = arguments[1];
  context.fn = this
  context.fn(...args)
  delete context.fn
}

console.log(new Food('cheese', 5).name)