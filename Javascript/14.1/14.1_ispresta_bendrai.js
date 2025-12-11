// 13.1

// 3. Sukurkite du objektus dviejų knygų informacijai saugoti. Kiekviename objekte nurodykite tokias savybes su reikšmėmis: pavadinimas, autorius, žanras, kaina, puslapių kiekis, skyrių sąrašas (masyvas su pavadinimais), išleidimo metai, ar knygą galima rasti knygynuose. Išveskite šių knygų informaciją. Išveskite kuri knyga plonesnė (turi mažiau puslapių), bei kurioje knygoje yra daugiau skyrių. Paskaičiuokite, jeigu pigesnės knygos kainą padvigintumėte, ar ji jau būtų brangesnė už kitą knygą?

const knyga1 = {
  pavadinimas: "Dėl vėjo",
  autorius: "Margaret Mitchell",
  zanras: "Istorinis romanas",
  kaina: 24.99,
  puslapiuSkaicius: 1037,
  skyriai: ["Prolog", "Atlanta iki karo", "Karo metai", "Pokaris", "Epilogas"],
  isleidimoMetai: 1936,
  yraKnygynuose: true
};

const knyga2 = {
  pavadinimas: "1984",
  autorius: "George Orwell",
  zanras: "Distopija",
  kaina: 1.50,
  puslapiuSkaicius: 328,
  skyriai: ["Pranešimas apie Naujkalba", "I dalis", "II dalis", "III dalis", "IV prieda"],
  isleidimoMetai: 1949,
  yraKnygynuose: true
};

console.log('knyga1', knyga1);
console.log('knyga2', knyga2);

if (knyga1.puslapiuSkaicius < knyga2.puslapiuSkaicius) {
    console.log('pirma knyga plonesne');
} else if (knyga2.puslapiuSkaicius < knyga1.puslapiuSkaicius) {
    console.log('antra knyga plonesne');
} else {
    console.log('knygos vienodo ilgio');
}

if (knyga1.skyriai.length > knyga2.skyriai.length) {
    console.log('pirma knyga turi daugiau skyriu');
} else if (knyga2.skyriai.length > knyga1.skyriai.length) {
    console.log('antra knyga turi daugiau skyriu');
} else {
    console.log('knygos turi vienodai skyriu');
}

if (knyga1.kaina < knyga2.kaina) {
    let dvigubaKaina = knyga1.kaina * 2;
    if (dvigubaKaina > knyga2.kaina) {
        console.log('pirma dvigubinta brangesne uz antra');
    } else if (dvigubaKaina < knyga2.kaina) {
        console.log('pirma dvigubinta pigesne uz antra');
    } else {
        console.log('lygu');
    }
} else if (knyga2.kaina < knyga1.kaina) {
    let dvigubaKaina = knyga2.kaina * 2;
    if (dvigubaKaina > knyga1.kaina) {
        console.log('antra dvigubinta brangesne uz pirma');
    } else if (dvigubaKaina < knyga1.kaina) {
        console.log('antra dvigubinta pigesne uz pirma');
    } else {
        console.log('lygu');
    }
}

if (knyga1.kaina < knyga2.kaina && knyga1.kaina * 2 > knyga2.kaina) {
    console.log('pirma dvigubinta brangesne uz antra');
} else if (knyga2.kaina < knyga1.kaina && knyga2.kaina * 2 > knyga1.kaina) {
    console.log('antra dvigubinta brangesne uz pirma');
} else if (knyga1.kaina === knyga2.kaina) {
    console.log('kainos lygios');
}


// 4. Sukurkite tris objektus prekių duomenims saugoti. Kiekviename objekte sudėkite šias savybes su reikšmėmis: pavadinimas, kaina, savikaina, kodas, turimas kiekis sandėlyje, siuntimui dėžės matmenys (x, y, z ašys). Išveskite visų trijų prekių informaciją. Išveskite visų prekių kainas vienoje eilutėje (pirma prekė kainuoja - …, antra prekė kainuoja - …, ir t.t.). Raskite ir išveskite kuri prekė yra brangiausia (jos pavadinimą ir kainą arba visą rastos prekės informaciją). Raskite ir išveskite atskirose eilutėse kiekvienos prekės dėžės tūrį. Raskite ir išveskite atskirose eilutėse kiekvienos prekės pelningumą ((kaina - savikaina) * kiekis sandėlyje).


const preke1 = {
    pavadinimas: "Nešiojamasis kompiuteris",
    kaina: 899.99,
    savikaina: 650.00,
    kodas: "LAP001",
    turimasKiekis: 5,
    dezeMatmenys: { x: 35, y: 25, z: 2 }
};

const preke2 = {
    pavadinimas: "Pelė",
    kaina: 24.99,
    savikaina: 12.00,
    kodas: "MUS002",
    turimasKiekis: 50,
    dezeMatmenys: { x: 15, y: 10, z: 8 }
};

const preke3 = {
    pavadinimas: "Klaviatūra",
    kaina: 79.99,
    savikaina: 35.00,
    kodas: "KEY003",
    turimasKiekis: 20,
    dezeMatmenys: { x: 45, y: 15, z: 5 }
};

console.log('preke1', preke1);
console.log('preke2', preke2);
console.log('preke3', preke3);

console.log(`${preke1.kaina}, ${preke2.kaina}, ${preke3.kaina}`)

let turis1 = preke1.dezeMatmenys.x * preke1.dezeMatmenys.y * preke1.dezeMatmenys.z;
let turis2 = preke2.dezeMatmenys.x * preke2.dezeMatmenys.y * preke2.dezeMatmenys.z;
let turis3 = preke3.dezeMatmenys.x * preke3.dezeMatmenys.y * preke3.dezeMatmenys.z;
console.log(`turis1: ${turis1}`);
console.log(`turis2: ${turis2}`);
console.log(`turis3: ${turis3}`);


let visosPrekes = [preke1, preke2, preke3];
for (let preke of visosPrekes) {
    let pelningumas = (preke.kaina - preke.savikaina) * preke.turimasKiekis;
    console.log('prekes:', preke.pavadinimas, 'pelningumas:', pelningumas);

    let tur = preke.dezeMatmenys.x * preke.dezeMatmenys.y * preke.dezeMatmenys.z;
    // let tur = 1;
    // for (let matmuo in preke.dezeMatmenys) {
    //     tur = tur * preke.dezeMatmenys[matmuo];
    // }
    console.log(`krastiniu sumas ${preke.pavadinimas}: ${tur}`);
}
