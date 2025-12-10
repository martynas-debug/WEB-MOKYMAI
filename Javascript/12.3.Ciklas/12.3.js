//1. 
console.log('-----1-----');
console.log();

let skaicius = 1; 

while (skaicius <= 20) {
    console.log(skaicius);
    skaicius++;
}

console.log();

//2. 
console.log('-----2-----');
console.log();

let skaicius1 = 1;
let lyginiai = [];
let nelyginiai = [];

while (skaicius <= 50) {
    if (skaicius % 2 === 0) {
        lyginiai.push(skaicius);
    } else {
        nelyginiai.push(skaicius);
    }
    skaicius++;
}

console.log('Lyginiai:', lyginiai);
console.log('Nelyginiai:', nelyginiai);

console.log();

//3. 
console.log('-----3-----');
console.log();

let skaicius2 = 25;

while (skaicius2 <= 50) {
    if (skaicius2 % 3 === 0) {
        console.log(skaicius2);
    } else {
        console.log('skaicius2 {skaičius2} dalinasi iš 3');
    }
    skaicius2++;
}

console.log();

//4. 
console.log('-----4-----');
console.log();

let skaicius3 = 1;

while (true) {
    if (skaicius3 % 3 === 0 && skaicius3 % 5 === 0) {
        console.log(skaicius3);
        break;
    }
    console.log(skaicius3);
    skaicius3++;
}

//5. 
console.log('-----5-----');
console.log();

let suma = 0;

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        suma += i;
    }
}

console.log('Lyginių skaičių suma:', suma);

console.log();

//6. 
console.log('-----6-----');
console.log();

let skaicius4 = 1;

while (skaicius4 <= 5) {
    let kvadratas = skaicius4 * skaicius4;
    console.log(`Skaičiaus ${skaicius4} kvadratas yra ${kvadratas}`);
    skaicius4++;
}
console.log();

//7. 
console.log('-----7-----');
console.log();

let kiekis = Math.floor(Math.random() * 10) + 1;

for (let i = 0; i < kiekis; i++) {
    let atsitiktinis = Math.floor(Math.random() * 100) + 1;
    console.log(atsitiktinis);
}


//8. 
console.log('-----8-----');
console.log();

let kiekis1 = Math.floor(Math.random() * 10) + 1;

for (let i = 0; i < kiekis1; i++) {
    let atsitiktinis = Math.floor(Math.random() * 100) + 1;
    console.log(atsitiktinis + kiekis1);
}
console.log();

//9. 
console.log('-----9-----');
console.log();

let preskiu_kiekis = 20;
let prekiu_kiekis1 = 35;
let prekiu_Kiekis2 = 11;

while (preskiu_kiekis > 0 && prekiu_kiekis1 > 0 && prekiu_Kiekis2 > 0) {
    console.log('turimas prekių kiekis:', preskiu_kiekis + prekiu_kiekis1 + prekiu_Kiekis2);
    preskiu_kiekis -= Math.floor(Math.random() * 5);
    prekiu_kiekis1 -= Math.floor(Math.random() * 5);
    prekiu_Kiekis2 -= Math.floor(Math.random() * 5);
    console.log('nupirkta prekių, liko:', preskiu_kiekis + prekiu_kiekis1 + prekiu_Kiekis2);
    }

console.log();

//10. 
console.log('-----10-----');
console.log();

let skaicius5 = 2;
let arPirminis = true;

while (arPirminis) {
    arPirminis = true;
    
    for (let i = 2; i < skaicius5; i++) {
        if (skaicius5 % i === 0) {
            arPirminis = false;
            break;
        }
    }
    
    console.log(skaicius);
    
    if (arPirminis) {
        break;
    }
    
    skaicius++;
}