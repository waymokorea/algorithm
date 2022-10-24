// 가장 큰 수 찾기

// my code
function solution(array) {
  let count = 0;
  let idx = 0;
  for (let i = 0; i < array.length; i++) {
    if (count < array[i]) {
      count = array[i];
      idx = array.indexOf(array[i]);
    }
  }
  return [count, idx];
}

// learned code

function solution(array) {
  return [Math.max(...array), array.indexOf(Math.max(...array))];
}
