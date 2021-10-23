// 홀수

const input = [12, 77, 38, 41, 53, 92, 85];

function solution(arr) {
	let min = Number.MAX_SAFE_INTEGER, sum = 0;
	arr.forEach(num => {
		if (num % 2 === 1) {
			sum += num;
			min > num ? min = num : null;
		}
	})
	return `${sum}\n${min}`;
}

console.log(solution(input));