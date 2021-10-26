// 점수 계산

const input = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

function solution(arr) {
	let answer = 0, count = 0;
	arr.forEach(num => num ? answer += ++count : count = 0);
	return answer;
}

console.log(solution(input));