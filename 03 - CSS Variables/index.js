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
var arr = [{ old: 'old' }, ['old', { func: () => { } }]];
var obj = { a: 'aaa', b: 'bbb' }
for (var key in obj) {
  console.log(key)
}