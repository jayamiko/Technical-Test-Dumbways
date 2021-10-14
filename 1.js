function triangle(alas, tinggi) {
    
    let length = alas / tinggi;
    let z = '';
    for (let i = 0; i < 10; i++) {
        for (let j = 1; j <= i - 1; j++) {
            z += length + 1
            while (i < length) {
                i + 2
            }
        }
        z += '\n'
    }
    return z += '\n'
}

console.log(triangle(7, 7));