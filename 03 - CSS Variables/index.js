// 数组浅拷贝
// var arr = [{ old: 'old' }, ['old']];
// var arr = [{ old: 'old' }, ['old', { func: () => { } }]];

// var new_arr = arr.concat();
// var new_arr = [...arr]
// var new_arr = JSON.parse(JSON.stringify(arr)); //不能拷贝函数
// arr[0].old = 'new'
// arr[1][0] = 'new'


// console.log(arr)
// console.log(new_arr)

// deep copy

//浅拷贝
// function shallowCopy(obj) {
//   if (typeof obj !== 'object') {
//     return
//   }
//   let res = {}
//   if (Object.prototype.toString.call(obj) === '[object Array]') {
//     res = []
//   }
//   for (let key in obj) {
//     res[key] = obj[key]
//   }
//   return res
// }

function deepClone(obj) {
  if (typeof obj !== 'object') {
    return
  }
  let res = {}
  if (Object.prototype.toString.call(obj) === '[object Array]') {
    res = []
  }
  for (let key in obj) {
    res[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key]
  }
  return res
}

// var arr = [{ old: 'old' }, ['old', { func: () => { } }]];
// var new_arr = deepClone(arr)

// arr[0].old = 'new';
// arr[1][0] = 'new';

// console.log(arr) // [{old: 'new'}, ['new']]
// console.log(new_arr) // [{old: 'new'}, ['new']]


var obj1 = {
  a: 1,
  b: { b1: 1, b2: 2 }
};

var obj2 = {
  b: { b1: 3, b3: 4, d: { d1: 1 } },
  c: 3
};

var obj3 = {
  d: 4
}

function extend() {
  const target = Array.prototype.shift.call(arguments)
  const param = Array.from(arguments)
  // console.log(target, param)
  param.forEach(i => {
    for (let key in i) {
      target[key] = typeof i[key] === 'object' ? deepClone(i[key]) : i[key]
    }
  })
  return target
}
// {
//    a: 1,
//    b: { b1: 3, b3: 4 },
//    c: 3,
//    d: 4
// }

var res = extend(obj1, obj2, obj3)
obj2.b.b1 = 4444
console.log(res);

