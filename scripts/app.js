// let aSon = prompt("Biron bir son kiriting");

// if (aSon % 15 == 0) {
//   alert("fizzbuzz");
// } else if (aSon % 3 == 0) {
//   alert("fizz");
// } else if (aSon % 5 == 0) {
//   alert("buzz");
// } else {
//     alert("3 gaham 5 ga ham qoldiqsiz bo'linmaydi")
// }






// ------------------------------------------------------------  // 2





// const points = [40, 100, 1];
// points.sort(function (a, b) {
//   return a - b;
// });

// console.log(points);





// ------------------------------------------------------------  // 3






// let random = Math.floor(Math.random() * 10) + 1;
// console.log(random);

// for (let i = 0; i < 5; i++) {
//     let number = prompt("enter");
//     if (number == random) {
//         alert("yutdingiz");
//         break;
//     } else if (number > random) {
//         alert("kichikroq son kiriting");
//     } else {
//         alert("kattaroq son kiriting");
//     }
// }






// ------------------------------------------------------------  // 4







// let info = {
//     name: "Sodiq",
//     age: 20,
//     adddress: "Toshkent",
//     surname: "Qosimov",
// };

// let array = [];

// for (let i in info) {
//     array.push([i, info[i]]);
// }

// console.log(array);








// ------------------------------------------------------------  // 5







// let data = [
//   {
//     kurs_nomi: "HTML",
//     kurs_davomiyligi: 25,
//     kurs_narxi: 300000,
//   },
//   {
//     kurs_nomi: "CSS",
//     kurs_davomiyligi: 55,
//     kurs_narxi: 400000,
//   },
//   {
//     kurs_nomi: "JS",
//     kurs_davomiyligi: 70,
//     kurs_narxi: 500000,
//   },
//   {
//     kurs_nomi: "React",
//     kurs_davomiyligi: 40,
//     kurs_narxi: 500000,
//   },
// ];


// for (let i in data) {
//     let a = data[0].kurs_davomiyligi,
//         b = data[1].kurs_davomiyligi,
//         c = data[2].kurs_davomiyligi,
//         d = data[3].kurs_davomiyligi;
//     let jami = a + b + c + d;
    
//     if (jami == 190) {
//         jami = 180;
//     }
    

//     let aa = data[0].kurs_narxi,
//         bb = data[1].kurs_narxi,
//         cc = data[2].kurs_narxi,
//         dd = data[3].kurs_narxi;
//     let jamiNarx = aa + bb + cc + dd;

//     console.log(`Jami kirs davomiyligi ${jami / 30} oy ${190 % 30} kun narxi ${jamiNarx} ming so'm`);

// }







// ------------------------------------------------------------  // 6







// let set = [3, 1, 5, -4, 67, -3, -6, 1, 9, -7, 3, 5, -6];

// for (let i = 0; i < set.length; i++) {
//     const element = set[i] * 1;
//     console.log(element);
    
// }










// ------------------------------------------------------------  // 7








// let newArray = [];

// let array = [
//   "button",
//   "portobello",
//   "shiitake",
//   "oyster",
//   "cremini",
//   "enoki",
//   "maitake",
//   "morel",
//   "truffle",
//   "chanterelle",
//   "porcini",
//   "lobster",
//   "black trumpet",
//   "coral",
// ];

// for (let i = 0; i < array.length; i++) {
//   newArray.push([array[i], i]);
// }
// console.log(newArray);








// ------------------------------------------------------------  // 8









// let info = [
//   {
//     id: 1,
//     name: "John",
//     age: 30,
//     email: "john@gmail.com",
//   },
//   {
//     id: 2,
//     name: "Mary",
//     age: 25,
//     email: "mary@yahoo.com",
//   },
//   {
//     id: 3,
//     name: "David",
//     age: 40,
//     email: "david@hotmail.com",
//   },
//   {
//     id: 4,
//     name: "Sarah",
//     age: 28,
//     email: "sarah@gmail.com",
//   },
//   {
//     id: 5,
//     name: "Michael",
//     age: 35,
//     email: "michael@gmail.com",
//   },
//   {
//     id: 6,
//     name: "Julia",
//     age: 32,
//     email: "julia@yahoo.com",
//   },
//   {
//     id: 7,
//     name: "Adam",
//     age: 23,
//     email: "adam@hotmail.com",
//   },
//   {
//     id: 8,
//     name: "Emma",
//     age: 27,
//     email: "emma@gmail.com",
//   },
//   {
//     id: 9,
//     name: "Ryan Jonsan",
//     age: 45,
//     email: "ryan@yahoo.com",
//   },
// ];

// info.forEach((i) => {
//   if (i.name.length > 8) {
//     console.log(i.age);
//   }
// });



