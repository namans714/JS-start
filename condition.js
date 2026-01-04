const firstString = "apple";
const secondString = "die";
const thirdString = "pie";

console.log(firstString.length);
console.log(secondString.length);
console.log(thirdString.length);

const lenFirst = firstString.length;
const lenSecond = secondString.length;
const lenThird = thirdString.length;

if(lenFirst<lenSecond && lenFirst<lenThird){
    console.log(`${firstString} is the smallest string.`);
}else if(lenSecond<lenFirst && lenSecond<lenThird){
    console.log(`${secondString} is the smallest string.`);
}else if(lenThird<lenFirst && lenThird<lenSecond){
    console.log(`${thirdString} is the smallest string.`);
}else{
    console.log("Found more than one smallest strings.")
}