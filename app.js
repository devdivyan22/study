/*
 
 // IF STATEMENT

console.log(1234);
console.log("before my if statement");
let age = 28;
if (age >=18) {
    console.log("you can vote");
    console.log("you can drive");
    let a =5;
    console.log(5*a);

}
console.log("after my if statement");
if (age>20) {
    console.log("you are in your 20s");
}


let firstname = "dev";
if(firstname =="dev") {
    console.log(`welcome ${firstname}`)
}
*/


/*
//Traffic Light System
let color ="yellow";
if(color === "red") {
    console.log("Stop! light color is red");

}
if(color ==="yellow") {
    console.log("Slow down. light color is yelow");
}
if(color ==="green") {
    console.log("Go go. light color is green");
}
*/





/*
// nested if else statement

let age =14;
if (age>=18) {
    console.log("you can vote");
} else if (age>=18) {
    console.log("you can vote");
} else if (age<18) {
    console.log("you can not vote");
}


let marks = 75;

if(marks>=80) {
    console.log ("A+");
} else if (marks>=70) {
    console.log ("B");
} else if (marks>=60) {
    console.log ("C");
} else if (marks<60) {
    console.log("F");
}
*/




/*
// else statement

let age =16
if(age>=18){
    console.log("you can vote");
} else {
    console.log("you can not vote");
}
*/


/*
// practice

let size = "L"
if(size=="XL") {
    console.log("250");
} else if(size=="L") {
    console.log("200");
} else if (size=="M") {
    console.log("100");
} else if (size=="S") {
    console.log("50");
}
*/



/*
// NESTED IF-ELSE

let marks = 85;
 if(marks >= 33) {
    console.log("Pass");
    if(marks >= 80) {
        console.log("Grade : O");
    } else {
        console.log("Grade : A");
    }

 } else {
    console.log("Better luck next time!");
 }
    */


/*
 // logical operators

 let marks = 90;

 if (marks >= 33 && marks >=80) {
    console.log ("Pass");
    console.log("A++");
 }
*/




/*
//Practice ques

let str = "ample";

if(str[0] === "a" && str.length > 3) {
    console.log(" good string");
} else {
    console.log("not a good string");
}




// Switch Statement

let color ="green";

switch(color) {
    case "red" :
        console.log("stop");
        break;
    case "yellow" :
        console.log("slow down");
        break;
    case "green" :
        console.log("go go");
        break;
    default :
    console.log("Broken Light");
}




//Practice Qs

let day =1;

switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("wrong day");
}
*/


/*
alert("somethig is wrong");
*/
/*
let roll = prompt("enter your roll no :");
console.log(roll);
*/


// trim- vo jo space hatata hai aaje piche se
//let msg = "     he  llo     ";


/* 
let password = prompt("set your password");
let newPass = password.trim();
console.log(password);
*/


/*
// Slice

let msg = "ilovecoding";
console.log(msg.slice(-2));
*/

/*
// Replace

let msg = "ilovecoding";
console.log(msg.replace("love","xxx"));
*/


// Practice
/*
let msg ="help!";
console.log(msg.trim().toUpperCase());
*/

/*
let name = "ApnaCollege";
console.log(name.slice(4,9))
console.log(name.indexOf("na"))
console.log(name.replace("Apna","Our"))

console.log(name.slice(4).replace("l","t"))
*/




//Practice Array Slice
/*
let months = ["january","july","march","august"];
console.log (months.splice(0,2,"july","june"));

let lang = ["c","c++","html","js","python","java","c#"];
console.log(lang.push("sql"));
console.log(lang.reverse());
console.log(lang.reverse());
console.log(lang.reverse().indexOf("js"));
*/





// Practice Ques TIKTAC

/*
let game = [['X',null,'O'],[null,'X',null],['O',null,'X']]
console.log(game[0]);
console.log(game[0][1]);
console.log(game[0][1] = 'O');
console.log(game);
*/


// Loops table webpage
/*
let n = prompt("write your no.");
n=parseInt(n);

for(let i=n; i<=n*10; i=i+n) {
    console.log(i);
}
*/




// Nested loop
/*
for(let i=1; i<=3; i++) {
    console.log(`outer loop ${i}`);
    for(let j=1; j<=3; j++) {
        console.log(j);
    }
}
*/






// Favorite movie

