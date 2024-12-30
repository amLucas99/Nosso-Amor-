// Data de início do relacionamento
const dataInicio = new Date(2024, 10, 25);  // Lembre-se: meses começam em 0 (novembro é 10)

// Função para atualizar o tempo na tela
function atualizarTempo() {
    const agora = new Date();
    const diferenca = agora - dataInicio;

    // Calcular a diferença em diferentes unidades de tempo
    const segundos = Math.floor(diferenca / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const anos = Math.floor(dias / 365);
    const meses = Math.floor((dias % 365) / 30);
    const diasRestantes = dias % 30;

    // Atualizar os elementos com as respectivas unidades de tempo
    document.getElementById('anos_time').innerText = anos;
    document.querySelector('.meses').innerText = meses;
    document.querySelector('.dias').innerText = diasRestantes;
    document.querySelector('.horas').innerText = horas % 24;
    document.querySelector('.min').innerText = minutos % 60;
}

// Atualizar o tempo a cada 1 segundo
setInterval(atualizarTempo, 1000);
