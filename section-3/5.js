// 문자열 압축

const input = 'KKHSSSSSSSE';

function solution(text) {
	let answer = '';
	const obj = {};
	
	for (let i = 0; i < text.length; i++) {
		obj[text[i]] ? obj[text[i]] += 1 : obj[text[i]] = 1;
	}
	
	for (const [key, value] of Object.entries(obj)) {
		if (value === 1) answer += key;
		else answer += (key + value);
	}
	
	return answer;
}

function answer(text) {
	let answer = '';
	let cnt = 1;
	text += ' '; // 마지막 문자 비교 시 오류 나지 않도록 하기 위함
	
	for (let i = 0; i < text.length - 1; i++) {
		// 다음 문자랑 비교 후 같으면 카운트 증가
		// 다르면 문자와 카운트 값 넣어주기 (1일 경우는 제외)
		if (text[i] === text[i+1]) cnt++;
		else {
			answer += text[i];
			cnt > 1 && (answer += String(cnt));
			cnt = 1;
		}
	}
	
	return answer;
}

console.log(solution(input));