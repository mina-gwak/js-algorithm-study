// 가운데 문자 출력 (substring, substr)

const input = 'study';

function solution(word) {
	let answer = '';
	const mid = word.length / 2;
	// 홀수인지 짝수인지 확인 후
	// 홀수면 가운데 수를(인덱스이므로 -1 해줌), 짝수면 중간값을 올림, 내림하여 가운데 2개 문자를 출력하도록 함
	if (word.length % 2 === 0) {
		answer += word[mid-1];
		answer += word[mid];
	} else {
		answer += word[Math.floor(mid)];
	}
	return answer;
}

function answer(s) {
	let answer;
	// 몫을 구해 해당 값을 내림
	let mid = Math.floor(s.length / 2);
	// 홀수면 substring으로 mid값 넣어줌
	if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
	// 짝수면 substring으로 mid-1, mid값 넣어줌
	else answer = s.substring(mid - 1, mid + 1);
	
	//if(s.length%2===1) answer=s.substr(mid, 1);
	//else answer=s.substr(mid-1, 2);
	return answer;
}

console.log(solution(input));