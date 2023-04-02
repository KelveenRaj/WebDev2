//Challenge 1

// const a = /ca/;
const b = new RegExp("cat");
console.log(b.test("this is a cat"))

//chanllenge 2

const regex = /foo/g;
const str = "fooexamplefoo";
const str1 = str.replace(regex,"");
console.log(str1);

//Challenge 3 

// const a = /Cat/i;
// console.log(a.test("this is cat"))

const regex1 = /foo/i;
const str2 = "FooexampleFoo"
const str3 = str.replace(regex,"");
console.log(str3)