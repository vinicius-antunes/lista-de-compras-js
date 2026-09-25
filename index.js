// `import` é uma palavra-chave do JavaScript utilizada para importar
// recursos que foram exportados por outro arquivo.
//
// `{ criarItemDaLista }` utiliza uma importação nomeada.
// As chaves `{}` indicam que estamos importando especificamente
// uma função que foi exportada com esse mesmo nome.
//
// `"./scripts/criaritemDaLista.js"` informa o caminho do arquivo.
// `./` significa "a partir da pasta atual".
import { criarItemDaLista } from "./scripts/criaritemDaLista.js";


// Aqui temos uma importação diferente da anterior.
//
// Como `verificarListaVazia` foi exportada como `default` no outro arquivo,
// não precisamos utilizar `{}` durante a importação.
import verificarListaVazia from "./scripts/verificarListaVazia.js";


// `const` declara uma variável cuja referência não poderá ser
// reatribuída posteriormente.
//
// `document` representa o documento HTML carregado no navegador.
//
// `getElementById()` procura no HTML um elemento que tenha
// exatamente o ID informado.
//
// Neste caso, procura:
// id="lista-de-compras"
const listaDeCompras = document.getElementById("lista-de-compras");


// Procura no HTML o elemento que possui:
// id="adicionar-item"
//
// A referência desse elemento fica armazenada em `botaoAdicionar`.
const botaoAdicionar = document.getElementById("adicionar-item");


// `addEventListener()` registra um Event Listener, ou seja,
// um ouvinte de eventos.
//
// Ele fica aguardando determinado acontecimento ocorrer no elemento.
//
// `"click"` informa que o evento observado será um clique.
//
// `(evento) => {}` é uma Arrow Function.
// Ela funciona aqui como uma callback: uma função que será executada
// posteriormente, quando o clique acontecer.
//
// `evento` é um parâmetro que receberá informações sobre o evento ocorrido.
botaoAdicionar.addEventListener("click", (evento) => {

    // `preventDefault()` impede o comportamento padrão do evento.
    //
    // Isso é especialmente útil quando o botão está dentro de um formulário,
    // pois evita que o formulário seja enviado e que a página seja
    // recarregada automaticamente.
    evento.preventDefault();


    // Chama a função `criarItemDaLista()`.
    //
    // O valor retornado pela função é armazenado na constante
    // `itemDaLista`.
    const itemDaLista = criarItemDaLista();


    // Se a função não retornar um item, encerramos esta callback.
    //
    // Isso acontece, por exemplo, quando o campo está vazio e
    // `criarItemDaLista()` executa `return`.
    //
    // O operador `!` representa negação lógica.
    // Portanto, `!itemDaLista` será verdadeiro quando não houver
    // um elemento válido armazenado na variável.
    if (!itemDaLista) {
        return;
    }


    // `appendChild()` adiciona um elemento como filho de outro
    // elemento do DOM.
    //
    // Aqui, o novo <li> criado pela função é colocado dentro
    // da lista de compras.
    listaDeCompras.appendChild(itemDaLista);


    // Chama a função responsável por verificar se ainda existem
    // itens dentro da lista.
    //
    // `listaDeCompras` está sendo enviado como argumento da função.
    verificarListaVazia(listaDeCompras);
});


// Executa a verificação assim que o JavaScript é carregado.
//
// Isso permite mostrar a mensagem de "lista vazia" antes mesmo
// de o usuário adicionar algum produto.
verificarListaVazia(listaDeCompras);
