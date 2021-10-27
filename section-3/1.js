// 회문 문자열

const input = 'goooG';

function solution(input) {
	let answer = 'YES';
	const word = input.toUpperCase();
	const lastIdx = word.length - 1;
	// 절반만 비교하면 됨, 굳이 전체 다 비교할 필요가 없음
	for (let i = 0; i < word.length; i++) {
		if (word[i] !== word[lastIdx - i]) {
			answer = 'NO';
			break;
		}
	}
	
	return answer;
}

function answer(s) {
	let answer = 'YES';
	s = s.toLowerCase();
	let len = s.length;
	for (let i = 0; i < Math.floor(len / 2); i++) {
		if (s[i] !== s[len - i - 1]) return 'NO';
	}
	
	// 배열로 만들어 reverse 한 뒤 다시 join하여 비교
	// if (s.split('').reverse().join('') !== s) return 'NO';
	
	return answer;
}

console.log(solution(input));