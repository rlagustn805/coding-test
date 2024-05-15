const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0]
    /*
    (1) 문자열을 하나씩 자른다.
    (2) if문을 통해 검증 후 대소문자 변환
    (3) 문자열 합치고 출력
    */
    str = str.split('');
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            str[i] = str[i].toLowerCase();
        }
        else {
            str[i] = str[i].toUpperCase();
        }
    }
    
    console.log(str.join(''));
    
    
});