// 중복 문자 제거 (indexOf)

const input = 'ksekkset';

function solution(word) {
	let answer = '';
	for (let x of word) {
		if (!answer.includes(x)) answer += x;
	}
	return answer;
}

function answer(word) {
	let answer = '';
	for (let i = 0; i < word.length; i++) {
		// indexOf는 처음 찾은 인덱스 값을 반환함
		// 그러므로 현재 인덱스 값과 indexOf로 찾은 인덱스가 다르다면 이미 앞에서 같은 문자가 있었던 것임
		if (word.indexOf(word[i]) === i) answer += word[i];
	}
	return answer;
}

console.log(solution(input));