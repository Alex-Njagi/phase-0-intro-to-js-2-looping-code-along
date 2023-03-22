// Code your solutions in this file
// const gifts = [`Guadalupe`, `Ollie`, `Aki`]
function writeCards(gifts) {
    const thankYouMessages = [];

    for (let index=0; index<gifts.length; index++){
        thankYouMessages.push(`Thank you, ${gifts[index]}, for the wonderful surprise gift!`)
        // console.log(`Thank you, ${gifts[index]}, for the wonderful surprise gift!`)
    }
    thankYouMessages
    return thankYouMessages
    // return gifts;
}
writeCards([`Guadalupe`, `Ollie`, `Aki`]);

let count = 10;

function countDown(count){
while (count>=0 && count<=10) {
    //count= count-1;
    console.log(count--);
}}
countDown(count)