//no input no output function type1
let a = 10;
let b = 20;

function add(){
    let c;
    c= a+b;
    console.log(c);
}
add();

//input but no output function type 2
let x= 10;
let y=20;

function add1(){
    let z;
    z=x+y;
    return z;
}
let res = add1();
console.log(res);

//function type 3
function add2(x,y){
    let z;
    z=x+y;
    console.log(z);
}
let p=10;
let q=10;
add2(p,q);

//function type 4 input and output
function add3(x,y){
    let z;
    z=x+y;
    return z;
}
let m=10;
let n=20;
let result = add3(m,n);
console.log(result);

