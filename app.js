var isPalindrome = function(x) {
    let myString = x.toString()
    let reversed = '';
    for(let i = myString.length -1; i >= 0; i--){
        reversed += myString[i]
    }
    if(myString === reversed){
        return true;
    }else{
        return false;
    }
};
console.log('problem 1:',isPalindrome(1000021));


// var romanToInt = function(s) {
// const romanNumerals = [
//   { symbol: 'I', value: 1 },
//   { symbol: 'V', value: 5 },
//   { symbol: 'X', value: 10 },
//   { symbol: 'L', value: 50 },
//   { symbol: 'C', value: 100 },
//   { symbol: 'D', value: 500 },
//   { symbol: 'M', value: 1000 }
// ];

// // loop through the string and assign each index a value 

// // if current index > then the next index return the current index value

// // if the current index < the next index, return the current index minus the next index vlue

//     s = s.toString()
//     let total = 0;
//     for(let i = 0; i < s.length; i++){
//         for(j = 0; j < romanNumerals.length; j++){
//             if(romanNumerals[j + 1] === romanNumerals[j].length -1)
//             console.log('value',romanNumerals[j + 1].value);
//            if(romanNumerals[j].value < romanNumerals[j + 1].value){
//             total += romanNumerals[j + 1].value - romanNumerals[j]. value
//            }else{
//             total = total + romanNumerals[j].value
//         }
        
//     }

// };
// }
// console.log(romanToInt("MCMXCIV"));







var removeDuplicates = function(nums) {
    if(nums.length === 0) return 0;
    let k = 1;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[i - 1]){
            nums[k] = nums[i]
            k++;
            
        }
    }
    return k
};

console.log(removeDuplicates([1,1,2,2,3])); 

// first loop
// i === 1
// nums[1](1) !== nums[1-1](1) false

// second loop
// i===2
// nums[2](2) !== nums[2-1](1) true
// set nums[1] == nums[2]->(2)

// array looks like [1,2,2,3]

// k ++ so now it's = 2

// 3rd loop
// i === 3
// nums[3]->(2) !== nums[2]->(2) false

// 4th loop

// i === 4
// nums[4] -> (3) !== nums[3] -> (2) true
// set nums[2] == nums[4]->(3)

// k ++ so now it's = 3

// [1,2,3]

