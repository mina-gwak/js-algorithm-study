// 1부터 N까지의 합

const input = 10;

function solution(n) {
	let answer = 0;
	for (let i = 0; i <= n; i++) {
		answer += i;
	}
	return answer;
}

console.log(solution(input));