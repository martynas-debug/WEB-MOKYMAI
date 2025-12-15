// 1.
console.log('---1---');
console.log('');

let studijųProgramos = ['biologija', 'multimedia', 'medicina', 'politika', 'raketu mokslas'];

console.log(studijųProgramos[0]);
console.log(studijųProgramos[1]);
console.log(studijųProgramos[2]);
console.log(studijųProgramos[3]);
console.log(studijųProgramos[4]);
console.log();

//2.

console.log('---2---');
console.log('');

let šalys = ['Rumunija', 'Švedija', 'Ispanija', 'Vengrija', 'Italija'];

for (let i = 0; i < šalys.length; i++) {
    console.log('šalis:', šalys[i]);
}
console.log('');

//3.

console.log('---3---');
console.log('');

let projektai = ['Verslo vadyba', 'Telekomo transliacijos', 'Mokesciu lengvatos', 'Daugiabuciu renovacija'];

for (let i = 0; i < projektai.length; i++) {
    console.log((i + 1) + '-as projektas yra yra' + projektai[i]);
}
console.log('');


//4.
console.log('---4---');
console.log('');


let skaiciai1 = [3, 6, 8, 1];

for (let i = 0; i < skaiciai1.length; i++) {
    if (skaiciai1[i] > 5) {
        console.log(skaiciai1[i]);
    }
}


//5.
console.log('---5---');
console.log('');

let skaiciai = [88, 57, 33, 29];

let suma = 0;
for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] % 4 == 0) {
        suma += skaiciai[i];
    }
}
console.log('skaiciu kurie dalinasi is 4 suma', suma);

