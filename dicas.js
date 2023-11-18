function filterTips(){
    const filtro = document.getElementById('filterOptions').value
    const textoPrincipal = document.getElementById('textoPrincipal')
    const alimentacao = `
        <h1>Dicas de Alimentação para uma Vida Saudável</h1>
        <p>Manter uma alimentação saudável é fundamental para o bem-estar geral. Aqui estão algumas dicas para promover escolhas alimentares equilibradas:</p>

        <h2>1. Variedade de Alimentos:</h2>
        <p>Inclua uma variedade de alimentos em suas refeições para garantir a ingestão de diferentes nutrientes essenciais para o corpo.</p>

        <h2>2. Frutas e Vegetais:</h2>
        <p>Consuma pelo menos cinco porções de frutas e vegetais por dia. Eles são ricos em vitaminas, minerais e fibras.</p>

        <h2>3. Grãos Integrais:</h2>
        <p>Opte por grãos integrais em vez de refinados para obter benefícios adicionais de fibras e nutrientes.</p>

        <h2>4. Proteínas Magras:</h2>
        <p>Inclua fontes de proteínas magras, como peito de frango, peixe, legumes e tofu, para manter a saúde muscular.</p>

        <h2>5. Controle das Porções:</h2>
        <p>Monitore o tamanho das porções para evitar excessos. Comer com moderação é essencial para manter um peso saudável.</p>

        <h2>6. Hidratação Adequada:</h2>
        <p>Beber água suficiente é crucial para o funcionamento adequado do corpo. Substitua refrigerantes por água sempre que possível.</p>

        <h2>7. Limitação de Alimentos Processados:</h2>
        <p>Reduza o consumo de alimentos processados, ricos em açúcares adicionados, sódio e gorduras saturadas.</p>

        <h2>8. Planejamento de Refeições:</h2>
        <p>Planeje suas refeições com antecedência para evitar escolhas alimentares impulsivas e garantir uma dieta balanceada.</p>

        <p>
            Lembre-se, uma alimentação saudável é essencial para uma vida equilibrada. Consulte um nutricionista para orientações personalizadas.
        </p>
    `
    const exercicio = `
        <h1>Dicas e Importância do Exercício Físico</h1>
        <p>A prática regular de exercícios físicos é crucial para manter uma vida saudável. Aqui estão algumas dicas e razões para incluir o exercício em sua rotina:</p>

        <h2>1. Variedade de Atividades:</h2>
        <p>Escolha uma variedade de exercícios para envolver diferentes grupos musculares e evitar o tédio.</p>

        <h2>2. Cardiovascular e Aeróbico:</h2>
        <p>Inclua atividades cardiovasculares, como corrida ou natação, para fortalecer o sistema cardiovascular e melhorar a resistência.</p>

        <h2>3. Treinamento de Força:</h2>
        <p>Adicione treinamento de força, como levantamento de pesos, para fortalecer músculos e ossos, promovendo a saúde óssea.</p>

        <h2>4. Flexibilidade e Alongamento:</h2>
        <p>Pratique exercícios de flexibilidade e alongamento para melhorar a amplitude de movimento e prevenir lesões musculares.</p>

        <h2>5. Consistência na Rotina:</h2>
        <p>Mantenha uma rotina consistente de exercícios, seja diariamente ou algumas vezes por semana, para obter benefícios duradouros.</p>

        <h2>6. Benefícios Mentais:</h2>
        <p>O exercício não apenas beneficia o corpo, mas também a mente, reduzindo o estresse, melhorando o humor e aumentando a concentração.</p>

        <h2>7. Adequação às Preferências:</h2>
        <p>Escolha atividades que você desfrute para tornar o exercício mais prazeroso e sustentável a longo prazo.</p>

        <h2>8. Consulta Profissional:</h2>
        <p>Antes de iniciar um novo programa de exercícios, consulte um profissional de saúde para garantir que seja seguro e adequado ao seu estado físico.</p>

        <p>
            Lembre-se, a prática regular de exercícios é uma parte essencial de um estilo de vida saudável. Adaptar atividades físicas às suas preferências tornará o processo mais agradável.
        </p>
    `
    const doencas = `
        <h1>Dicas Gerais de Saúde: Prevenção e Cuidados</h1>
        <p>Cuidar da saúde de forma abrangente é essencial para prevenir doenças e promover o bem-estar. Aqui estão algumas dicas gerais sobre como manter uma boa saúde:</p>

        <h2>1. Consultas Médicas Regulares:</h2>
        <p>Agende check-ups anuais para monitorar sua saúde geral. Exames preventivos podem identificar problemas precocemente.</p>

        <h2>2. Conhecendo seu Histórico Genético:</h2>
        <p>Entenda seu histórico familiar para estar ciente de possíveis predisposições genéticas a doenças. Compartilhe essas informações com seu médico.</p>

        <h2>3. Vacinação Atualizada:</h2>
        <p>Mantenha suas vacinas em dia para proteção contra doenças infecciosas. Consulte seu médico para um plano de vacinação apropriado.</p>

        <h2>4. Prática de Sexo Seguro:</h2>
        <p>Use métodos de proteção para prevenir doenças sexualmente transmissíveis (DSTs). Converse abertamente com seu parceiro sobre saúde sexual.</p>

        <h2>5. Higiene Pessoal:</h2>
        <p>Adote práticas de higiene pessoal, como lavagem adequada das mãos, para prevenir infecções e doenças contagiosas.</p>

        <h2>6. Estilo de Vida Ativo:</h2>
        <p>Incorpore exercícios regulares e mantenha um estilo de vida ativo para fortalecer o sistema imunológico e melhorar a saúde cardiovascular.</p>

        <h2>7. Dieta Balanceada:</h2>
        <p>Consuma uma dieta equilibrada com alimentos nutritivos para fornecer os nutrientes essenciais ao corpo.</p>

        <h2>8. Controle do Estresse:</h2>
        <p>Encontre métodos eficazes para gerenciar o estresse, como meditação e atividades relaxantes, para preservar a saúde mental.</p>

        <p>
            Lembre-se de que a prevenção é fundamental. Consultar profissionais de saúde regularmente e adotar práticas saudáveis contribuirá para uma vida mais longa e plena.
        </p>
    `
    if(filtro === 'alimentacao'){
        textoAdicionado = alimentacao
    }
    else if(filtro === 'doencas'){
        textoAdicionado = doencas
    }
    else if(filtro === 'exercicio'){
        textoAdicionado = exercicio
    }
    textoPrincipal.innerHTML = textoAdicionado
}

