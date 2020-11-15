var arr = [1, 2, 1, 1, 1, 2, 3]
// 2次循环
// function func(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     //是否插入 res
//     let flag = true
//     for (let j = 0; j < res.length; j++) {
//       const element = res[j];
//       if (arr[i] == element) {
//         flag = false
//         break;
//       }
//     }
//     if (flag) {
//       res.push(arr[i])
//     }
//   }
//   return res
// }

//使用indexof
//判断元素是否在数组中, 返回元素的位置
// function func(array) {
//   let res = []
//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (res.indexOf(element) > -1) {
//       continue;
//     }
//     res.push(element)
//   }
//   return res
// }

// console.log(func(arr))
