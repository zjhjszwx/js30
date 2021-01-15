// 数组扁平化
var arr = [1, [2, [3, 4]]];

// 递归
function flatten(arr) {
  let res = [];

  function recursion(array) {
    array.forEach((i) => {
      if (Array.isArray(i)) {
        recursion(i);
      } else {
        res.push(i);
      }
    });
  }
  recursion(arr);
  return res;
}
// toString
// console.log(arr.toString())

// reduce
function flatten2(arr) {
  return arr.reduce((prev, index) => {
    return prev.concat(Array.isArray(index) ? flatten2(index) : index);
  }, []);
}

// console.log(flatten2(arr));

// underscore 处理方式
/**
 * @param {Array} input 需要处理的数组
 * @param {boolean} shallow  是否只扁平一层
 * @param {boolean} strict  是否严格处理元素
 * @param {array} output   为了方便递归而传递的参数
 */
function flatten3(input, shallow, strict, output) {
  let output = output || [];

  for (let i = 0; i < input.length; i++) {
    const value = input[i];
    if (Array.isArray(value)) {
      if (shallow) {
      } else {
      }
    }
  }
  return output;
}

//underscore在数组中查找指定元素
console.log(flatten3([1, [2, [3, 4]], 5], false, false)); // [ 1, 2, 3, 4, 5 ]
console.log(flatten3([1, [2, [3, 4]], 5], true, false)); // [ 1, 2, [ 3, 4 ] ] 这里与 underscore 不一致
