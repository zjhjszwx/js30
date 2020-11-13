var arr = [1, 2, 1, 1, 1, 2, 3]
// 2次循环
function func(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    //是否插入 res
    let flag = true
    for (let j = 0; j < res.length; j++) {
      const element = res[j];
      if (arr[i] == element) {
        flag = false
        break;
      }
    }
    if (flag) {
      res.push(arr[i])
    }
  }
  return res
}

console.log(func(arr))
