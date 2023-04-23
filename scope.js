// var x=1;
// var x=2;
// console.log(x)
// //2

// let x=1;
// let x=2;
// console.log(x)
//caught SyntaxError: Identifier 'x' has already been declared 


// const x=1;
// const x=2;
// console.log(x)
//syntaxError: Identifier 'x' has already been declared (

//const >> let >>var

// var x=1;
// let y=2;
// const z=3;
// console.log(x,y,z);

// {
//     let y=10;
//     console.log(x,y,z)
// }
// function f(){
//     const z=9;
//     console.log(x,y,z);
// }
// f();
// console.log(x,y,z);

/*
123
1 10 3
129
123
*/

// var a=1;
// console.log('global',a)
// {
//     a=2;
//     console.log('block',a)
// }
// function f(){
//     a=3;
//     console.log('func',a)
// }
// f();
// console.log('global out',a)

/*
global 1
block 2
func 3
global out 3
*/

// var a=1;
// console.log('global',a)
// {
//     var a=2;
//     console.log('block',a)
// }
// function f(){
//     var a=3;
//     console.log('func',a)
// }
// f();
// console.log('global out',a)

/*
global 1
block 2
func 3
global out 2
*/

// var a=1;
// let b=2;
// console.log(a,b ,'global')
// function f(){
//     var a=3;
//     let b=4;
//     console.log(a,b ,'func')
//     {
//         var a=5;
//         let b=6;
//         console.log(a,b ,'block inside fun')
//     }
//     console.log(a,b ,'block outside fun inside ')
// }
// f();
// console.log(a,b ,'out global')

/*
1 2 'global'
3 4 'func'
5 6 'block inside fun'
5 4 'block outside fun inside '
1 2 'out global'

*/

// var a=1;
// let b=2;
// console.log(a,b,'1stout')
// {
//     var a=3;
//     let b=4;
//     console.log(a,b,'2nd in block')
//     function f(){
//         var a=5;
//         let b=6;
//         console.log(a,b,'3rd block->func')
//         {
//             var a=7;
//             let b=8;
//             console.log(a,b,'4th block->func->block')
//         }
//         var a=9;
//         console.log(a,b,'5th out of block-2')
       
//     }
//     console.log(a,b,'6th out of fun')
//     var a=10;
    
// }
// f();
// console.log(a,b,'last out of block end ')


 // note: if a block is inside a fun, and u declared var in the block,then it refers to its immediate parent(func scope)not global scope

/*
1 2 '1stout'
3 4 '2nd in block'
3 4 '6th out of fun'
5 6 '3rd block->func'
7 8 '4th block->func->block'
9 6 '5th out of block-2'
10 2 'last out of block end '
*/
//-----------------------------------------------------------

// var a=1;
// let b=2;
// console.log(a,b,'1stout')
// f();
// {
//     var a=3;
//     let b=4;
//     console.log(a,b,'2nd in block')
//     function f(){
//         var a=5;
//         let b=6;
//         console.log(a,b,'3rd block->func')
//         {
//             var a=7;
//             let b=8;
//             console.log(a,b,'4th block->func->block')
//         }
//         var a=9;
//         console.log(a,b,'5th out of block-2')
       
//     }
//     console.log(a,b,'6th out of fun')
//     var a=10;
    
// }
// console.log(a,b,'last out of block end ')

/*
1,2 1stout
TypeError: f is not a function ( function will call if it is in global scope..function defn.but func defined inside block scope.
    // so it couldnt locate and thrown err)
 
*/

// fetc();

// {
//     function fetc(){
//         console.log('1')
//     }
// }
//error

// var x=1;
// let y=2;

// function f(){
//     const z=5;
//     console.log(y);
//     {
//         let y=4;
//         console.log(y);
//     }
// }
// f();

/*
2
4
*/


// var a=1;
// let b=2;
// const c=3;
// console.log(a,b,c,'1st ')
// function f1(){
//     var a=4;
//     let b=5;
//     const c=6;
//     console.log(a,b,c,'inside func f1')
//     f2();
//     function f2(){
//         // console.log(a,'inside f2')
//         // var a=7;
//         // let b=8;
//         // const c=9;

//         /* here,it not having local ref.so it seek lexical parent scope*/
//         console.log(a,b,c,'before call f3')
//         f3();
//         console.log(a,b,c,'after call f3') 
//     }
//     console.log(a,b,c,'after func f2')
//     var a=10;
//     console.log(a,b,c,'gonna leave from f1')
// }
// console.log(a,b,c,'out from f1')
// function f3(){
//     /* but here,it wont go to its lexical parent.becuase,right after this console, variables are declared.
//     so it consider likenormal func*/
//     console.log(a,'inside f3,start')
//     var a=11;
//     let b=12;
//     const c=13;
//     console.log(a,b,c,'out f3 end')
// }

// f1();
// console.log(a,b,c,'after f1 call.end of pro')

/*
1 2 3 '1st '
1 2 3 'out from f1'
 4 5 6 'inside func f1'
 4 5 6 'before call f3'
 undefined 'inside f3,start'
 11 12 13 'out f3 end'
 4 5 6 'after call f3'
 4 5 6 'after func f2'
 10 5 6 'gonna leave from f1'
 1 2 3 'after f1 call.end of pro'

*/


// var a=1;
// let b=2;

// if(true){
//     let b=5;
//     console.log(b)
// }
// console.log(b)
//5,2

//----------------------------------------------------------

// var a=1;
// let b=2;
// const c=3;
// console.log('global',a,b,c);


// function f(){
//     console.log('global',a,b,c);
//     {
//         console.log('global',a,b,c);
//     }

// }
// f();
/*
global 1 2 3
scope.js:284 global 1 2 3
scope.js:286 global 1 2 3
*/

// var a=1;
// let b=2;
// const c=3;
// console.log('global',a,b,c);


// // function f(){
// //     const c=10;
// //     var a=5;
// //     console.log('global',a,b,c);
// //     {
// //         let b=7;
// //         console.log('global',a,b,c);
// //     }

// // }
// // f();

/*
global 1 2 3
global 5 2 10
global  5 7 10
*/


// var a=1;
// let b=2;
// const c=3;
// console.log('global',a,b,c);


// function f(){
//     const c=10;
//     var a=5;
//     console.log('global',a,b,c);
//     {
//         let b=7;
//         var a=8;
//         console.log('global',a,b,c);
//     }

// }
// f();

/*
global 1 2 3
global 5 2 10
global 8 7 10
*/












































