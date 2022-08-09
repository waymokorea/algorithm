/*
superIncreasing

문제
수를 요소로 갖는 배열을 입력받아 각 요소들이 그 이전의 요소들의 합보다 큰지 여부를 리턴해야 합니다.

입력
인자 1 : arr
수를 요소로 갖는 배열
arr[i]는 정수

출력
boolean 타입을 리턴해야 합니다.
arr[i]는 arr[0]부터 arr[i-1]까지의 합보다 커야 합니다.

입출력 예시
let output = superIncreasing([1, 3, 6, 13, 54]);
console.log(output); // --> true

output = superIncreasing([1, 3, 5, 9]);
console.log(output); // --> false
*/


// my try

function superIncreasing(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let newArr = arr.splice(-1,1);
    let total = newArr.reduce((sum, cur)=> sum + cur , 0)
  
    if (arr[arr.length-1] > total) {
      return true
    } 
    else {
      return true
    }
  }

  // arr[i]는 전에 요소의 합보다 항상 커야하므로 인덱스가 커질수록 증가해야하는 배열이다
  // 하지만 나는 마지막 요소만 비교를 해서 나머지 케이스를 통과를 하지 못했다.


  function superIncreasing(arr) {
    // TODO: 여기에 코드를 작성합니다.
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= sum) {
        return false;
      }
      sum += arr[i];
    }
    return true;
  }
  