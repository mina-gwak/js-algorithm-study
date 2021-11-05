// 멘토링

const input = [[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];

function solution(arr) {
	let answer = 0, comb = [];
	for (let i = 0; i < 3; i++) {
		if (i === 0) {
			// 첫번째 경우에 있는 모든 조합을 배열에 넣어줌
			for (let j = 0; j < 3; j++) {
				for (let k = j+1; k < 4; k++) {
					comb.push([arr[i][j], arr[i][k]]);
				}
			}
		} else {
			// 배열 안의 0번째 수가 1번째 수보다 뒤에 있다면 배열에서 삭제
			for (let l = 0; l < comb.length; l++) {
				if (comb[l] !== undefined && (arr[i].indexOf(comb[l][0]) > arr[i].indexOf(comb[l][1]))) {
					comb.splice(l, 1, undefined);
				}
			}
		}
	}
	// undefined를 제거한 배열을 answer에 반환
	answer = comb.filter(item => item !== undefined).length;
	return answer;
}

function answer(test){
	let answer=0, tmp = [],
	m=test.length,
	n=test[0].length;
	for(let i=1; i<=n; i++){
		for(let j=1; j<=n; j++){
			let cnt=0;
			for(let k=0; k<m; k++){
				let pi=pj=0;
				for(let s=0; s<n; s++){
					if(test[k][s]===i) pi=s;
					if(test[k][s]===j) pj=s;
				}
				if(pi<pj) cnt++;
			}
			if(cnt===m) {
				tmp.push(i, j);
				answer++;
			}
		}
	}
	return answer;
}

let arr=[[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]];
console.log(solution(arr));

console.log(solution(input));