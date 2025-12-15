let knigynas = {
    pavadinimas: "Mano knygynas",
    adresas: "Vilniaus g. 10, Vilnius",
    plotas: 550,
    knygos: 3000,
    atidaryta: true,
    darboValandos: 8 - 20,
};

for (const raktas in knigynas) {
    console.log(raktas + ": " + knigynas[raktas]); {
        console.log(`${raktas}: ${knigynas[raktas]}`);
    }

}

// Išveskite knygyno savybes, kurių reikšmės yra ne string tipo
for (const raktas in knigynas) {
    if (typeof knigynas[raktas] !== 'string') {
        console.log(`${raktas}: ${knigynas[raktas]}`);
    }
}



