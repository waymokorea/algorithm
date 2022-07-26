/*
computeWhenDouble

문제
연이율을 입력받아 원금이 2배 이상이 될 때까지 걸리는 시간(년)을 리턴해야 합니다.

입력
인자 1 : interestRate
number 타입의 연이율 (%)

출력
number 타입을 리턴해야 합니다.


입출력 예시

let output = computeWhenDouble(7);
console.log(output); // --> 11

output = computeWhenDouble(10);
console.log(output); // --> 8
*/


function computeWhenDouble(interestRate) {
    // TODO: 여기에 코드를 작성합니다.
    let annual =  1 + interestRate / 100
    let year = 0;
    let money = 1;
    while ( money < 2) {
      money = money * annual
      year++
    }
    return year
  }
  
  
  // 입력 : 연이율 (0.0)
  // 출력 : 숫자 (원금 두배가 걸리는 시간)
  // 연이율을 변수 설정
  // 반복하면서 