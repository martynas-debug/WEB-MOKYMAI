// 1.
console.log('---1---');
console.log();

let knygos = [
    { pavadinimas: 'Mobis Dikas', kaina: 14.99 },
    { pavadinimas: 'Lobiu sala', kaina: 19.99 },
    { pavadinimas: 'Kelione i zemes centra', kaina: 14.49 },
];

console.log('VISOS KNYGOS: \n', knygos, '\n---------');
console.log('pirma knyga\n', knygos[0], '\n----------');
console.log('jos kaina\n', knygos[0].kaina, '\n---------');
console.log('antra knyga\n', knygos[1], '\n----------');
console.log('jos kaina\n', knygos[1].kaina, '\n---------');

console.log();


// 2.
console.log('---2---');
console.log();

let vinylai = [
    { pavadinimas: 'rugpjutis', kaina: 39.99, autorius: 'Justinas Jarutis' },
    { pavadinimas: 'as kaip zasis', kaina: 19.99, autorius: 'SEL' },
    { pavadinimas: 'viskas bus gerai', kaina: 24.99, autorius: 'antikvariniai kaspirovskio dantys' },

];

console.log('VISI VINYLAI:');

for (const vinylas of vinylai) {
    console.log(vinylas);
}

console.log();


// 3.
console.log('---3---');
console.log();

let automobiliai = [
    { pavadinimas: 'AUDI', metai: 2008, dabartiniaiMetai: 2025 },
    { pavadinimas: 'RENO', metai: 2011, dabartiniaiMetai: 2025 },
    { pavadinimas: 'BMW', metai: 2015, dabartiniaiMetai: 2025 },

];

console.log('VISI AUTOMOBILIAI:');

for (const automobilis of automobiliai) {
    console.log(automobilis);
}

console.log();