function solution(my_string, overwrite_string, s) {
    var answer = '';
    
    answer = my_string.split('');
    
    answer.splice(s, overwrite_string.length, overwrite_string);
    
    
    return answer.join('');
}