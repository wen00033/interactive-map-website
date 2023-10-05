let arr = [53, 12, 87, 34, 65, 29, 41, 58, 76, 93];
const content = document.querySelector(".content");
const a = arr.forEach((el) => el + 1);
const b = arr.map((el) => el + 1);
console.log(b);
// -------------------------------------------
const newArr = arr.map((el) => el * 2);
const findArr = arr.find((el) => el > 30);
const filterArr = arr.filter((el) => el > 50);
const reduceArr = arr.reduce((cur, acc) => acc + cur);
// ------------------------------------------

content.innerHTML = `
<h2>This is our array</h2>
<p>${arr}</p>
<h2>This is new array</h2>
<p>${newArr}</p>
<h2>This is find array</h2>
<p>${findArr}</p>
<h2>This is filter array</h2>
<p>${filterArr}</p>
<h2>This is filter array</h2>
<p>${reduceArr}</p>
`;

console.log(content.innerHTML);

// const newContent = arr.map(el);
// ---------------------------------
