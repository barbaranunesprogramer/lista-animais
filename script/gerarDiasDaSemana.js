function gerarDiaDaSemana() {
    const agora = new Date();
    const diaDaSemana = agora.toLocaleDateString('pt-BR', { weekday: 'long' });
    const data = agora.toLocaleDateString('pt-BR');
    const hora = agora.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
    const dataCompleta = `${diaDaSemana} (${data}) às ${hora}`;

    return dataCompleta;
}
export { gerarDiaDaSemana };