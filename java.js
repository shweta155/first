// function maggi( maggi, pani, tapeli) {
//     console.log(
//     "your maggi will be read in 2 min"
//     + maggi*2
//     + "minutes"
//     + "Ingredients are used :-"
//     + maggi + "maggie"
//     + pani + "cups water"
//     + "using " + tapeli + "pan"
//     )
//     }
//     maggi(4, 8, 1);

// let bread1 = prompt("Which bread would you like to have :- ");
// let veggies1 = prompt("which veggies would you like to have :-");
// let souce1 = prompt("which souce would yoy like to have :-")

// function sandwich( bread, veggies, souce) {
//     let sandwich = bread + " bread " + veggies + " " + souce + " souce " + " sandwich ";
//     return sandwich;
// }

// let vegsandwich = sandwich(bread1, veggies1, souce1);
// console.log(vegsandwich);


// for (let i=5; i<51; i = i + 5) {
//     console.log(i);
// }
// for(let i=0; i<10;i++){
//     if(i%2!=0)
//      console.log(i);
// }
// for(let i=0;  i<=10; i++){
//     console.log(i);
// }

// 

// let  shweta = "Vikram Kamina hai";

// console.log(shweta.length);
// console.log(shweta[0]);
// console.log( shweta.slice(0,6), shweta.slice(7,14));
// console.log( shweta.indexOf("hai"));
// console.log(shweta.toLowerCase(1));
// // console .log(shweta.toUpperCase.indexof[("kamina")]);

// const list = document.querySelector('.khadus ul');
// list.innerHTML = '';
// let bhendi = ['bhuddi', 'ganDi', 'Shakal', 'kI'];

// for(let i=0; i<bhendi.length; i++){
    
//     let bhondu = bhendi[i].toLowerCase();
//     let first = bhondu.slice(1,2);
//     bhondu= bhondu.replace(first, first.toUpperCase());
//     let listl = document.createElement('li');
//     listl.textContent = bhondu;
//     list.appendChild(listl);


// }


// const list = document.querySelector ('.khadus ul');
// list.innerHTML = '';
// let bhondu = ['bhen gandi shakakl ki he.',
// 'meri bhen bhot pgl he',
// 'bhen bbhoot smjhadar hai', 
// ' bhai bhoot gandi shakal ka hai'
// ];
// for (let i= 0; i<bhondu.length; i++)
// if(bhondu[i].indexOf("bhen") !==-1){
//    let listItem = document.createElement('li');
//    listItem.textContent = bhondu[i];
// list.appendChild(listItem);
//
// 

// let lecture = 3;
// let consta = 4;
// let bhondu = "tu pgl he";

// const shweta = {
//     lecture : 3,
//     consta : 4,
//     bhondu : "tu pgl he",
//     notes: {
//         introduction : "erhvifvrfc"

//     },

//     enroll() {
//         console.log("or tu meri bhen bhi he");
//     }
// }

// shweta.enroll()
// console.log(shweta)

// const kutta= new Array (1,2,3,4,5,6,7,8,9);
// {

// console.log(kutta.push(5, 1, 2, 2, 2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,))
// }


// const array =  ['meri', 'bhen', 'pagal', 'hr', ',']
// const arrayy = ['or', 'me', 'uska', 'bhai', 'bhot', 'acha', 'hu', '.']

// console.log (array.concat(arrayy));

// let arrayyy=array.join('*');

// console.log(arrayyy.split('*'));

const bhen = [
    {
    names : 'vi',
    heigth:'120',

},
{
    names : 'i',
    heigth:'100',
},
{
    names : 'k',
    heigth:'920',

},
{
    names : 'r',
    heigth:'180',

},
{
    names : 'a',
    heigth:'220',

},

{
    names: 'm',
    heigth:'120',
},
]

// const namee = bhen.map(ch => ch.names);
// console.log(namee)
// let splitt = (namee.join( ' '));

// console.log (splitt.split(','))
// // console.log(splitt.split(''))


// const bhenHeigth = bhen.map(chh =>chh.heigth, chh =>chh.heigth);
// console.log(bhenHeigth);

const bhenHeigth = bhen.reduce((previous,bhen)=>{
    return previous * Number(bhen.heigth);
},0);
console.log(bhenHeigth);