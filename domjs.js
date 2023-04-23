const view1 = document.getElementById('view1')
console.log(view1);

// we can give others too thru queryselector

const firstdiv = document.querySelector('div');
console.log(firstdiv);

const alldivs = document.querySelectorAll('div');
console.log(alldivs);

const view2 = document.querySelector('#view2');
console.log(view2);

view1.style.display = "flex";
//view1.style.display = "none";
view2.style.display = "flex"


const views = document.getElementsByClassName("view"); //return htmlcollection
console.log(views,'getElementsByClassName');

const viewsbyqueryall = document.querySelectorAll(".view"); //return nodelist
console.log(viewsbyqueryall,'queryselectorall')

//extracting divs of view1 id;

const divs = view1.querySelectorAll('div');
console.log(divs,'child divs by querySelectorAll')

const samedivs = view1.getElementsByTagName('div');
console.log(samedivs,'child divs by getElementsByTagName')

const evendivs = view1.querySelectorAll('div:nth-of-type(2n)');
console.log('evendivs',evendivs);

// looping child divs

// for(let i=0;i,evendivs.length;i++){
//     evendivs[i].style.backgroundColor = "blue"
// }

//nothing works! this physcial parent to child tree or multiple selectors.we cant extract by these methods
document.getElementsByClassName('.view1 .view2');
document.getElementById('view1 id3')
document.getElementsByTagName('nav h1') 

//we can use queryselector for that.for parent to child tree only not for sibling mlti:
const id3 = document.querySelector('#view1 #id3')
const navtext = document.querySelector('nav h1');
console.log(navtext)

//using textcontent and innerhtml:
const navtext2 = document.querySelector('nav h1');
navtext2.textContent = "Hey all:)"

// const t= navtext2.innerHTML = `
// <h1>Helooo</h1>
// <p>baby</p>
// `
// console.log(navtext2)   op: <h1> <h1>Helooo</h1> <p>baby</p>   </h1>;

const nav = document.getElementsByTagName('nav'); // [always return array]
console.log(nav[0].innerHTML);
nav[0].innerHTML = `
<h1>Heloooooooooo</h1>
<p>babs</p>
`
console.log(nav)