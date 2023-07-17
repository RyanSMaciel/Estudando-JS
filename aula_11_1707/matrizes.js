const   vetor1 = [1, 3, 5, 7, 9],   // UNIDIMENSIONAL
        vetor2 = [2, 4, 6, 8, 0],
        vetor3 = [1, 2, 3, 4, 5],
        vetor4 = [6, 7, 8, 9, 0];

const matriz = [vetor1, vetor2, vetor3, vetor4] // BIDIMENSIONAL

console.log(vetor1[0]);
console.log(matriz[0][3]);

const matriz3d = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];

console.log(matriz3d[1][0][0]);
console.log(matriz3d[1][1][1]);

const matriz3x3= [
    [1, 8, 4],
    [6, 5, 9],
    [2, 3, 7]
];

for (let linha = 0; linha < matriz3x3.length; linha++) {
    for (let coluna = 0; coluna < matriz3x3.length; coluna++) {
        console.log(matriz3x3[linha][coluna]);
    }
}