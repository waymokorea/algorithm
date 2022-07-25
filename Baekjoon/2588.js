const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')

const num1 = Number(input[0]);
const num2 = Number(input[1]);

const oneNum = num2 % 10;
const tenNum = Math.floor((num2 % 100)/ 10);
const hundredNum = Math.floor(num2 / 100);

console.log(num1 * oneNum);
console.log(num1 * tenNum);
console.log(num1 * hundredNum);
console.log(num1 * num2);


/*

문제
(세 자리 수) × (세 자리 수)는 다음과 같은 과정을 통하여 이루어진다.

          472      1
       x  385      2
---------------
         2360      3
        3776       4
       1416        5
---------------
       181720      6

입력
첫째 줄에 (1)의 위치에 들어갈 세 자리 자연수가, 둘째 줄에 (2)의 위치에 들어갈 세자리 자연수가 주어진다.

출력
첫째 줄부터 넷째 줄까지 차례대로 (3), (4), (5), (6)에 들어갈 값을 출력한다.

*/