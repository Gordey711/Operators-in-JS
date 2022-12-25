"use strict";

console.log('arr' + ' - object');
console.log(4 + '5');

let incr = 10,
    decr = 10;

// ++incr;  // Оператор инкримента, т.е увеличение на единицу. Префиксная форма записи
// --decr;  // Оператор деинкримента, т.е уменьшение на единицу. Префиксная форма записи
incr++;  // Оператор инкримента, т.е увеличение на единицу. Постфиксная форма записи
decr--;  // Оператор деинкримента, т.е уменьшение на единицу. Постфиксная форма записи

// console.log(incr++); // При постфиксной форме записи, 
                        // сразу беря результат работы оператора, 
                        // в таком случаи постфиксная форма сначала возвращает станое значение, 
                        // т.е 10, только поелсе этого наша переменная incr будет равна 11
// console.log(decr--); // При постфиксной форме записи, 
                        // сразу беря результат работы оператора, 
                        // в таком случаи постфиксная форма сначала возвращает станое значение, 
                        // т.е 10, только поелсе этого наша переменная incr будет равна 11
// console.log(++incr); // При такой записи работает, как нужно.
// console.log(--decr); // При такой записи работает, как нужно.
console.log(incr);
console.log(decr);

console.log(5%2);

console.log(2 + 2 * 2 !== 6);


const isChecked = false,
      isClose = false;

console.log(isChecked || !isClose);