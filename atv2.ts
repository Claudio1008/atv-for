let numerosPares: number[] = new Array<number>(31);


for (let n: number = 0, P: number = 0; n <= 60; n += 2, P++) {
    numerosPares[P] = n;
}


console.log(`OS Números pares de 0 a 60 são ${numerosPares}`);
