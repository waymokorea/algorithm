//문자 반복 출력하기

function solution(my_string, n) {
  let arr = my_string.split("");
  return arr.map((item) => item.repeat(n)).join("");
}
