// 숫자만 추출

const input = 'g0en2T0s8eSoft';

function solution(input) {
	const answer = parseInt(input.match(/[0-9]/g).join(''));
	return answer;
}

function answer(str) {
	let answer = '';
	for (let x of str) {
		// isNan : 숫자인지 검사함 (is Not a Number)
		if (!isNaN(x)) answer += x;
	}
	return parseInt(answer);
	
	// parseInt 사용 X
	// let answer = 0;
	// for (let x of str) {
	// 	if (!isNan(x)) answer = answer * 10 + Number(x);
	// }
	// return answer;
}

console.log(solution(input));