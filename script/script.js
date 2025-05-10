import { criarItemDaLista } from "./criarItensLista.js";
import { gerarDiaDaSemana } from "./gerarDiasDaSemana.js";
import { verificarListaVazia } from "./verificarLista.js";

const animal = document.getElementById('animal');
const botaoAdicionar = document.getElementById("btn");
const listaDeAnimais = document.getElementById("listaAnimais");

botaoAdicionar.addEventListener("click", function (evento) {
    evento.preventDefault();

    const nome = animal.value.trim();
    if (nome === "") {
        alert("Por favor, digite o nome de um animal.");
        return;
    }

    const data = gerarDiaDaSemana();
    criarItemDaLista(nome, data); // Não é mais necessário adicionar a classe aqui
    animal.value = "";
    verificarListaVazia(listaDeAnimais); // garantia extra
});

// Checa estado inicial (caso tenha itens via HTML ou persistência futura)
verificarListaVazia(listaDeAnimais);
