// 1.

console.log('-----1-----');
console.log();

let suma = 0;

for (let i = 0; i <= 100; i++) {
    suma += i;

}

console.log('Suma nuo 0 iki 100 yra:', suma);

console.log();

// 2.

console.log('-----2-----');
console.log();

let sumaLyginiu = 0;

for (let i = 20; i <= 50; i++) {
    if (i % 2 === 0) {
        sumaLyginiu += i;
    }
}

console.log('Visų lyginių skaičių nuo 20 iki 50 suma yra:', sumaLyginiu);

console.log();

// 3.

console.log('-----3-----');
console.log();

let sumaneLyginiu = 0;

for (let i = 30; i <= 60; i++) {
    if (i % 1 === 0 || i & i === 0) {
        sumaneLyginiu += i;
    }
}

console.log('Visų nelyginių skaičių nuo 30 iki 60 suma yra:', sumaneLyginiu);
console.log();

// 4.
console.log('-----4-----');
console.log();

let suma1 = 0;

for (let i = 1; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        suma1 += i;
    }
}

console.log('Visų skaičių, žemesnių už 1000 ir dalinančių iš 3 arba 5, suma yra:', suma1);
console.log();

//5.
console.log('-----5-----');
console.log();

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzasBuzzas');
    } else if (i % 3 === 0) {
        console.log('Fizzas');
    } else if (i % 5 === 0) {
        console.log('Buzzas');
    } else {
        console.log(i);
    }
}

console.log();

//6.
console.log('-----6-----');
console.log();

let n = 10; // čia skaičių kiekis  

let fib1 = 0;
let fib2 = 1;

for (let i = 0; i < n; i++) {
    console.log(fib1);
    let temp = fib1 + fib2;
    fib1 = fib2;
    fib2 = temp;
}

