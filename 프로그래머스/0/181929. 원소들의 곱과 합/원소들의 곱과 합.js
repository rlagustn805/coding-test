function solution(num_list) {
    const sum = num_list.reduce((acc, currValue) => {
        return acc + currValue;
    })
    
    const mul = num_list.reduce((acc, currValue) => {
        return acc * currValue;
    })
    
    return (sum ** 2) > mul ? 1 : 0;
    
}