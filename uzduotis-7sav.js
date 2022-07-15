/* 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai) */

const a = 3;
	const b = 5;
	if (a > b) {
	    console.log(a);
	} else if (b > a) {
	    console.log(b);
	} else {
	    console.log(a + ' lygu ' + b);
	}

console.log('----------');


/* 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai) */

for (let i = 1; i <= 10; i++) {
    console.log(i);

console.log('----------');


/* 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai) */

for (let i = 0; i <= 10; i += 2) {
    console.log(i);    
}

console.log('----------');


/* 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. 
Išvesti juos konsolėje. (5 taškai) */

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
};

for (let i = 0; i < 5; i++) {
    console.log(rand(1, 10));
};

console.log('----------');


/* 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. 
Paskutinis atspausdintas skaičius turi būti 5. (7 taškai) */

let x = 0
	while (x !== 5) {
	    x = random(1, 10)
	    console.log(x);
	}

console.log('----------');


/* 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. 
Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai) */

let mas = [...Array(rand(20, 30))].map(_ => rand(10, 30));
	console.log(mas);

console.log('----------');


/* 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. 
Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai) */

let gen = [`A`, `B`, `C`, `D`]
	let count = []
	let z = [...Array(100)].map(a => gen[random(0, gen.length - 1)]);
	for(const i of z.flat()) {
	count[i] ? count[i] += 1 : count[i] = 1
	}
	console.log(count);

console.log('----------');


/* 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. 
Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. 
Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų) */

function suma(a, b) {
    if (typeof a === 'number'
        && typeof b === 'number') {
            return a + b;
        }
    if (Array.isArray(a)
        && Array.isArray(b)) {
            return a.length + b.length
        }
    else {
        throw console.error('Kintamieji tik skaiciai arba masyvai');
    }
}
console.log(suma([1, 5, 3], [2, 2]));


console.log('----------');


/* 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. 
Turi būti patikrinimas, kad kintamasis yra skaičius. 
Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų) */


/* 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų) */