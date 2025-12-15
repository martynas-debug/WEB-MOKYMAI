// 1.

let studentai = [
    { vardas: 'Jonas', pavarde: 'Jonuska', amzius: 14, pazymiai: [10, 7, 5, 6], studijuPrograma: 'biologija', kursas: '1' },
    { vardas: 'Andrius', pavarde: 'Kipuska', amzius: 15, pazymiai: [7, 9, 2, 7], studijuPrograma: 'chemija', kursas: '2' },
    { vardas: 'Alona', pavarde: 'Gavel', amzius: 16, pazymiai: [10, 9, 9, 10], studijuPrograma: 'slaugytoja', kursas: '3' },
];

studentai.forEach(student => {
    const { pazymiai, ...duomenys } = student;
    console.log(duomenys);
    console.log(pazymiai);
    const vidurkis = (pazymiai.reduce((a, b) => a + b, 0) / pazymiai.length).toFixed(2);
    console.log('Pažymių vidurkis: ' + vidurkis);
});

console.log('-----');

const visiPazymiai = studentai.flatMap(s => s.pazymiai);
const bendrasVidurkis = (visiPazymiai.reduce((a, b) => a + b, 0) / visiPazymiai.length).toFixed(2);
console.log('Bendras studentu pažymių vidurkis: ' + bendrasVidurkis);

console.log('-----');