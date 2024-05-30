function solution(l, r) {
    var answer = [];
    
    for (let i = l; i <= r; i++) {
        let str = i.toString();
        let valid = true;
        
        for (let char of str) {
            if (char !== '0' && char !== '5') {
                valid = false;
                break;
            }
        }
        
        if (valid) {
            answer.push(i);
        }
    }
    
    if (answer.length === 0) {
        answer.push(-1);
    }
    
    return answer;
}