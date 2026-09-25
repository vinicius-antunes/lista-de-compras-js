import { criarItemDaLista } from "./scripts/criaritemDaLista.js";
import verificarListaVazia from "./scripts/verificarListaVazia.js";

const listaDeCompras = document.getElementById("lista-de-compras");
const botaoAdicionar = document.getElementById("adicionar-item");

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();

    const itemDaLista = criarItemDaLista();

    if (!itemDaLista) {
        return;
    }

    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
});

verificarListaVazia(listaDeCompras);
