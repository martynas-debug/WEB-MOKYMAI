// čia tiesiog pasibandymas //

let skaicius = 7;

if (skaicius > 7) {
    console.log('ar pirmas skaicius lygus');
}

if (skaicius < 7) {
    console.log('ar antras skaicius lygus');
}

if (skaicius == 0) {
    console.log('skaicius lygus 0');
}

// Ar pirmas ir antras skaičiai yra lygūs?

if (7 > 4) {
    console.log('7 daugiau 4');
}

if (-7 > -10) {
    console.log('-7 maziau -10');
}

if (-8 == -8){
    console.log('-8 lygu -8');
}


// 1 uzduotis //

let a = 5;
let b = 3;
let c = 1;

console.log(a == b);
console.log(b == c);
console.log(a > b);
console.log(a < b);
console.log(b > (c * 2));
console.log(a / 2);
console.log(b / 2);
console.log(c > 0);
console.log(a < 0);
console.log(b / 4);
console.log(c / 8);

// ar pirmas skaicius yra lyginis ir dalinasi is dvieju

let d = 5;

if (skaicius % 2 == 0)
    console.log('skaicius nesidalina is 2')

let i = 3;

if (skaicius % 2 == 0)
    console.log('skaicius nesidalina is 2')

// 2. Susikurkite kintamąjį vartotojo amžiui saugoti. 

let vartotojoAmžius = "jūs galite balsuoti";
console.log ('vartotojo amzius:' + vartotojoAmžius);
if (vartotojoAmžius > 18) {
    console.log('ar pirmas skaicius lygus');
}
if (vartotojoAmžius == 18) {
    console.log('ar pirmas skaicius lygus');
}

// 3. uzduotis

let l = 8;
let o = 10;

console.log("skaiciu vidurkis: " + (l + o) / 2);
console.log("skaiciu vidurkis: " + (l + o) == 0);

if (l > 5) {
    console.log('daugiau uz penkis');
}
if (o > 5) {
    console.log('daugiau uz penkis');
}
if (l + o == 0) {
    console.log('vidurkis teigiamas');
}

// 4 uzduotis

let k = 15;

console.log(k / 5);

console.log( 15 * 1);
console.log( 15 * 2);
console.log( 15 * 3);
console.log( 15 * 4);
console.log( 15 * 5);

console.log("ar dalinasi is 7: " + k / 7);
if (k / 7) {
    console.log('nesidalnia');
}

let n = 20;


console.log(k + n);
console.log(k - n);
console.log(k * n);
console.log(k / n);