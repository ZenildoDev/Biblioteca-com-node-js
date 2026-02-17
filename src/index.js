export function contaPalavras(texto){
    const paragrafos = extraiParagrafos(texto);
    const contagem = paragrafos.flatMap((paragrafo) => {
        if(!paragrafo) return []; // ignora parágrafos vazios
        return verificaPalavrasDuplicadas(paragrafo);
    })

    return (contagem);
}

function extraiParagrafos(texto){
    return texto.toLowerCase().split('\n')
}

function limpaPalavras(palavra) {
  return palavra.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
}

function verificaPalavrasDuplicadas(texto){
    const listaPalavras = texto.split(' ');
    const resultado = {};
    listaPalavras.forEach(palavra => {
        if(palavra.length >= 3) {
            const palavraLimpa = limpaPalavras(palavra); //isso remove caracteres colados  nas palavras
            resultado[palavraLimpa] = (resultado[palavraLimpa] || 0) + 1;
        }
    });

    return resultado;
}
