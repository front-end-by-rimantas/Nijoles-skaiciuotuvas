import { divide } from './divide.js';
import { sum } from './sum.js';

function average(numberArray) {
    const arrayLength = numberArray.length;
    let suma = 0;
    let kiekis = 0;

    for (let i = 0; i < arrayLength; i++) {
        const skaicius = numberArray[i];
        if (typeof skaicius !== 'number') {
            continue;
        }
        suma = sum(suma, skaicius);
        kiekis++;
    }

    return divide(suma, kiekis);
}

export { average }