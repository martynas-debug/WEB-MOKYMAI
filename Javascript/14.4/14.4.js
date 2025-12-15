// 1.
console.log('---1---');
console.log(''); 

let įmonė = [
    { pavadinimas: 'UAB MOTORS', darbuotojųSkaičius: 789, bendrasPelnas: 31, },
    { pavadinimas: 'MARTIN INDUSTRIES', darbuotojųSkaičius: 13, bendrasPelnas: 789, },
    { pavadinimas: 'CRAFT MAGNAT', darbuotojųSkaičius: 2, bendrasPelnas: 9999, },
];

let bendras_darbuotoju_skaicius = 0;

console.log('Visi darbuotojai:');

for (let i = 0; i < įmonė.length; i++) {
    bendras_darbuotoju_skaicius += įmonė[i].darbuotojųSkaičius;
}

console.log(bendras_darbuotoju_skaicius);

let bendras_pelnas = 0;
for (let i = 0; i < įmonė.length; i++) {
    bendras_pelnas += įmonė[i].bendrasPelnas;
}

console.log('Bendras pelnas:', bendras_pelnas);

console.log(''); 

//2.
console.log('---2---');
console.log(''); 

let ligoniai = [
    { pavadinimas: 'UAB KLINIKOS', ligoniųSkaičius: 4289, bendraslankytojųkiekis: 331, },
    { pavadinimas: 'NEMUNO KLINIKOS', ligoniųSkaičius: 77, bendraslankytojųkiekis: 12, },
    { pavadinimas: 'CENTRINE UNIVERSALINE', ligoniųSkaičius: 988, bendraslankytojųkiekis: 654, },
];

let bendras_ligonių_kiekis = 0;
let bendras_lankytojų_kiekis = 0;

for (let i = 0; i < ligoniai.length; i++) {
    bendras_ligonių_kiekis += ligoniai[i].ligoniųSkaičius;
    bendras_lankytojų_kiekis += ligoniai[i].bendraslankytojųkiekis;
}

console.log('Bendras ligonių kiekis:', bendras_ligonių_kiekis);
console.log('Bendras lankytojų kiekis:', bendras_lankytojų_kiekis);

console.log(''); 