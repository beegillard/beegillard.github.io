//Reverse String
//modify array in-place
/*

 var reverseString = function(s) {
     
        const reversed = s.reverse();
        console.log(reversed);
};



//First unique character in a string
//indexOf()
//lastIndexOf()

var firstUniqChar = function(s) {
    let nonDuplicated = [];
    for (let i = 0; i < s.length; i++) {
        let char = s.charAt(i);
        if (s.indexOf(char) === s.lastIndexOf(char)) {
            nonDuplicated.push(s.indexOf(alphabet[i]));
        }
    }
    if (nonDuplicated.length === 0) {
        console.log(-1)
    } else if (isNaN(Math.min(nonDuplicated))) {
        console.log(0) } else {
    console.log(Math.min(nonDuplicated));
    }
 
};
firstUniqChar("leetcode");
*/

var firstUniqChar = function(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let nonDuplicated = [];
    for (let i = 0; i < alphabet.length; i++) {
        if (s.indexOf(alphabet[i]) === s.lastIndexOf(alphabet[i]) && s.indexOf(alphabet[i]) !== -1) {
            nonDuplicated.push(s.indexOf(alphabet[i]));
        }
    }
    console.log(nonDuplicated);
    console.log(Math.min(...nonDuplicated));
    if (nonDuplicated.length === 0) {
        return -1;
    } else {
    return Math.min(...nonDuplicated);
    }
};

console.log(firstUniqChar('leetcode'));