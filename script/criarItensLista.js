import { verificarListaVazia } from "./verificarLista.js";

const listaDeAnimais = document.getElementById("listaAnimais");
let contador = 2;

export function criarItemDaLista(nome, dataCompleta) {
    const li = document.createElement('li');
    const container = document.createElement('div');
    container.classList.add("lista_animais_container");

    const label = document.createElement("label");

    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.id = "checkbox-" + contador++;

    checkbox.addEventListener("click", function () {
        // Quando o checkbox é marcado ou desmarcado
        if (checkbox.checked) {
            li.style.textDecoration = "line-through"; // Nome riscado
        } else {
            li.style.textDecoration = "none"; // Remove o risco
        }
    });

    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(" " + nome));

    container.appendChild(label);
    li.appendChild(container);

    const p = document.createElement("p");
    p.classList.add("texto-data");
    p.textContent = dataCompleta;
    li.appendChild(p);

    listaDeAnimais.appendChild(li);

    verificarListaVazia(listaDeAnimais); // chama após adicionar
}
