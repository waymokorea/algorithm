function solution(num_list) {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      even++;
    } else if (num_list[i] % 2 !== 0) {
      odd++;
    }
  }
  return [even, odd];
}
