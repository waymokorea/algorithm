// 최댓값 만들기 (1)

// 내림차순으로 정렬한뒤에 앞 두수를 곱한다.
function solution(numbers) {
  let arr = numbers.sort((a, b) => b - a);

  return arr[0] * arr[1];
}
