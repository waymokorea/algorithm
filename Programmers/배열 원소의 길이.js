// 배열 원소의 길이

function solution(strlist) {
  var answer = [];
  for (let i in strlist) {
    answer.push(strlist[i].length);
  }
  return answer;
}
