// 대문자로 통일

const input = 'ItsTimeToStudy';

function solution(word) {
	// let answer;
	
	// for (let x of word) {
	// 소문자인 경우 대문자로 변환
	// if (x === x.toLowerCase()) answer += x.toUpperCase();
	// else answer += x;
	
	// 아스키코드로 변환하여 확인 (대문자 : 65 ~ 90, 소문자 : 97 ~ 122)
	// if (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122) answer += x.toUpperCase();
	// else answer += x;
	// }
	
	// return answer;
	
	return word.toUpperCase();
}

console.log(solution(input));