const input = 'found7, time: study; Yduts; emit, 7Dnuof';

function solution(input) {
	let answer = 'YES';
	const words = input.toUpperCase().match(/[A-Z]/gi);
	const lastIdx = words.length - 1;
	for (let i = 0; i < words.length; i++) {
		if (words[i] !== words[lastIdx - i]) {
			answer = 'NO';
			break;
		}
	}
	return answer;
}

function answer(s) {
	let answer = 'YES';
	// 소문자 a-z가 아닌 것들을 대체
	s = s.toLowerCase().replace(/[^a-z]/g, '');
	if (s.split('').reverse().join('') !== s) return 'NO';
	return answer;
}

console.log(solution(input));