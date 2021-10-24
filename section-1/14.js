// 가장 긴 문자열

const input = ['teacher', 'time', 'student', 'beautiful', 'good'];

function solution(arr) {
	let answer = '';
	arr.forEach(word => { if (word.length > answer.length) answer = word; });
	return answer;
}

function answer(word) {
	let answer = '', max = Number.MIN_SAFE_INTEGER;
	for (let x of word) {
		if (x.length > max) {
			max = x.length;
			answer = x;
		}
	}
	return answer;
}

console.log(solution(input));