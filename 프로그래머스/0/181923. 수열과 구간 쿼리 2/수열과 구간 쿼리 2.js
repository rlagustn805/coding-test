function solution(arr, queries) {
    let answer = []
    for (let i = 0; i < queries.length; i++) {
        let [s, e, k] = queries[i];
        const result = arr.filter((val, idx) => {
            if (idx >= s && idx <= e) {
                return val > k;
            }
        })
        
        result.sort((a, b) => {
            return a - b;
        });
        
        if (result[0] == null) {
            answer[i] = -1;
        }
        else {
            answer[i] = result[0];
        }
    }
    
    return answer;
    
    
}