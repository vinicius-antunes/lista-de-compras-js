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
├── docs/
│   └── documentacao-javascript.md
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

## 📘 Documentação do JavaScript

As explicações sobre funções, parâmetros, retornos, DOM, eventos e nomenclaturas foram separadas do código principal.

<a href="./docs/documentacao-javascript.md">
  <img src="https://img.shields.io/badge/Ver_documentação-8A2BE2?style=for-the-badge&logo=javascript&logoColor=white" alt="Documentação do JavaScript">
</a>

## ▶️ Como executar

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
