// 보이는 학생

const input = [130, 135, 148, 140, 145, 150, 150, 153];

function solution(arr) {
	let answer = 0, max;
	arr.forEach((num, idx) => {
		if (idx === 0 || num > max) {
			max = num;
			answer++;
		}
	});
	return answer;
}

console.log(solution(input));