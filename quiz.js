function enviar(event) {
    event.preventDefault()

    const modal = document.getElementById('modal-backdrop');

    const peso = parseFloat(document.getElementsByName('peso')[0].value);
    const altura = parseFloat(document.getElementsByName('altura')[0].value);
    const fuma = parseInt(document.getElementsByName('fuma')[0].value)
    const bebe = parseInt(document.getElementsByName('bebe')[0].value)

    const nomesItens = [
        'fuma',
        'bebe',
        'vegetariano',
        'consome_embutidos',
        'consome_verduras_salada',
        'problemas_saude_familia',
        'exercicios_regularmente',
        'nivel_estresse',
        'horas_sono',
        'consumo_agua',
        'freq_cardiaca_repouso',
        'check_up_regular',
        'nivel_exposicao_sol',
    ];
    let soma = 0;
    for (const nomeItem of nomesItens) {
        const valor = parseFloat(document.getElementsByName(nomeItem)[0].value);
        if (!isNaN(valor)) {
            soma += valor;
        }
    }

    let comentarioPrincipal = '';
    let comentario = '';


    if (soma > 25 ){
        comentarioPrincipal += 'No geral sua saúde está boa!'
    } else if (soma > 10){
        comentarioPrincipal += 'Há alguns pontos que você pode melhorar em relação a sua saúde'
    } else {
        comentarioPrincipal += 'A nossa saúde é algo que devemos valorizar, procure um médico e se informe sobre melhorias que você deve fazer'
    }

    const imc = peso / ((altura / 100) * (altura / 100));

    const sexo = document.getElementsByName('sexo')[0].value;
    const idade = document.getElementsByName('idade')[0].value;
    const percentualGordura = document.getElementsByName('gordura')[0].value;

    const mediaPercentualGordura = calcularMediaPercentualGordura(sexo, idade);


    let linkDicas = [];

    if (imc < 18.5) {
        comentario += 'Seu IMC indica baixo peso. ';
    } else if (imc >= 18.5 && imc < 25) {
        comentario += 'Seu IMC está na faixa de peso saudável. ';
    } else {
        comentario += 'Seu IMC indica sobrepeso. ';
    }

    if (percentualGordura !== 'nao-sei' && mediaPercentualGordura !== 'nao-sei' && percentualGordura > mediaPercentualGordura) {
        comentario += 'Seu percentual de gordura está acima da média. ';
    } else if (percentualGordura < mediaPercentualGordura){
        comentario += 'Seu percentual de gordura está abaixo da média ';
    }

    if (fuma === 0 || fuma === 1) {
        comentario += 'Fumar pode causar vários problemas de saúde. ';
        linkDicas.push({
            link: 'https://www.saude.gov.br/saude-de-a-z/tabagismo',
            titulo: 'Perigos de fumar para a saúde'
        }) 
    }

    if (bebe === 0 || bebe === 1) {
        comentario += 'O consumo excessivo de álcool pode ser prejudicial à saúde. ';
        linkDicas.push({
            link: 'https://www.saude.gov.br/saude-de-a-z/alcoolismo',
            titulo: 'Perigos de consumir álcool para a saúde'
        }) 
    }
    
    document.getElementById('mensagemPrincipal').innerText = comentarioPrincipal
    document.getElementById('mensagem').innerText = comentario

    for(let i = 0; i<linkDicas.length; i += 1){
        const novoLink = document.createElement('a');
        novoLink.target = '_blank'
        novoLink.href = linkDicas[i].link;
        novoLink.textContent = linkDicas[i].titulo;
        novoLink.classList.add('link')
        document.getElementById('modal').appendChild(novoLink);
    }

    modal.style.visibility = 'initial';
}

function calcularMediaPercentualGordura(sexo, idade) {

    if (sexo === 'feminino' && idade === 'jovem') {
        return 20;
    } else if (sexo === 'masculino' && idade === 'adulto') {
        return 15; 
    } else {
        return 'nao-sei';
    }
}

function closeModal() {
    const links = document.getElementsByClassName('link');
    for(let i = 0; i<links.length; i += 1){
        links[i].remove();
    }
    const modal = document.getElementById('modal-backdrop');
    modal.style.visibility = 'hidden';

}