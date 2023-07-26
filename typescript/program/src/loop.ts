// run: npx tsx src/loop.ts 

const names = ['Joy', 'Atlas', 'Minotaur'];

// for i
for (let i = 0; i < names.length; i++) {
    console.info(names[i]);
}


// for of
for (const name of names) {
    console.info(name);
}


// for in 
for (const index in names) {
    console.info(names[index]);
}


// while loop
let counter = 0;
while (counter < 10) {
    console.log(`counter ${counter}`);
    counter++;
}


// do while loop
let index = 0;
do {
    console.info(`index ${index}`);
    index++;
} while(index < 10);


// break and continue
let nomor = 0;
do {
    nomor++;

    if (nomor === 10) {
        break;
    }

    if (nomor % 2 === 0) {
        continue;
    }

    console.info(`nomor ${nomor}`);
} while(true);