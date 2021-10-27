// 봉우리

const input = [[5, 3, 7, 2, 3],
	[3, 7, 1, 6, 1],
	[7, 2, 5, 3, 4],
	[4, 3, 6, 4, 1],
	[8, 7, 3, 5, 2]];

function solution(arr) {
	let answer = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr.length; j++) {
			let currNum = arr[i][j];
			if (i !== 0 && arr[i - 1][j] >= currNum) continue;
			if (i !== 4 && arr[i + 1][j] >= currNum) continue;
			if (j !== 0 && arr[i][j - 1] >= currNum) continue;
			if (j !== 4 && arr[i][j + 1] >= currNum) continue;
			answer++;
		}
	}
	return answer;
}

// 상하좌우 대각선까지 8방향 탐색하는 경우 이 방법 사용하면 코드가 간결해진다고 함
function answer(arr) {
	let answer = 0;
	let n = arr.length;
	// 상하좌우를 탐색하기 위해 인덱스 조정하는 경우의 수
	let dx = [-1, 0, 1, 0];
	let dy = [0, 1, 0, -1];
	// 행
	for (let i = 0; i < n; i++) {
		// 열
		for (let j = 0; j < n; j++) {
			let flag = 1;
			// 상하좌우
			for (let k = 0; k < 4; k++) {
				let nx = i + dx[k];
				let ny = j + dy[k];
				// 각 방향별로 가장자리가 아니며 중앙에 있는 수가 더 작을 때 탐색 중단
				if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) {
					flag = 0;
					break;
				}
			}
			if (flag) answer++;
		}
	}
	return answer;
}

console.log(solution(input));