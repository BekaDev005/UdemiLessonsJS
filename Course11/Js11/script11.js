"use sctrict"

const arr = [1, 2, 3] ;

arr[10] = '3456'; 
console.log(arr[10])


const arrObj = {
   a: 'a', 
   '1': 'b', 
   2: 'c', 
   abc: {
      df: [{}, {}], 
      def: {

      }
   }
} ;

const b = 'b';

// arrObj.b = '1234'; 
arrObj[b] = '1234'; 

console.log(arrObj['b'])
console.log(arrObj.b)


// console.log(arr[1])
// console.log(arrObj[0])
// const obj = {a:1, b:2, c:3} ;

const obj = {
   'Anna': 500, 
   'Alice': 800 
} ;




// Home Work 

const storeName = 'BekaStore'; 
const storeDescription= {
   budget : 10000, 
   employees: ['Beka', 'Isa', 'Muha'],
   products: {
      Iphone18: 1300, 
      Samsung26: 1000 
   },
   open: true
}; 