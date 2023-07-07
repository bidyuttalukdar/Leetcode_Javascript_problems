/* 
Replace sepearte alphanumberic keys of an object with _

example 1:
const obj = {
  employee233vv: 'Alice',
  employee: 'Bobby',
};


output: 
{ employee: 'Bobby', employee_233vv: 'Alice' }

*/

Object.keys(obj).some((str) => /\d/.test(str)) ? Object.keys(obj).forEach(key => { 
    if(/\d/.test(key)){ 
         obj[key.replace(/(\d+)/g, '_$1')] = obj[key];
         delete obj[key]; 
    } 
}) : undefined