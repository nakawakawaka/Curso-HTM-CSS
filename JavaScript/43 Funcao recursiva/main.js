//funções recursivas sao funções que se chamam e funcionam de forma parecida com looping
function recursiva(max) {
    console.log(max);
    if (max >= 10) return;
    max++;
    recursiva(max);
}

recursiva(0);