// A를 #으로

const input = 'BANANA';

function solution(word) {
	let answer = word.replaceAll('A', '#');
	// 정규식을 사용해 replace를 replaceAll처럼 사용 가능
	// let answer = word.replace(/A/g, '#');
	return answer;
}

function answer(word) {
	let answer;
	for (let x of word) {
		x === 'A' ? answer += '#' : answer += x;
	}
	return answer;
}

console.log(solution(input));