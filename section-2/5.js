// 등수 구하기

const input = [87, 89, 92, 100, 76];

function solution(arr) {
	let answer = arr.map(_ => 1);
	arr.forEach((num, idx) => {
		for (let i = 0; i < arr.length; i++) {
			if (num < arr[i]) answer[idx] += 1;
		}
	});
	return answer;
}

function answer(arr) {
	let n = arr.length;
	// Array.from() 사용해 배열 초기화
	let answer = Array.from({ length: n }, () => 1);
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (arr[j] > arr[i]) answer[i]++;
		}
	}
	return answer;
}

console.log(solution(input));