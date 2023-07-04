/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.

*/

/**
 * @param {string} s
 * @return {string}
 */
 const vowels =['a','e','i','o','u'];
 var reverseVowels = function(s) {
     let output = s.split("");
     let initialPointer = 0;
     let endPointer = s.length-1;
 
     while(initialPointer < endPointer){
         if(vowels.includes(s[initialPointer].toLowerCase()) && vowels.includes(s[endPointer].toLowerCase())){
         [output[initialPointer], output[endPointer]] = [output[endPointer], output[initialPointer]];    
             initialPointer++;
             endPointer--;
         }
         if(!vowels.includes(s[initialPointer].toLowerCase())){
             initialPointer++;
         }
         if(!vowels.includes(s[endPointer].toLowerCase())){
             endPointer--;
         }
     }
     return output.join('')
 };