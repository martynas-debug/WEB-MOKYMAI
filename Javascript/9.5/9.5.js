//1.
console.log('---1---');
console.log('');

let skaicius = 99;
let skaicius1 = 11;
let skaicius2 = 33;

if (skaicius >= 0 && skaicius1 >= 0 && skaicius2 >= 0) {
    console.log('skaicius yra didiziausias uz visus:' + skaicius);
} else if (skaicius1 >= 0 && skaicius2 >= 0 && skaicius >= 0) {
    console.log('skaicius1 yra maziausias uz visus: ' + skaicius1);
} else if (skaicius2 >= 0 && skaicius1 >= 0 && skaicius >= 0) {
    console.log('skaicius2 yra mazdaug per viduri, todel jis ne didizuaisas: ' + skaicius2);
}
console.log('');

//2.
console.log('---2---');
console.log('');

let skaicius3 = 78;
let skaicius4 = 12;
let skaicius5 = 33;

if (skaicius3 >= skaicius4 && skaicius5 >= skaicius3) {
    console.log('skaicius3 yra didiziausias, todel jis netikna: ' + skaicius3);
} else if (skaicius4 >= skaicius5 && skaicius3 >= skaicius4) {
    console.log('skaicius4 yra maziausias: ' + skaicius4);
} else if (skaicius5 >= skaicius4 && skaicius3 >= skaicius4) {
    console.log('skaicius5 per viduri todel jis ne maziausias: ' + skaicius5);
}
let maiziausias = Math.min(skaicius3, skaicius4, skaicius5);
console.log('Mažiausias skaičius: ' + maiziausias);
console.log('');

//3.
console.log('---3---');
console.log('');

let rezultatas = 8;
let rezultatas1 = 6;
let rezultatas2 = 5;

let vidurkis = (rezultatas + rezultatas1 + rezultatas2) / 3;
console.log('Rezultatų vidurkis: ' + vidurkis);

if (vidurkis > 8,10) {
    console.log('vidurkis nera [8-10]');
} else if (vidurkis > 5,8) {
    console.log('vidurkis yra [5-8]');
} else if (vidurkis > 5) {
    console.log('vidurkis nera [0-5]');
}


//4.
console.log('---4---');
console.log('');
