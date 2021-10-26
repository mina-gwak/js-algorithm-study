// 큰 수 출력하기

const input = [7, 3, 9, 5, 6, 12];

function solution(arr) {
	let answer = arr.filter((num, idx) => {if (idx === 0 || num > arr[idx - 1]) return true;});
	return answer;
}

console.log(solution(input));