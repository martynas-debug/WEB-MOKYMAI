// 1. Sukurkite du objektus dviejų knygų informacijai saugoti. Kiekviename objekte nurodykite tokias savybes su reikšmėmis: pavadinimas, autorius, žanras, kaina, puslapių kiekis, skyrių sąrašas (masyvas su pavadinimais), išleidimo metai, ar knygą galima rasti knygynuose. Išveskite šių knygų informaciją. Išveskite kuri knyga plonesnė (turi mažiau puslapių), bei kurioje knygoje yra daugiau skyrių. Paskaičiuokite, jeigu pigesnės knygos kainą padvigintumėte, ar ji jau būtų brangesnė už kitą knygą?

const knyga1 = {
	pavadinimas: 'Kelionė per laiką',
	autorius: 'Jonas Petrauskas',
	zanras: 'Istorinė fantastika',
	kaina: 12.99,
	puslapiuKiekis: 320,
	skyriai: ['Įžanga', 'Pirmas nuotykis', 'Sąmokslas', 'Išsivadavimas', 'Pabaiga'],
	isleista: 2018,
	knygynuose: true
};

const knyga2 = {
	pavadinimas: 'Mažos idėjos',
	autorius: 'Eglė Kunytė',
	zanras: 'Esė',
	kaina: 8.5,
	puslapiuKiekis: 200,
	skyriai: ['Įžanga', 'Mintys', 'Praktika'],
	isleista: 2021,
	knygynuose: false
};

function spausdintiKnygosInfo(knyga) {
	console.log('---');
	console.log('Pavadinimas:', knyga.pavadinimas);
	console.log('Autorius:', knyga.autorius);
	console.log('Žanras:', knyga.zanras);
	console.log('Kaina:', knyga.kaina);
	console.log('Puslapių kiekis:', knyga.puslapiuKiekis);
	console.log('Skyriai:', knyga.skyriai.join(', '));
	console.log('Išleidimo metai:', knyga.isleista);
	console.log('Knygynuose:', knyga.knygynuose ? 'Taip' : 'Ne');
}

// Išveskite šių knygų informaciją
spausdintiKnygosInfo(knyga1);
spausdintiKnygosInfo(knyga2);

// Kuri knyga plonesnė (mažiau puslapių)?
if (knyga1.puslapiuKiekis < knyga2.puslapiuKiekis) {
	console.log('Plonesnė knyga:', knyga1.pavadinimas);
} else if (knyga2.puslapiuKiekis < knyga1.puslapiuKiekis) {
	console.log('Plonesnė knyga:', knyga2.pavadinimas);
} else {
	console.log('Abi knygos turi tiek pat puslapių.');
}

// Kurioje knygoje yra daugiau skyrių?
if (knyga1.skyriai.length > knyga2.skyriai.length) {
	console.log('Daugiau skyrių turi:', knyga1.pavadinimas);
} else if (knyga2.skyriai.length > knyga1.skyriai.length) {
	console.log('Daugiau skyrių turi:', knyga2.pavadinimas);
} else {
	console.log('Abi knygos turi tiek pat skyrių.');
}

// Pigesnės knygos kaina padvigubinus, ar ji būtų brangesnė už kitą?
let pigesne, kita;
if (knyga1.kaina < knyga2.kaina) {
	pigesne = knyga1;
	kita = knyga2;
} else if (knyga2.kaina < knyga1.kaina) {
	pigesne = knyga2;
	kita = knyga1;
} else {
	pigesne = null;
}

if (pigesne === null) {
	console.log('Abi knygos kainuoja tiek pat.');
} else {
	const padvigubinta = pigesne.kaina * 2;
	console.log('Pigesnės knygos', pigesne.pavadinimas, 'kaina padvigubinus:', padvigubinta);
	if (padvigubinta > kita.kaina) {
		console.log('Padvigubinus pigesnę knygą, ji būtų brangesnė už', kita.pavadinimas);
	} else if (padvigubinta < kita.kaina) {
		console.log('Net padvigubinus, pigesnė knyga vis dar būtų pigesnė už', kita.pavadinimas);
	} else {
		console.log('Padvigubinus pigesnę knygą, jos kaina būtų lygi', kita.pavadinimas);
	}
};

// 4. 
// 4. Trijų prekių objektai

const preke1 = {
	pavadinimas: 'Medinis stalas',
	kaina: 79.99,
	savikaina: 45.0,
	kodas: 'STL-001',
	turimasKiekis: 12,
	dezesMatmenys: { x: 120, y: 60, z: 75 } // cm
};

const preke2 = {
	pavadinimas: 'Pliušinis meškiukas',
	kaina: 14.5,
	savikaina: 4.2,
	kodas: 'MSK-210',
	turimasKiekis: 50,
	dezesMatmenys: { x: 30, y: 20, z: 15 }
};

const preke3 = {
	pavadinimas: 'Virtuvės peilis',
	kaina: 24.0,
	savikaina: 9.5,
	kodas: 'PK-078',
	turimasKiekis: 30,
	dezesMatmenys: { x: 35, y: 6, z: 3 }
};

function spausdintiPreke(preke) {
	console.log('---');
	console.log('Pavadinimas:', preke.pavadinimas);
	console.log('Kaina:', preke.kaina);
	console.log('Savikaina:', preke.savikaina);
	console.log('Kodas:', preke.kodas);
	console.log('Turimas kiekis:', preke.turimasKiekis);
	console.log('Dėžės matmenys (x×y×z):', preke.dezesMatmenys.x + '×' + preke.dezesMatmenys.y + '×' + preke.dezesMatmenys.z);
}

spausdintiPreke(preke1);
spausdintiPreke(preke2);
spausdintiPreke(preke3);