/*
const favMovie = "avatar";

let guess = prompt("guess my favorite movie");

while( (guess != favMovie)) {
    if(guess == "quit") {
        console.log("you quit");
        break;
    }
   guess = prompt(" wrong guess. please try again");
}

if(guess == favMovie) {
    console.log("congrats!!");
}
*/

/*
/// TODO app

let todo = [];

let req =  prompt("please enter your request");

while(true) {
    if(req=="quit") {
        console.log("quitting app");
        break;
    }

    if(req == "list") {
        console.log("----------------");
        for(let i=0; i<todo.length; i++) {
            console.log(i, todo[i]);

        }
        console.log("-----------------");

    }else if(req == "add") {
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    } else if(req == "delete") {
        let idx = prompt("please enter the task index");
        todo.splice(idx, 1);
        console.log("task deleted");

    }else {
        console.log("wrong request");
    }

    req =  prompt("please enter your request");
}
*/



// THREAD / TWITTER POST


// const post = {
//     username: "@dev.divyan",
//     content: "This is my #firstPost",
//     likes: 490,
//     reposts: 5,
//     tags: ["@dev", "@divyan"]

// };



// const obj = {
//     1 : "a",
//     2 : "b",
//     true : "c",
//     null : "d",
//     undefined : "e"
// };



// ADD / UPDATE VALUE

// const student = {
//     name: "Dev",
//     age: 23,
//     marks:94 ,
//     city: "delhi"
// };



// GUESSING GAME - user enter a max no. & then tries to GUESS A RANDOM GENERATED NO. b/w 1 to max.
/*
const max = prompt("enter the max no.");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("guess the no.");

while(true) {
    if(guess == "quit") {
        console.log("user quit");
        break;

    }

    if(guess == random) {
        console.log("you are right ! congrats!! random no. was", random);
        break;

    } else if(guess < random) {
        guess = prompt("your guess was too small. please try again")
    }else {
        guess = prompt("your guess was too large. please try again")
    
    }
    
    //else {
    //     guess = prompt(" your guess was wrong. please try again");
    // }
}
*/




// LEXICAL SCOPE 

// function outerFunc() {
//     let x = 5;
//     let y = 6;
//     function innerFunc() {
//         console.log(x);
//         console.log(y);
//     }

//     innerFunc();
// }




// PRACTICE QUES


// let greet = "hello"; // global scope

// function changeGreet() {
//     let greet = "namaste"; // function scope
//     console.log(greet);
//     function innerGreet() {
//         console.log(greet);  // lexical scope
//     }

//     innerGreet();
// }


// console.log(greet);
// changeGreet();




// HIGHER ORDER FUNCTION - takes one or more multiple function as arguments


// function multipleGreet(func, n) {
//     for(let i=1; i<=n; i++) {
//         func();

//     }
// }

// let greet = function() {
//     console.log("hello");
// }

// multipleGreet(greet, 2);



// HIGHER ORDER FUNCTION - returns a function

// function oddEvenTest(request) {
//     if(request == "odd") {
//         return function(n) {
//             console.log();(!(n%2 == 0));
            
//         }
//     }else if(request == "even") {
//         return function(n) {    
//             console.log(n%2 == 0);
//         }
//     }else {
//         console.log("wrong request");
//     }
// }




// METHODS - action that can be preformed on an object

// const calculator = {
//     num: 55,
//     add: function(a,b) {
//     return a+b;
// }, 
// sub: function(a,b) {
//     return a-b;
// },
// mul: function(a,b) {
//     return a*b;
// }

// };




// THIS keyword

// const student = {
//     name: "dev",
//     age: 20,
//     eng: 76,
//     phy: 24,
//     math: 98,
//     getAvg() {
//         console.log()
//             let avg = (this.eng + this.phy + this.math) / 3;
//             console.log(`${this.name} got avg marks = ${avg}`);
        
//     }
// }


// function getAvg() {
//     console.log(this);
// }



// SET TIMEOUT

// console.log(" Hi there");

// setTimeout( () => {
//     console.log("Divyanshu")
// }, 4000);

// console.log("Welcome to");






// THIS WITH ARROW FUNCTION


// const student = {
//     name:"dev",
//     marks: 95,
//     prop:this,  // global scope
//     getName: function() {
//         console.log(this);
//         return this.name;

//     },
//     getMarks: () => {
//         console.log(this); // parent`s scope -> window
//         return this.marks;
//     },

// };

