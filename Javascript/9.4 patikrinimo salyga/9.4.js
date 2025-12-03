// 1.

let skaicius = 6;

console.log('skaicius, kuri tikriname yra', skaicius);

if (skaicius % 5 == 0) {
    console.log("skaicius dalinasi is 5");
} else if (skaicius % 3 == 0) {
    console.log("skaicius dalinasi is 3");
} else if (skaicius == 3) {
    console.log("skaicius yra lygus 3");
} else {
    console.log("neatitiko nei vienos salygos");
}

// 2.

let skaicius1 = 13;
let skaicius2 = 4;
let skaicius3 = 9;

if (skaicius1 == skaicius2) {
    console.log("pirmas ir antras skaiciai nelygus");
} else if (skaicius1 == skaicius3) {
    console.log("skaicius1 nera lygus skaicius3")
} else if (skaicius3 > skaicius1) {
    console.log("skaicius3 nera didesnis uz skaicius1")
} else if (skaicius2 == skaicius3 * 2) {
    console.log ("skaicius2 nera lygus skaicius3 dvigubai reiksmei")
} else if (skaicius1 % 3 == 0) {
    console.log ("skaicius1 nesidalina is 3")
}