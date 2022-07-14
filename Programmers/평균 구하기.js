function solution(arr) {
    var answer = 0;
    const result = arr.reduce(function add(sum, currValue){
        return sum + currValue;
    }, 0);
    answer = result / arr.length;
    return answer;
}


/*
평균 구하기 

정수를 담고 있는 배열 arr의 평균값을 리턴하는 함수 완성하기

제한사항 
* arr은 길이 1 이상, 100 이하인 배열입니다.
* arr의 원소는 -10000 이상 10000 이하인 정수이다.


이번 기회에 reduce()를 처음 접했는데 아직 너무 어렵다
*/