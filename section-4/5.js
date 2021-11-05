// k번째 큰 수

const input = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

function solution(n, k, card) {
	let answer;
	let tmp = new Set();
	for (let i = 0; i < n - 2; i++) {
		for (let j = i + 1; j < n - 1; j++) {
			for (let k = j + 1; k < n; k++) {
				tmp.add(card[i] + card[j] + card[k]);
			}
		}
	}
	let arr = Array.from(tmp).sort((a, b) => b - a);
	answer = arr[k - 1];
	return answer;
}

console.log(solution(10, 3, input));