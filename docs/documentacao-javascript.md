# 📘 Documentação do JavaScript

Esta documentação explica o funcionamento dos arquivos JavaScript da aplicação **Lista de Compras**. O código executável permanece limpo nos arquivos principais, enquanto as explicações de estudo ficam centralizadas aqui.

## Fluxo da aplicação

1. `index.js` identifica a lista e o botão no HTML.
2. O clique no botão chama `criarItemDaLista()`.
3. A função valida o campo e cria os elementos do novo produto.
4. `gerarDiaDaSemana()` produz a data e o horário do cadastro.
5. O item pronto é inserido no DOM.
6. `verificarListaVazia()` mostra ou esconde a mensagem de lista vazia.

## Arquivos e responsabilidades

| Arquivo | Responsabilidade |
|---|---|
| `index.js` | Coordena o clique no botão e adiciona o novo item à lista. |
| `scripts/criaritemDaLista.js` | Valida o campo e cria a estrutura HTML de cada produto. |
| `scripts/gerarDiaDaSemana.js` | Retorna o dia, a data e o horário atuais. |
| `scripts/verificarListaVazia.js` | Controla a mensagem exibida quando não existem itens. |

## Funções

### `criarItemDaLista()`

Cria um elemento `<li>` contendo checkbox, nome, data e horário.

- **Parâmetros:** nenhum;
- **Retorno:** elemento `<li>`;
- **Retorno alternativo:** `undefined` quando o campo está vazio.

### `gerarDiaDaSemana()`

Formata a data e o horário de acordo com o padrão brasileiro.

- **Parâmetros:** nenhum;
- **Retorno:** string com dia da semana, data e horário.

### `verificarListaVazia(listaDeCompras)`

Conta os elementos `<li>` e controla a visibilidade da mensagem de lista vazia.

- **Parâmetro:** `listaDeCompras`, elemento `<ul>` obtido do DOM;
- **Retorno:** nenhum.

## Nomenclaturas e recursos utilizados

| Recurso | Para que serve | Uso no projeto |
|---|---|---|
| `const` | Declara uma referência que não será reatribuída. | Armazena elementos do DOM e resultados das funções. |
| `let` | Declara uma variável cujo valor pode mudar. | Controla a numeração dos checkboxes. |
| `import` | Importa recursos de outro módulo. | Carrega as funções separadas em outros arquivos. |
| `export` | Disponibiliza um recurso para outros módulos. | Permite importar as funções pelo `index.js`. |
| DOM | Representação do HTML acessível pelo JavaScript. | Permite criar, localizar e inserir elementos na página. |
| `getElementById()` | Localiza um elemento pelo `id`. | Acessa o botão, o campo e a lista. |
| `querySelector()` | Localiza o primeiro elemento que corresponde a um seletor. | Acessa a mensagem `.lista-vazia`. |
| `querySelectorAll()` | Localiza todos os elementos correspondentes. | Conta os elementos `<li>` da lista. |
| `createElement()` | Cria um elemento HTML em memória. | Cria `<li>`, `<div>`, `<input>` e `<p>`. |
| `addEventListener()` | Executa uma função quando um evento acontece. | Observa cliques no botão e nos checkboxes. |
| Callback | Função passada para ser executada posteriormente. | Executa a lógica depois de cada clique. |
| Arrow Function | Sintaxe reduzida para criar funções. | Usada no evento do botão. |
| `preventDefault()` | Impede o comportamento padrão de um evento. | Evita o envio automático do formulário. |
| `appendChild()` | Insere um elemento dentro de outro. | Monta o item e o adiciona à lista. |
| `.value` | Representa o conteúdo de um campo. | Obtém o produto digitado. |
| `.trim()` | Remove espaços no início e no final. | Impede o cadastro de um item formado apenas por espaços. |
| `.checked` | Indica se o checkbox está marcado. | Define se o texto deve ficar riscado. |
| `.innerText` | Define texto sem interpretar HTML. | Insere o nome do produto com segurança. |
| `.innerHTML` | Insere conteúdo que pode conter HTML. | Insere o texto da data no parágrafo. |
| `.classList.add()` | Adiciona uma classe CSS ao elemento. | Aplica as classes de organização e data. |
| `Date` | Objeto nativo para datas e horários. | Obtém o momento atual. |
| Template Literal | String com crases que aceita interpolação `${}`. | Reúne dia, data e horário em uma única string. |
| `return` | Encerra a função e pode devolver um valor. | Interrompe a validação ou devolve o `<li>` criado. |

## Código documentado

### `index.js`

```javascript
// Importa as funções responsáveis por criar itens e verificar a lista.
import { criarItemDaLista } from "./scripts/criaritemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";

// Obtém os elementos que já existem no HTML.
const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

// Executa a lógica sempre que o botão for clicado.
botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();

    const itemDaLista = criarItemDaLista();

    // Encerra o evento quando a validação não cria um item.
    if (!itemDaLista) {
        return;
    }

    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
});

// Faz a primeira verificação assim que o script é carregado.
verificarListaVazia(listaDeCompras);
```

### `scripts/criaritemDaLista.js`

```javascript
import gerarDiaDaSemana from "./gerarDiaDaSemana.js";

const inputItem = document.getElementById("input-item");
let contador = 0;

export function criarItemDaLista() {
    // Impede o cadastro de um valor vazio ou formado apenas por espaços.
    if (inputItem.value.trim() === "") {
        alert("Por favor, insira um item na lista.");
        return;
    }

    // Cria a estrutura principal do produto.
    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");

    // Cria um checkbox com identificador único.
    const inputCheckbox = document.createElement("input");
    inputCheckbox.type = "checkbox";
    inputCheckbox.id = "checkbox-" + contador++;

    const nomeItem = document.createElement("p");
    nomeItem.innerText = inputItem.value.trim();

    // Risca o nome quando o produto é marcado como comprado.
    inputCheckbox.addEventListener("click", function () {
        if (inputCheckbox.checked) {
            nomeItem.style.textDecoration = "line-through";
        } else {
            nomeItem.style.textDecoration = "none";
        }
    });

    containerItemDaLista.appendChild(inputCheckbox);
    containerItemDaLista.appendChild(nomeItem);
    itemDaLista.appendChild(containerItemDaLista);

    // Acrescenta a data e o horário ao item.
    const dataCompleta = gerarDiaDaSemana();
    const itemData = document.createElement("p");
    itemData.innerHTML = dataCompleta;
    itemData.classList.add("texto-data");
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}
```

### `scripts/gerarDiaDaSemana.js`

```javascript
function gerarDiaDaSemana() {
    // Obtém o nome completo do dia da semana em português.
    const diaDaSemana = new Date().toLocaleDateString("pt-BR", {
        weekday: "long",
    });

    const data = new Date().toLocaleDateString("pt-BR");
    const hora = new Date().toLocaleTimeString("pt-BR", {
        hour: "numeric",
        minute: "numeric",
    });

    return `${diaDaSemana} (${data}) as ${hora}`;
}

export default gerarDiaDaSemana;
```

### `scripts/verificarListaVazia.js`

```javascript
const listaVazia = document.querySelector(".lista-vazia");

function verificarListaVazia(listaDeCompras) {
    const itensDaLista = listaDeCompras.querySelectorAll("li");

    // Mostra a mensagem apenas quando nenhum <li> foi encontrado.
    if (itensDaLista.length === 0) {
        listaVazia.style.display = "block";
    } else {
        listaVazia.style.display = "none";
    }
}

export default verificarListaVazia;
```

---

[← Voltar ao README principal](../README.md)
