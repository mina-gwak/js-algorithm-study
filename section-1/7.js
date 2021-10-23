// 10부제

const input = [25, 23, 11, 47, 53, 17, 33];

function solution(day, arr) {
	let answer = 0;
	arr.forEach(num => num % 10 === day ? answer++ : null);
	return answer;
}

console.log(solution(3, arr));