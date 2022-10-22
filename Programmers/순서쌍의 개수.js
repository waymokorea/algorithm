// 순서쌍의 개수

// 순서 쌍의 개수는 약수의 개수 와 같다!

function solution(n) {
  let result = [];
  for (let i = 1; i <= n; i++) {
    n % i === 0 ? result.push(i) : null;
  }
  return result.length;
}
