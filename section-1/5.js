// 최솟값 구하기

const input = [5, 7, 1, 3, 2, 9, 11];

function solution(arr) {
	
	let answer = arr[0];
	
	// let answer = Number.MAX_SAFE_INTEGER;
	// 안전한 최대 정수값을 넣어줌
	
	// 1
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < answer) answer = arr[i];
	}
	
	//2
	// answer = Math.min(...arr);
	// answer = Math.min.apply(null, arr);
	
	return answer;
}

console.log(solution(input));