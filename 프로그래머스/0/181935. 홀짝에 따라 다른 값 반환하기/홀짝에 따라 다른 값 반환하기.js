function solution(n) {
    var answer = 0;
    /*
    (1) 홀짝 확인
    (2) 조건에 따라 수행
    (3) 
    */
    
    if (n % 2 !== 0) {
        for ( let i = n; i >= 1; i -= 2 ) {
            answer += i;
        }
    }
    else {
        for ( let i = n; i >=2; i -= 2) {
            answer += i * i;
        }
    }
    
    return answer;
}

