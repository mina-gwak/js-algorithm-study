// 연필 개수

// Math.ceil() : 소수점 올림
// Math.floor() : 소수점 버림
// Math.round() : 소수점 반올림

const input = 178;

function solution(n) {
	let answer;
	answer = Math.ceil(n/12);
	return answer;
}

// 또 다른 방법
// 주어진 수를 나눈 후 나머지가 0이면 몫 그대로 반환
// 나머지가 있다면 몫에 +1한 수를 반환

console.log(solution(input));