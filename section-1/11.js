// 대문자 찾기

const input = 'KoreaTimeGood';

function solution(word) {
	let answer = 0;
	for (let x of word) {
		// 기존 문자와 대문자로 변환한 후가 동일한지 비교
		if (x === x.toUpperCase()) answer++;
		
		// 아스키코드로 변환하여 확인 (대문자 : 65 ~ 90, 소문자 : 97 ~ 122)
		// if (x.charCodeAt0) >= 65 && x.charCodeAt(0) <= 90) answer++;
	}
	return answer;
}

console.log(solution(input));