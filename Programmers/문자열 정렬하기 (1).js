// 문자열 정렬하기 (1)

function solution(my_string) {
  return my_string
    .match(/[0-9]/g) // 숫자 문자열만 match
    .map((str) => +str) // 숫자 문자열 => 숫자로
    .sort((a, b) => a - b); // 정렬
}