// const a = 5;  //global scope




//PRACTICE QUES - write an arrow function that returns the square os a no. 'n'.


// const square = (n) => n*n;

// console.log(square(4));



// PRACTICE QUES - write a function thet prints " Hello World" 5 times at intervals of 2s each.


// setInterval(()=>{
//     console.log("Hello World");
// }, 2000);

// setTimeout(()=>{
//     clearInterval(id);
//     console.log("clear interval ran");

// }, 10000);



// FOR EACH

// let arr = [1,2,3,4,5];

// let print = function(el) {
//     console.log(el);

// };

// arr.forEach(print);


// let arr = [
//      {
//     name:"dev",
//     marks: 98,

//      },
//    {
//     name: "arshu",
//     marks: 99,
// },
// {
//     name: "devika",
//     marks: 95,
// },
// ];

// arr.forEach((student) => {
//     console.log(student);
    
// });


// MAP 




// let students = [
//      {
//     name:"dev",
//     marks: 98,

//      },
//    {
//     name: "arshu",
//     marks: 99,
// },
// {
//     name: "devika",
//     marks: 95,
// },
// ];




// let gpa = students.map((el) => {
//     return el.marks / 10;
// });



// let num = [1,2,3,4];
// let double = num.map((el) => {
//     return el*2;
// });


// FILTER


// let nums = [1,2,3,4,5,6,7,8,9,];
// let ans = nums.filter((el) => {
//   //  return el%2==0;  // even -> true , 
//    //  return el%2!=0;  //odd -> false
//     return el<5;   // element less than 5

// });




// REDUCE

// let nums = [1,2,3,4];
// let finalVal = nums.reduce((res,el) =>{

//     console.log(res);
//     return res + el;
// } );
// console.log(finalVal);







// REDUCE - finding  maximum in an array





// let arr = [1,3,6,9,4,2,7,5,7,9];
 
// let max = -1;

// for(let i=0; i<arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }

// console.log(max);




// WITH REDUCE FUNCTION

// let arr = [1,3,6,9,4,2,7,5,7,9]; 
// let max = arr.reduce((max,el) => {
//     if(max < el) {
//         return el;
//     } else {
//         return max;
//     }
// });

// console.log(max);










// PRACTICE QUES - CHECK IF ALL NO. IN OUR ARRAY ARE MULTIPLE OF 10 OR NOT??

// let nums = [ 10,20,30,40];

// let ans = nums.every((el) => el % 10 ==0);

// console.log(ans);



// PRACTICE QUES -  CREATE A FUNCTION TO FIND THE MIN NO. IN AN ARRAY





// let nums = [ 10,20,30,40];

// let min = nums.reduce((min,el) => {
//     if (min < el) {
//         return min;
//     } else {
//         return el;
//     }
// });


// console.log(min);










// SAME QUES WITH FUNCTION

// function getMin(nums)  {
//     let min = nums.reduce((min,el) => {
//     if (min < el) {
//         return min;
//     } else {
//         return el;
//     }
// });

// return min;

// }

// let nums = [ 10,20,30,40];











// NOT REST

// function sum(...args)  {
//     // argument
//     for (let i=0; i < args.length; i++) {
//         console.log(" you gave us:", args[i]);
//     }
// }

// function min(a,b,c,d) {
//     console.log(arguments);
//     console.log(arguments.length);
//     arguments.push(1);
// }





// REST 





// function sum(...args)  {
//     return args.reduce((sum, el) => sum + el);
// }


// function min(...args)  {
//     return args.reduce((min, el) => {
//         if(min > el) {
//             return el;
//         } else {
//             return min;

//         }
//     })
// }










// DESTRUCTURING 



// let names = ["dev","arshu"."devika"];
// let winner = names[0];
// let runnerup = names[1];
// let secondRunnerup = names[2];
    



// USING DESTRUCTURING



// let names = ["dev","arshu","devika"];
// let [winner, runnerup, secondRunnerup] = names






// DESTRUCTURING IN OBJECTS


// const student = {
//     name: "dev",
//     age: 67,
//     class: 12,
//     username: "dev@12334567",
//     passward: " sdfghjkl"

// };


// let {username: user, passward: secret} = student;



const student = {
    name: "dev",
    age: 67,
    class: 12,
    username: "dev@12334567",
    passward: " sdfghjkl"

};


let {username: user, passward: secret} = student;


