/* 

convertDoubleSpaceToSingle

문제
문자열을 입력받아 해당 문자열에 등장하는 두 칸의 공백을 모두 한 칸의 공백으로 바꾼 문자열을 리턴해야 합니다.

입력
인자 1 : str
string 타입의 문자열

출력
string 타입의 문자열

주의 사항
두 칸을 초과하는 공백은 존재하지 않는다고 가정합니다.

입출력 예시

let output = convertDoubleSpaceToSingle('string  with  double  spaces');
console.log(output); // --> "string with double spaces"
 */


// 나의 코드 
// function convertDoubleSpaceToSingle(str) {
//     // TODO: 여기에 코드를 작성합니다.
//     let arr = str.split("  ");
//     let result = arr.join(" ");
  
//     return result;
    
//   }
  // 테스트만 통과하는 안좋은 코드



// 레퍼런스

function convertDoubleSpaceToSingle(str) {
    let result = '';
    let before = '';
    for (let i = 0; i < str.length; i++) {
      // 직전의 문자가 공백이고, 현재의 문자도 공백인 경우
      // 즉, 현재의 문자가 두 번째 공백인 경우(에만), 무시한다.
      if (before !== ' ' || str[i] !== ' ') {
        result = result + str[i];
      }
      before = str[i];
    }
    return result;
  }
  