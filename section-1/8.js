// 일곱난쟁이

const input = [20, 7, 23, 19, 10, 15, 25, 8, 13];

function solution(arr) {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i+1; j < arr.length; j++) {
			let sum = 0, answer = [];
			// 매번 합 새로 구해서 비효율적임
			arr.forEach((num, idx) => {
				if (idx !== i && idx !== j) {
					sum += num;
					answer.push(num);
				}
			})
			if (sum === 100) return answer;
		}
	}
}

function answer(arr) {
	let sum = arr.reduce((a, b) => a + b);
	for (let i = 0; i < 8; i++) {
		for (let j = i+1; j < 9; j++) {
			// 전체 합에서 두 개의 숫자 뺀 값이 100인지 확인
			if ((sum - (arr[i] + arr[j]) === 100)) {
				// j부터 제거해줘야 앞의 인덱스가 변화하지 않음
				arr.splice(j, 1);
				arr.splice(i, 1);
			}
		}
	}
}

console.log(solution(input));