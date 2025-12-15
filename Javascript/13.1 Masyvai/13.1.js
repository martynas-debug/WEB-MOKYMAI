// 1.
console.log('----1----');
console.log();

let objektai = [33, 78, 22, 99, 56];

console.log('masyvas:', objektai);
console.log('pirmas objektas is masyvo:', objektai[0]);
console.log('paskutinis obketas is masyvo:', objektai[4]);
console.log('pasirinktas objektas is masyvo:', objektai[1]);
console.log('pasirinktas objektas is masyvo:', objektai[2]);
console.log('objektu masyve kiekis:', objektai.length);

console.log('-----');

// 4.
console.log('----4----');
console.log();

let randomArray = [];

for (let i = 0; i < 5; i++) {
    randomArray.push(Math.floor(Math.random() * 100));
}

console.log('masyvas:', randomArray);
console.log('pirmas elementas:', randomArray[0]);
console.log('paskutinis elementas:', randomArray[randomArray.length - 1]);
console.log('elementu kiekis:', randomArray.length);

console.log();

//5.
console.log('----5----');
console.log();

let pazymiai = [];

console.log(pazymiai);

pazymiai.push(10, 9, 7, 8);
pazymiai.push(9, 6, 5, 7);

let suma1 = pazymiai[0] + pazymiai[1] + pazymiai[2];
let vidurkis1 = suma1 / 3;

let suma2 = pazymiai[3] + pazymiai[4] + pazymiai[5];
let vidurkis2 = suma2 / 3;

console.log('pirmos grupes vidurkis:', vidurkis1);
console.log('antros grupes vidurkis:', vidurkis2);

if (vidurkis1 > vidurkis2) {
    console.log('pirma grupa turi geresnį vidurkį');
} else if (vidurkis2 > vidurkis1) {
    console.log('antra grupa turi geresnį vidurkį');
} else {
    console.log('vidurkiai vienodi');
}

console.log('-----');