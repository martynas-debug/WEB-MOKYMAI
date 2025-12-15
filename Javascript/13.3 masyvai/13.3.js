//1.

console.log('---1---');
console.log('');

let zodziai = ['Neptūnas', 'Plutonas', 'Uranas', 'Saturnas', 'Marsas'];

for (let i = 0; i < zodziai.length; i++) {
    console.log((i + 1) + '-' + zodziai[i]);
}
console.log('-----');

//2.

console.log('---2---');
console.log('');

let pirkiniai = ['Vanduo', 'Alus', 'Pienas', 'Coca-Cola', 'Sprite'];

    console.log('Pirkinių skaičius: ' + pirkiniai.length);
    for (let i = 0; i < pirkiniai.length; i++) {
    console.log((i + 1) + '*' + pirkiniai[i]);
    
}
console.log('-----');


//3.

console.log('---3---');
console.log('');

let pazymiai = [10, 4, 8, 6, 9, 5];
console.log('Pazymiai: ' + pazymiai);
let suma = 0;
for (let i = 0; i < pazymiai.length; i++) {
    suma += pazymiai[i];
}
let vidurkis = suma / pazymiai.length;
console.log('Vidurkis: ' + vidurkis);

console.log('-----');


//4.

console.log('---4---');
console.log('');

let nuvaziuotiKilometrai = [120, 888, 453, 47, 658, 151];
console.log('Per diena nuvaziuoti kilometrai: ' + nuvaziuotiKilometrai);
for (let i = 0; i < nuvaziuotiKilometrai.length; i++) {
    if (nuvaziuotiKilometrai[i] > 150) {
        console.log('Didesni nei 150', nuvaziuotiKilometrai[i]);
    }
}

console.log('');

//5.

console.log('---5---');
console.log('');

let automobiliai = ['Ducati', 'Suzuki', 'Honda', 'Cupra', 'Tesla'];

for (let i = 0; i < automobiliai.length; i++) {
    console.log((i + 1) + '-' + automobiliai[i]);
    console.log('Raidžių skaičius ' + automobiliai[i] + ': ' + automobiliai[i].length);
}
console.log('-----');



