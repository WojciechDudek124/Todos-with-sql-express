//****FUNKCJA FOREACH****
//
// const numbers = [1,2,3];
//
// numbers.forEach((numbers,i, array) => {
//     array[i] = numbers+2;
// });
//
// console.log(numbers);


// ****FUNKCJA MAP****
//
// const numbers = [1,2,3];
//
// const newNumbers = numbers.map(number => {
//     if (number > 1){
//         return 0;
//     }else {
//         return number;
//     }
// });
//
// console.log(newNumbers);
// console.log(numbers);

// ****FUNKCJA FILTER****
//
// const numbers = [1,2,3,4,5,6];
//
// const newNumbers = numbers.filter(number => number % 2 === 0);
//
// console.log(newNumbers);

// **** POŁACZENIE CALOSCI****
//
// const numbers = [1,2,3,4,5,6];
//
// const onlyEven = number => !(number % 2);
// const multiplyBy2 = number => number *2;
// const show = number => console.log(number);
//
// numbers
//     .filter(onlyEven)
//     .map(multiplyBy2)
//     .forEach(show);

const grades = [3,4,5,6,3,4,2,5,6];

let sum=0;

grades.forEach(function (grade){
   sum  += grade;
});

const avg = sum/grades.length;

console.log(avg);


const newGrades = grades.filter (grade => grade >= 4);

console.log(newGrades);
