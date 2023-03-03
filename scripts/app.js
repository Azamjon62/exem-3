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






// ------------------------------------------------------------  //





// const points = [40, 100, 1];
// points.sort(function (a, b) {
//   return a - b;
// });

// console.log(points);





// ------------------------------------------------------------  //






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






// ------------------------------------------------------------  //







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








// ------------------------------------------------------------  //







let data = [
  {
    kurs_nomi: "HTML",
    kurs_davomiyligi: 25,
    kurs_narxi: 300000,
  },
  {
    kurs_nomi: "CSS",
    kurs_davomiyligi: 55,
    kurs_narxi: 400000,
  },
  {
    kurs_nomi: "JS",
    kurs_davomiyligi: 70,
    kurs_narxi: 500000,
  },
  {
    kurs_nomi: "React",
    kurs_davomiyligi: 40,
    kurs_narxi: 500000,
  },
];


for (let i in data) {
    let a = data[0].kurs_davomiyligi;
    let b = data[1].kurs_davomiyligi;
    let c = data[2].kurs_davomiyligi;
    let d = data[3].kurs_davomiyligi;
    let jami = a + b + c + d;

    let aa = data[0].kurs_narxi;
    let bb = data[1].kurs_narxi;
    let cc = data[2].kurs_narxi;
    let dd = data[3].kurs_narxi;
    let jamiNarx = aa + bb + cc + dd;

    console.log(`Jami kirs davomiyligi ${jami} kun narxi ${jamiNarx} ming so'm`);

}







