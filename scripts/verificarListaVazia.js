// `document.querySelector()` procura o primeiro elemento
// que corresponda ao seletor CSS informado.
//
// Como utilizamos:
// ".lista-vazia"
//
// o ponto `.` indica que estamos procurando uma classe CSS.
//
// Portanto, procura algo como:
//
// <p class="lista-vazia">
const listaVazia = document.querySelector(".lista-vazia");


// Declara uma função responsável por verificar
// se existem itens na lista.
//
// `listaDeCompras` é um parâmetro.
//
// Parâmetro é uma variável definida na criação da função
// que receberá algum valor quando a função for chamada.
function verificarListaVazia(listaDeCompras) {

    // `.querySelectorAll()` procura TODOS os elementos
    // correspondentes ao seletor informado.
    //
    // Isso é diferente de `querySelector()`, que retorna
    // somente o primeiro elemento encontrado.
    //
    // Aqui estamos procurando todos os elementos <li>
    // existentes dentro de `listaDeCompras`.
    //
    // O resultado é uma NodeList, que é uma coleção
    // de elementos encontrados no DOM.
    const itensDaLista = listaDeCompras.querySelectorAll("li");


    // `.length` é uma propriedade que informa
    // a quantidade de elementos existentes em uma coleção.
    //
    // Se nenhum <li> existir:
    //
    // itensDaLista.length será 0.
    //
    // `===` realiza uma comparação estrita de valor e tipo.
    if (itensDaLista.length === 0) {

        // `.style` permite manipular estilos CSS diretamente
        // através do JavaScript.
        //
        // `.display` corresponde à propriedade CSS:
        //
        // display
        //
        // `"block"` faz o elemento ser exibido como bloco.
        //
        // Neste projeto, isso faz a mensagem de lista vazia aparecer.
        listaVazia.style.display = "block";

    // Caso existam um ou mais itens na lista,
    // executamos o bloco do `else`.
    } else {

        // `display: none` faz com que o elemento
        // deixe de ser exibido na página.
        //
        // Portanto, quando existe pelo menos um item,
        // a mensagem de lista vazia desaparece.
        listaVazia.style.display = "none";
    }
}


// Exporta a função como exportação padrão deste arquivo.
//
// Isso permite importá-la em outro módulo utilizando:
//
// import verificarListaVazia from "./scripts/verificarListaVazia.js";
export default verificarListaVazia;
