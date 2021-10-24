// 중복 단어 제거

const input = ['good', 'time', 'good', 'time', 'student'];

function solution(arr) {
	let answer = [];
	// forEach보다는 조건에 맞는 원소들만 모은 배열을 반환하므로 답처럼 filter 사용하는 게 더 좋을 듯
	arr.forEach(word => {
		if (!answer.includes(word)) answer.push(word);
	});
	return answer;
}

function answer(arr) {
	let answer;
	// 16번과 마찬가지로 해당 단어의 인덱스와 indexOf로 찾은 인덱스 비교하여 같은 것만 반환
	answer = arr.filter((word, idx) => arr.indexOf(word)=== idx);
	return answer;
}

console.log(solution(input));