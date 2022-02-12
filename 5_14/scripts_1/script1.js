'use strict';


const arrayOfStrings=['grey','red','yellow','black'];
const arrayOfNumbers=[1,2,3];

let str = 'light';

// console.log('arrayOfStrings', arrayOfStrings);
// console.log('string', string);

function createLights(array=undefined){
let newArray=[];
for(let i=0; i<array.length; i++){
        const condition=confirm('do you want create new number?');
        // newArray[i]=array[i].toString().concat(string);
        if(!condition){break;};
        newArray[i]=array[i]+Number(!!str);
        console.log('Number(!!str)>>>>>>>', Number(!!str));
        console.log('value', typeof(condition));
}
return newArray;
}
// function createLights(array=undefined,string=str){
// let newArray=[];
// for(let i=0; i<array.length; i++){
//         // newArray[i]=array[i].toString().concat(string);
//         newArray[i]=array[i]+string;
// }
// return newArray;
// }

// console.log(createLights(arrayOfStrings,str));

console.log(createLights(arrayOfNumbers));
console.log(arrayOfNumbers);

