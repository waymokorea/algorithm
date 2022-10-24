// 삼각형의 완성조건 (1)

function solution(sides) {
  let max = Math.max(...sides);
  return max < sides.reduce((a, c) => a + c) - max ? 1 : 2;
}
