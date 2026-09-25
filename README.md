# 🛒 Lista de Compras com JavaScript

Aplicação web desenvolvida durante meus estudos de **JavaScript e manipulação do DOM**. O projeto permite criar uma lista de compras dinâmica, marcar itens como comprados e registrar automaticamente a data e o horário de inclusão.

<p align="center">
  <img src="./img/bag.png" alt="Ilustração de uma sacola de compras" width="160">
</p>

## 🎯 Objetivo do projeto

Praticar a construção de páginas dinâmicas com JavaScript, separando responsabilidades em diferentes módulos e manipulando elementos HTML por meio do DOM.

## ⚙️ Como funciona

1. O usuário digita o nome de um produto no campo de texto.
2. Ao clicar em **Salvar item**, o JavaScript verifica se o campo foi preenchido.
3. Um novo elemento é criado e adicionado à lista.
4. O projeto registra o dia da semana, a data e o horário de criação.
5. O checkbox permite marcar ou desmarcar o item como comprado.
6. A mensagem de lista vazia aparece apenas quando não existem produtos cadastrados.

## ✨ Principais funcionalidades

- Adição dinâmica de itens;
- Validação do campo vazio;
- Marcação de itens como comprados;
- Exibição de data, horário e dia da semana;
- Controle automático da mensagem de lista vazia;
- Interface responsiva;
- Organização do JavaScript em módulos.

## 🛠️ Tecnologias utilizadas

- **HTML5:** estrutura da aplicação;
- **CSS3:** estilização, responsividade e identidade visual;
- **JavaScript:** regras e interações da aplicação;
- **Git e GitHub:** versionamento e publicação do código.

## 📁 Estrutura do projeto

```text
lista-de-compras-js/
├── img/
│   ├── bag.png
│   ├── delete.svg
│   └── edit.svg
├── scripts/
│   ├── criaritemDaLista.js
│   ├── gerarDiaDaSemana.js
│   └── verificarListaVazia.js
├── index.html
├── index.js
├── styles.css
└── README.md
```

## 🧩 Funções JavaScript

### `criarItemDaLista()`

Cria um novo item com checkbox, nome do produto, data e horário.

- **Parâmetros:** não possui;
- **Retorno:** um elemento `<li>` pronto para ser inserido na página;
- **Retorno alternativo:** `undefined` quando o campo está vazio.

### `gerarDiaDaSemana()`

Obtém a data e o horário atuais no formato brasileiro.

- **Parâmetros:** não possui;
- **Retorno:** uma string com dia da semana, data e horário.

Exemplo:

```text
sexta-feira (25/09/2026) as 12:30
```

### `verificarListaVazia(listaDeCompras)`

Verifica se existem elementos `<li>` na lista e controla a exibição da mensagem **Nenhum item adicionado**.

- **Parâmetro:** `listaDeCompras`, elemento HTML que representa a lista;
- **Retorno:** não possui.

## 📚 Nomenclaturas e conceitos praticados

| Recurso | O que é e como foi utilizado |
|---|---|
| `const` | Declara referências que não serão reatribuídas. Foi utilizada para armazenar elementos do DOM e resultados das funções. |
| `let` | Declara uma variável que pode mudar. Foi utilizada no contador dos checkboxes. |
| `import` e `export` | Permitem dividir o código em módulos e compartilhar funções entre arquivos. |
| DOM | Representação do documento HTML que pode ser acessada e alterada pelo JavaScript. |
| `getElementById()` | Localiza um elemento pelo atributo `id`. |
| `querySelector()` | Localiza o primeiro elemento correspondente a um seletor CSS. |
| `querySelectorAll()` | Localiza todos os elementos correspondentes e retorna uma coleção. |
| `createElement()` | Cria um novo elemento HTML por meio do JavaScript. |
| `addEventListener()` | Observa eventos, como o clique no botão ou no checkbox. |
| Arrow Function | Forma reduzida de escrever uma função, utilizada como callback do clique no botão. |
| Callback | Função executada depois que determinado evento acontece. |
| `preventDefault()` | Impede o comportamento padrão do formulário. |
| `appendChild()` | Adiciona um elemento como filho de outro elemento no DOM. |
| `.value` | Acessa o conteúdo digitado em um campo de formulário. |
| `.trim()` | Remove espaços do início e do final de uma string. |
| `.innerText` | Define ou acessa o texto visível de um elemento. |
| `.innerHTML` | Insere conteúdo textual ou HTML dentro de um elemento. |
| `.checked` | Informa se um checkbox está marcado ou desmarcado. |
| `Date` | Objeto nativo utilizado para trabalhar com datas e horários. |
| Template Literal | String escrita com crases que permite inserir valores usando `${}`. |
| `return` | Encerra uma função e pode devolver um resultado. |

## ▶️ Como executar

### Pelo GitHub Pages

Quando a publicação estiver ativada, acesse:

```text
https://vinicius-antunes.github.io/lista-de-compras-js/
```

### No computador

1. Clone o repositório:

```bash
git clone https://github.com/vinicius-antunes/lista-de-compras-js.git
```

2. Abra a pasta no Visual Studio Code.
3. Execute o `index.html` utilizando a extensão **Live Server**.

> O uso de um servidor local é recomendado porque o projeto utiliza módulos JavaScript.

## 🚧 Melhorias futuras

- Editar itens adicionados;
- Excluir itens da lista;
- Salvar os dados no `localStorage`;
- Criar filtros para itens pendentes e concluídos.

## 👨‍💻 Autor

Desenvolvido por **Vinicius Antunes** durante seus estudos de desenvolvimento web.

<a href="https://github.com/vinicius-antunes">
  <img src="https://img.shields.io/badge/GitHub-8A2BE2?style=for-the-badge&logo=github&logoColor=white" alt="GitHub">
</a>
