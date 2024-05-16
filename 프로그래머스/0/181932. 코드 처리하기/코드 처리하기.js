function solution(code) {
    let mode = 0;
    let ret = '';
    /*
    (1) mode가 0, code[i] !== 1, idx가 짝수일때만 문자 넣음
    (2) mode가 0, code[i] === 1, 문자 안넣음, mode 1로 바꿈
    
    (3) mode가 1, code[i] !== 1, idx가 홀수일때만 문자 넣음
    (4) mode가 1, code[i] === 1, 문자안넣음, mode 0으로 바꿈
    */
    
    code = code.split('');
    
    for (let i = 0; i < code.length; i++) {
        if (mode === 0) {
            if (code[i] !== '1' && i % 2 === 0) {
                ret += code[i];
            }
            else if (code[i] === '1'){
                mode = 1;
            }
        }
        else {
            if (code[i] !== '1' && i % 2 !== 0) {
                ret += code[i];
            }
            else if (code[i] === '1') {
                mode = 0;
            }
        }
    }
    
    if (ret === '') {
        ret = 'EMPTY'
    }
    
    return ret;
    
}