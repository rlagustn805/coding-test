function solution(a, b, c) {
    const selectCnt = new Set([a, b, c]).size;
    
    switch (selectCnt) {
        case 3: 
            return a + b + c;
        case 2: 
            return (a + b + c) * 
                   (a ** 2 + b ** 2 + c ** 2);
        case 1:
            return (a + b + c) *
                   (a ** 2 + b ** 2 + c ** 2) *
                   (a ** 3 + b ** 3 + c ** 3);       
    }
}