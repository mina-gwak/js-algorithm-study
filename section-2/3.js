// 가위 바위 보

const inputA = [2, 3, 3, 1, 3];
const inputB = [1, 1, 2, 2, 3];

function solution(inputA, inputB) {
	let answer = [];
	for (let i = 0; i < inputA.length; i++) {
		if (inputA[i] === inputB[i]) answer.push('D');
		// 승패를 가르는 케이스 중 가위, 보가 나오는 경우만 따로 분리
		else if (inputA[i] + inputB[i] === 4) {
			answer.push(inputA[i] > inputB[i] ? 'B' : 'A');
		} else {
			answer.push(inputA[i] > inputB[i] ? 'A' : 'B');
		}
	}
	return answer;
}

function answer(inputA, inputB) {
	let answer = '';
	for (let i = 0; i < inputA.length; i++) {
		// 각 케이스별로 if문 작성
		if (inputA[i] === inputB[i]) answer += 'D ';
		else if (inputA[i] === 1 && inputB[i] === 3) answer += 'A ';
		else if (inputA[i] === 2 && inputB[i] === 1) answer += 'A ';
		else if (inputA[i] === 3 && inputB[i] === 2) answer += 'A ';
		else  answer += 'B ';
	}
	return answer;
}

console.log(solution(inputA, inputB));