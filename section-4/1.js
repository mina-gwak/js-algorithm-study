// 자릿수의 합

const input = [128, 460, 603, 40, 521, 137, 123];

function solution(n, arr) {
	let answer = 0, max = 0, sum = 0;
	
	arr.forEach((item) => {
		let num = item;
		sum = 0;
		
		while (num > 0) {
			sum += num % 10;
			num = parseInt(num / 10);
		}
		
		// let sum = x.toString().split('').reduce((a, b) => a + Number(b), 0);
		
		if (sum === max && item > answer) {
			answer = item;
		} else if (sum > max) {
			max = sum;
			answer = item;
		}
	});
	return answer;
}

console.log(solution(7, input));