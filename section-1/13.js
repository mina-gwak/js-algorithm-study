// 대소문자 변환

const input = 'StuDY';

function solution(word) {
	let answer = '';
	for (let x of word) {
		x === x.toUpperCase() ? answer += x.toLowerCase() : answer += x.toUpperCase();
	}
	return answer;
}

console.log(solution(input));