// 삼각형 판별하기

const input = [13, 33, 17];

// 세 수 중 어느 게 max로 들어간지 모르니 array 안에 넣어 정렬한 후 길이를 비교하고자 했음
function solution(a, b, c) {
	let lengths = [a, b, c];
	let temp;
	for (let i = 0; i < lengths.length - 1; i++) {
		for (let j = i; j < lengths.length - 1; j++) {
			if (lengths[i] > lengths[i+1]) {
				temp = lengths[i];
				lengths[i] = lengths[i+1];
				lengths[i+1] = temp;
			}
		}
	}
	return lengths[0] + lengths[1] > lengths[2] ? "YES" : "NO";
}

function answer(a, b, c) {
	// YES, NO 중 하나 기본값으로 두기
	let answer = "YES", max;
	// 총합 - 가장 큰 막대 길이 = 나머지 막대 길이 합
	let total = a + b + c;
	if (a > b) max = a;
	else max = b;
	if (c > max) max = c;
	if (total - max <= max) answer = "NO";
	return answer;
}

console.log(solution(...input));