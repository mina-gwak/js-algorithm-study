// 세 수 중 최솟값

const input = [2, 5, 1];

function solution(a, b, c) {
	let answer, temp;
	temp = a < b ? a : b;
	answer = temp < c ? temp : c;
	return answer;
}

console.log(solution(...input));