function filtrarOcorrencias(paragrafo){
    return Object.keys(paragrafo).filter(chave => paragrafo[chave] > 1) //Aqui ele esta pegando as chaves onde o valor e maior que 1
}

function montaSaidaArquivo(listaPalavras){
    let textoFinal = '';

    listaPalavras.forEach((paragrafo, indice) => {
        const duplicadas = filtrarOcorrencias(paragrafo);

        if (duplicadas.length > 0) {
            textoFinal += `palavras duplicadas no parágrafo ${indice + 1}: ${duplicadas.join(', ')}\n`;
        }
    });

    return textoFinal;
}


export {montaSaidaArquivo};