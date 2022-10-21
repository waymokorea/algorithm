// 나의 코드
function solution(age) {
  let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
  let newAge = age
    .toString()
    .split("")
    .map((item) => alphabet[Number(item)])
    .join("");
  return newAge;
}

// 다른사람의 풀이
function solution(age) {
  return [...("" + age)]
    .map((num) => String.fromCharCode("a".charCodeAt(0) + +num))
    .join("");
}
