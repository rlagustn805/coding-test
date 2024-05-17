function solution(arr, queries) {
    
    for (let i = 0; i < queries.length; i++) {
        let [x, y] = queries[i];
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }
    
    
    return arr;
}