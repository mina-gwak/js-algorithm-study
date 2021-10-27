// 가장 짧은 문자거리

const input = "teachermode";

function solution(text, char) {
	let answer = Array.from({ length: text.length }, () => 0);
	let arr = [];
	
	// 제시된 문자가 있는 인덱스 구하기
	let idx = text.indexOf(char);
	while	(idx !== -1) {
		arr.push(idx);
		idx = text.indexOf(char, idx + 1);
	}
	
	// 문자 간 거리 구하기
	arr.map((num, idx) => {
		// 첫번째 char인 경우 텍스트의 처음부터 해당 문자까지의 거리 넣어줌
		if (idx === 0) {
			for (let i = 0; i <= num; i++) {
				answer[num - i] = i;
			}
		}
		
		// 마지막 char인 경우 해당 인덱스부터 텍스트의 끝까지 거리 넣어줌
		if (idx === arr.length - 1) {
			for (let i = 0; i < text.length - num; i++) {
				answer[num + i] = i;
			}
		} else {
			// 첫번째부터 마지막 전의 char까지 실행
			// 인덱스 더해 반으로 나눈 후 해당 인덱스 전후로 거리 넣어줌
			let mid = (num + arr[idx + 1]) / 2;
			for (let i = 0; i <= Math.floor(mid - num); i++) {
				answer[num + i] = i;
			}
			for (let i = 0; i <= Math.floor(arr[idx + 1] - mid); i++) {
				answer[arr[idx + 1] - i] = i;
			}
		}
	})
	return answer;
}

function answer(text, char) {
	let answer = Array.from({length: text.length}, () => 0);
	let count = 1000;
	
	// 처음부터 끝까지 돌면서 왼쪽 char부터 요소까지의 거리를 넣어줌
	for (let i = 0; i < text.length; i++) {
		text[i] === char ? count = 0 : count += 1;
		answer[i] = count;
	}
	
	count = 1000;
	
	// 거꾸로 돌면서 오른쪽 char부터 요소까지의 거리를 넣어줌
	// 왼쪽 char에서부터의 거리보다 더 커지면 값을 넣어주지 않음
	for (let i = text.length - 1; i >= 0; i--) {
		text[i] === char ? count = 0 : count += 1;
		if (answer[i] > count) answer[i] = count;
	}
	return answer;
}

console.log(solution(input, 'e'));