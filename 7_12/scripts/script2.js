'use strict'

//we need recieve string
const string=prompt("Enter string for find");

// propose for user choose version of looking for bomb
const chooseVersionOfFind=confirm("If you want find 'b' click ok");

function findBomb(){
        // condition for choosing what letter we looking for
        const bomb=chooseVersionOfFind?'b':prompt('enter bomb for looking');
        // i - counter for steps
        // counter - count all bombs
        let counter=0;
        let i=0;
        for(let i=0; i<string.length;i++){
        if(string.charAt(i).toLowerCase()===bomb.toLowerCase()){
                counter=counter+1
        };
        }       
        
        // run all string chart-by-chart
        // while(i<string.length){
        // // check every letter of string with recieved bomb
        // if(string.charAt(i).toLowerCase()===bomb.toLowerCase()){
        //         counter=counter+1
        // };
        // i=i+1
        // }
        // return counter, bomb;
        // використовуємо загортання значен bomb i counter в об'єкт, щоб в ретьорні мати доступ до обох цих значень
        return {counter,bomb};
}
// we must write result of running function for use all variables that it return

const result=findBomb();
// console.log('result', result)
console.log(`In string ${string} : ${result.counter} we have symbol ${result.bomb}`)
