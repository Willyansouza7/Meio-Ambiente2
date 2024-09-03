const nomes = [
    "Amazônia", 
    "Mata Atlântica", 
    "Pantanal", 
    "Cerrado", 
    "Caatinga", 
    "Serra do Mar", 
    "Chapada dos Veadeiros"
];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);