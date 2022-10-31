//숨어있는 숫자의 덧셈 (1)

function solution(my_string) {
  let newArr = my_string.split('');
  let result = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (Number(newArr[i])) {
      result += Number(newArr[i]);
    }
  }

  return result;
}
