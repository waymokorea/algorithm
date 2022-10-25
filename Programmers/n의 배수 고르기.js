// n의 배수 고르기

function solution(n, numlist) {
  const result = numlist.filter((item) => item % n === 0);
  return result;
}
