import { criarItemDaLista } from "./criarItensLista.js";
import { gerarDiaDaSemana } from "./gerarDiasDaSemana.js";

const animal = document.getElementById('animal');
const botaoAdicionar = document.getElementById("btn");

botaoAdicionar.addEventListener("click", function (evento) {
    evento.preventDefault();

    const nome = animal.value.trim();
    if (nome === "") {
        alert("Por favor, digite o nome de um animal.");
        return;
    }

    const data = gerarDiaDaSemana();
    criarItemDaLista(nome, data);
    animal.value = "";
});