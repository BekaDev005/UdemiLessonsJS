

// const hamburger = true; 
// const fries = false; 

// if(hamburger&&fries) {
//    console.log('Ya syt'); 
// }

// console.log(hamburger && fries);


// const hamburger = 3; 
// const fries = 3; 
// const cola = 0;
// const nuggets = 2

// if(hamburger ===3 && cola ===2 || fries ===3 && nuggets) {
//    console.log('Vse syt'); 
// } else {
//    console.log("My uxodim"); 
// }

// let jognReport, alexReport, samReport, mariaReport = 'done';

// console.log(jognReport || alexReport ||samReport || mariaReport);


// console.log(NaN || 2 || undefined);
// console.log(NaN && 2 && undefined);
// console.log(1 && 2 && 3);
// console.log(!1 && 2 && !3);
// console.log(25 || null && !3);
// console.log(NaN || null || !3 || undefined || 5);
// console.log(NaN || null && !3 && undefined || 5);
// console.log(5 ===5 && 3 > 1 || 5);


// 21 Циклы 
"use strict"; 

// let  num = 50; 

// while(num <= 55 ){
//    console.log(num);
//    num++;
// }


// do {
//    console.log(num);
//    num++;
// }
// while(num <= 55 );


// let  num = 50;
// for (let i = 1; i <8; i++) {
//    console.log(num)
//    num++;
// }


for (let i = 1; i < 10; i++) {
   if(i ===6) {
      // break
      continue
   }
   console.log(i)
}