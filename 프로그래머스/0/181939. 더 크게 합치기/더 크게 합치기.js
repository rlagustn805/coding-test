function solution(a, b) {
    var answer = 0;
    const n1 = Number(`${a}${b}`);
    const n2 = Number(`${b}${a}`);
    
    return n1 > n2 ? n1 : n2;
}