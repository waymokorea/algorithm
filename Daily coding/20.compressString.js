/*
compressString
문제
문자열을 입력받아 연속되는 문자가 있을 경우, 연속 구간을 반복되는 수와 문자로 조합한 형태로 압축한 문자열을 리턴해야 합니다.

입력
인자 1 : str
string 타입의 알파벳 문자열

출력
string 타입을 리턴해야 합니다.

주의 사항
빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.
3개 이상 연속되는 문자만 압축합니다.

입출력 예시
let output = compressString('abc');
console.log(output); // --> abc

output = compressString('wwwggoppopppp');
console.log(output); // --> 3wggoppo4p
 */


function compressString(str) {
    // TODO: 여기에 코드를 작성합니다.
    let count = 1;
    let result = "";
  
    for (let i=0; i<str.length; i++) {
      if(str[i] === str[i+1]) {
        count++; // 같은 문자열이 반복되면 카운트 증가
      }else if (count >= 3 && str[i] !== str[i+1]) { // 카운트가 3이상이거나 문자열이 반복되지 않을때
        result += count + str[i];
        count = 1;
      }else {
        for(let j = 1; j <= count; j++) {
          result += str[i]
        }
        count = 1;
      }
    }
    return result;
  }
  

  // Reference

  function compressString(str) {
    // 연속되는 문자를 기록하기 위한 변수
    // 첫 번째 문자로 초기화
    let before = str[0];
  
    // 동일한 문자의 반복 횟수
    let count = 1;
  
    // 정답으로 리턴할 문자열
    let result = '';
  
    // 마지막 부분이 연속된 문자일 경우를 위해 dummy 문자 추가
    str = str + ' ';
    for (let i = 1; i < str.length; i++) {
      // 동일한 문자가 반복될 경우
      if (before === str[i]) {
        count++;
      } else {
        // 이전과 다른 문자일 경우,
        // 반복된 횟수가 3 이상일 경우에만 압축을 한다.
        if (count >= 3) {
          result = result + `${count}${before}`;
        } else {
          result = result + before.repeat(count);
        }
        before = str[i];
        count = 1;
      }
    }
  
    return result;
  }
  