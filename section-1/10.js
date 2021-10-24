// 문자 찾기

const input = 'COMPUTERPROGRAMMING';

function solution(word, char) {
	let answer = 0;
	for (let x of word) {
		if (x === char) answer++;
	}
	return answer;
	
	// split을 활용해 찾기
	// 해당 문자로 문자열을 split한 것에서 -1을 하면 문자의 개수가 나옴
	// R로 split => 'COMPUTE', 'P', OG', 'AMMING'
	// let answer = word.split(char).length;
	// return answer - 1;
}

console.log(solution(input, 'R'));