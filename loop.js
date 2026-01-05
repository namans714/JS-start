// // const sym = "* "
// // for(let i=1; i<=5; i++){
// //     console.log(sym.repeat(i))
// // }
// // for(let i=4; i>=1; i--){
// //     console.log(sym.repeat(i))
// // }

// // const userName = "Naman Upadhyay"
// // let count = 0;
// // for (let i=0; i<userName.length; i++){
// //     count++;
// // }
// // console.log(count);
// let remainder;
// for(let i=1; i<=5; i++){
//     remainder=i%2;
//     if(remainder===0){
//         console.log(`${i} is an even number.`)
//     }else{
//         console.log(`${i} is an odd number.`)
//     }
// }

// const inputString = "Hello cutie"
// const vowels = "aeiou";
// for( let i=0; i<inputString.length; i++){
//     if(vowels.includes(inputString[i])){
//         console.log(`${inputString[i]} is a vowel.`)
//     }else{
//         console.log(`${inputString[i]} is not a vowel.`)
//     }
// }

for(let i=1; i<=20; i++){
    remainder3=i%3;
    remainder5=i%5;
    remainder7=i%7;
    if(remainder3===0){
        console.log(`${i} is divisible by 3.`)
    }else if(remainder5===0){
        console.log(`${i} is divisible by 5.`)
    }else if(remainder7===0){
        console.log(`${i} is divisible by 7.`)}
    // }else{
    //     console.log(`${i} is not divisible by 3, 5 or 7.`)
    // }
}