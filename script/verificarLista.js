export function verificarListaVazia(listaAnimais) {
    const mensagemListaVazia = document.querySelector("#mensagemListaVazia");
    const lista = listaAnimais.querySelectorAll("li");

    if (lista.length === 0) {
        mensagemListaVazia.style.display = "block";
    } else {
        mensagemListaVazia.style.display = "none";
    }
}