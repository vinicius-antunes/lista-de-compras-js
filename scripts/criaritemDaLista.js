// Importa a função responsável por gerar a data,
// o horário e o dia da semana.
//
// Como ela foi exportada utilizando `export default`,
// não são utilizadas chaves `{}` na importação.
import gerarDiaDaSemana from "./gerarDiaDaSemana.js";


// `document.getElementById()` acessa um elemento do HTML pelo seu ID.
//
// Aqui estamos procurando o campo que possui:
// id="input-item"
const inputItem = document.getElementById("input-item");


// `let` declara uma variável cujo valor pode ser alterado.
//
// Diferentemente de `const`, podemos modificar o valor armazenado nela.
//
// O contador será utilizado para criar IDs diferentes
// para os checkboxes.
let contador = 0;


// `export` permite que essa função seja utilizada por outros arquivos.
//
// `function` é a palavra-chave utilizada para declarar uma função.
//
// `criarItemDaLista` é o nome da função.
//
// Os parênteses `()` estão vazios porque essa função
// não recebe parâmetros.
export function criarItemDaLista() {

    // `.value` é uma propriedade que contém o valor atual
    // digitado dentro de um campo de formulário.
    //
    // `.trim()` é um método de String que remove espaços
    // existentes no começo e no final do texto.
    //
    // `===` realiza uma comparação estrita:
    // compara tanto o valor quanto o tipo.
    //
    // Aqui verificamos se, depois da remoção dos espaços,
    // o campo ficou igual a uma string vazia `""`.
    //
    // `if` executa seu bloco somente quando a condição
    // entre parênteses for verdadeira.
    if (inputItem.value.trim() === "") {

        // `alert()` é uma função fornecida pelo navegador.
        //
        // Ela abre uma pequena caixa de diálogo mostrando
        // uma mensagem para o usuário.
        alert("Por favor, insira um item na lista.");

        // `return` encerra imediatamente a execução da função.
        //
        // Como não existe nenhum valor após `return`,
        // nesse caso a função retorna `undefined`.
        return;
    }


    // `document.createElement()` cria um novo elemento HTML
    // através do JavaScript.
    //
    // Aqui estamos criando:
    //
    // <li></li>
    //
    // Importante: criar o elemento ainda não faz com que ele
    // apareça na página. Posteriormente ele precisa ser inserido
    // no DOM utilizando métodos como `appendChild()`.
    const itemDaLista = document.createElement("li");


    // Cria um elemento:
    //
    // <div></div>
    //
    // Ele será utilizado como contêiner para organizar
    // o checkbox e o nome do produto.
    const containerItemDaLista = document.createElement("div");


    // `.classList` fornece acesso às classes CSS de um elemento.
    //
    // `.add()` adiciona uma nova classe CSS ao elemento.
    //
    // O resultado equivalente no HTML seria:
    //
    // <div class="lista-item-container">
    containerItemDaLista.classList.add("lista-item-container");


    // Cria um novo elemento <input>.
    const inputCheckbox = document.createElement("input");


    // `.type` representa o atributo `type` do elemento <input>.
    //
    // Aqui definimos o input como um checkbox:
    //
    // <input type="checkbox">
    inputCheckbox.type = "checkbox";


    // `.id` define o atributo `id` do elemento.
    //
    // `"checkbox-" + contador` realiza uma concatenação:
    // junta a string com o valor do contador.
    //
    // `++` é o operador de incremento.
    // Ele aumenta o valor da variável em 1.
    //
    // Como o `++` aparece depois de `contador`,
    // primeiro o valor atual é utilizado e depois incrementado.
    //
    // Exemplos:
    // checkbox-0
    // checkbox-1
    // checkbox-2
    inputCheckbox.id = "checkbox-" + contador++;


    // Cria um elemento HTML <p>.
    //
    // Ele será utilizado para mostrar o nome do item.
    const nomeItem = document.createElement("p");


    // `.innerText` permite definir ou acessar o texto visível
    // existente dentro de um elemento HTML.
    //
    // Novamente usamos `.value` para obter o que foi digitado
    // no input e `.trim()` para remover espaços extras.
    nomeItem.innerText = inputItem.value.trim();


    // Registra um ouvinte para o evento de clique no checkbox.
    //
    // Neste caso foi utilizada uma função tradicional:
    //
    // function () {}
    //
    // Ela funciona como callback do `addEventListener()`,
    // sendo executada sempre que o checkbox for clicado.
    inputCheckbox.addEventListener("click", function () {

        // `.checked` é uma propriedade específica de elementos
        // como checkbox.
        //
        // Ela possui um valor booleano:
        //
        // true  -> checkbox marcado
        // false -> checkbox desmarcado
        //
        // O `if` verifica se o checkbox está marcado.
        if (inputCheckbox.checked) {

            // `.style` permite alterar estilos CSS diretamente
            // através do JavaScript.
            //
            // `.textDecoration` corresponde à propriedade CSS:
            //
            // text-decoration
            //
            // `"line-through"` coloca uma linha atravessando o texto.
            //
            // Isso produz o efeito visual de item concluído.
            nomeItem.style.textDecoration = "line-through";

        // `else` é executado quando a condição anterior do `if`
        // for falsa.
        } else {

            // Remove o risco do texto quando o checkbox
            // for desmarcado.
            //
            // `"none"` significa que nenhuma decoração de texto
            // será aplicada.
            nomeItem.style.textDecoration = "none";
        }
    });


    // `appendChild()` adiciona um elemento dentro de outro.
    //
    // Aqui colocamos o checkbox dentro da <div>.
    containerItemDaLista.appendChild(inputCheckbox);


    // Agora colocamos o elemento <p>, que contém o nome
    // do produto, dentro da mesma <div>.
    containerItemDaLista.appendChild(nomeItem);


    // Coloca todo o contêiner dentro do <li>.
    //
    // A estrutura começa a ficar aproximadamente:
    //
    // <li>
    //     <div>
    //         <input>
    //         <p>Produto</p>
    //     </div>
    // </li>
    itemDaLista.appendChild(containerItemDaLista);


    // Chama a função responsável por gerar o dia,
    // data e horário atuais.
    //
    // O valor retornado é armazenado em `dataCompleta`.
    const dataCompleta = gerarDiaDaSemana();


    // Cria outro elemento <p>.
    //
    // Esse parágrafo será utilizado para mostrar
    // as informações de data e horário.
    const itemData = document.createElement("p");


    // `.innerHTML` permite inserir conteúdo dentro de um elemento.
    //
    // Diferentemente de `.innerText`, o `innerHTML` também é capaz
    // de interpretar tags HTML existentes na string.
    //
    // Aqui ele recebe o texto produzido por `gerarDiaDaSemana()`.
    itemData.innerHTML = dataCompleta;


    // Adiciona a classe CSS:
    //
    // class="texto-data"
    //
    // ao elemento que mostra a data.
    itemData.classList.add("texto-data");


    // Coloca o parágrafo da data dentro do <li>.
    itemDaLista.appendChild(itemData);


    // `return` encerra a função e devolve o elemento criado.
    //
    // Isso permite que o `index.js` receba esse <li>
    // e posteriormente utilize:
    //
    // listaDeCompras.appendChild(itemDaLista);
    return itemDaLista;
}
