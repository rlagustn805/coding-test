function solution(arr, queries) {
    queries.forEach(([s, e, k]) => {
        arr = arr.map((val, i) => i >= s && i <= e && i % k === 0 ? val + 1 : val);
    })
    
    return arr;
}