// 뒤집은 소수

const input = [32, 55, 62, 20, 250, 370, 200, 30, 100];

function solution(arr) {
	let answer = [];
	arr.forEach(num => {
		let rev = parseInt(String(num).split('').reverse().join(''));
		for (let i = 2; i <= rev; i++) {
			if (rev === i) answer.push(rev);
			if (rev % i === 0) break;
		}
	});
	return answer;
}

function isPrime(num) {
	if (num === 1) return false;
	for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
		if (num % i === 0) return false;
	}
	return true;
}

function answer(arr) {
	let answer = [];
	for (let x of arr) {
		let res = 0;
		while (x) {
			let t = x % 10;
			res = res * 10 + t;
			x = parseInt(x / 10);
		}
		// let res = Number(x.toString().split('').reverse().join(''));
		if (isPrime(res)) answer.push(res);
	}
	return answer;
}

console.log(solution(input));