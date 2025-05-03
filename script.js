// Define a data atual no campo "Data"
document.addEventListener('DOMContentLoaded', () => {
    const hoje = new Date('2025-05-03'); // Data atual: 03/05/2025
    const dataFormatada = hoje.toISOString().split('T')[0]; // Formato: 2025-05-03
    document.getElementById('data').value = dataFormatada;
});

// Função para atualizar o campo Assinatura com o valor do Nome
function atualizarAssinatura() {
    const nome = document.getElementById('nome').value;
    document.getElementById('assinatura').value = nome;
}

// Função para mostrar/esconder os campos "Qual?"
function toggleField(radioId, fieldId) {
    const radio = document.getElementById(radioId);
    const fieldContainer = document.getElementById(`${fieldId}-container`);
    fieldContainer.style.display = radio.checked ? 'block' : 'none';
}

// Função para formatar a data no formato dia/mês/ano
function formatarData(data) {
    if (!data) return '';
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`;
}

// Função para adicionar os emoticons como caracteres Unicode
function adicionarEmoticon(resposta) {
    if (resposta === 'sim') return '\u2705'; // ✅
    if (resposta === 'nao') return '\u274C'; // ❌
    return '';
}

// Função para enviar os dados para o WhatsApp
function enviarParaWhatsApp(event) {
    event.preventDefault(); // Impede o comportamento padrão do formulário

    // Coleta os dados do formulário
    const form = document.getElementById('form-avaliacao');
    const formData = new FormData(form);

    // Monta a mensagem com os emoticons como caracteres Unicode
    let mensagem = "=== Dados Pessoais ===\n";
    mensagem += `Nome: ${formData.get('nome') || ''}\n`;
    mensagem += `Data de Nascimento: ${formatarData(formData.get('data-nascimento'))}\n`;
    mensagem += `CPF: ${formData.get('cpf') || ''}\n`;
    mensagem += `RG: ${formData.get('rg') || ''}\n`;
    mensagem += `Telefone: ${formData.get('telefone') || ''}\n`;
    mensagem += `Endereço: ${formData.get('endereco') || ''}\n\n`;

    mensagem += "=== Histórico de Saúde ===\n";
    const cirurgia = formData.get('cirurgia') || '';
    mensagem += `Já fez alguma cirurgia? ${adicionarEmoticon(cirurgia)}${cirurgia === 'sim' ? ` Qual? ${formData.get('cirurgia-qual') || ''}` : ''}\n`;
    
    const gestante = formData.get('gestante') || '';
    mensagem += `Está gestante? ${adicionarEmoticon(gestante)}\n`;
    
    const figadoRim = formData.get('figado-rim') || '';
    mensagem += `Problemas no fígado ou rim? ${adicionarEmoticon(figadoRim)}\n`;
    
    const fumante = formData.get('fumante') || '';
    mensagem += `Você é fumante? ${adicionarEmoticon(fumante)}\n`;
    
    const remedio = formData.get('remedio') || '';
    mensagem += `Toma algum remédio? ${adicionarEmoticon(remedio)}${remedio === 'sim' ? ` Qual? ${formData.get('remedio-qual') || ''}` : ''}\n`;
    
    const hepatite = formData.get('hepatite') || '';
    mensagem += `Já teve hepatite? ${adicionarEmoticon(hepatite)}\n`;
    
    const anticoncepcional = formData.get('anticoncepcional') || '';
    mensagem += `Toma anticoncepcional? ${adicionarEmoticon(anticoncepcional)}${anticoncepcional === 'sim' ? ` Qual? ${formData.get('anticoncepcional-qual') || ''}` : ''}\n`;
    
    const diabetes = formData.get('diabetes') || '';
    mensagem += `Tem diabetes? ${adicionarEmoticon(diabetes)}\n`;
    
    const alergia = formData.get('alergia') || '';
    mensagem += `Alergia a medicamento? ${adicionarEmoticon(alergia)}${alergia === 'sim' ? ` Qual? ${formData.get('alergia-qual') || ''}` : ''}\n`;
    
    const asma = formData.get('asma') || '';
    mensagem += `Tem asma? ${adicionarEmoticon(asma)}\n`;
    
    const pressao = formData.get('pressao') || '';
    mensagem += `Sabe qual é a sua pressão? ${adicionarEmoticon(pressao)}${pressao === 'sim' ? ` Qual? ${formData.get('pressao-qual') || ''}` : ''}\n`;
    
    const cardiaco = formData.get('cardiaco') || '';
    mensagem += `Tem problema cardíaco? ${adicionarEmoticon(cardiaco)}\n`;
    
    const tratamento = formData.get('tratamento') || '';
    mensagem += `Faz tratamento médico? ${adicionarEmoticon(tratamento)}${tratamento === 'sim' ? ` Qual? ${formData.get('tratamento-qual') || ''}` : ''}\n`;
    
    const convulsao = formData.get('convulsao') || '';
    mensagem += `Já teve convulsão? ${adicionarEmoticon(convulsao)}\n`;
    
    const renal = formData.get('renal') || '';
    mensagem += `Tem problema renal? ${adicionarEmoticon(renal)}\n`;
    
    const tontura = formData.get('tontura') || '';
    mensagem += `Costuma sentir tontura? ${adicionarEmoticon(tontura)}\n`;
    
    mensagem += `Como é a sua pele normalmente? ${formData.get('pele') || ''}\n`;
    mensagem += `Objetivo do tratamento: ${formData.get('objetivo') || ''}\n`;
    mensagem += `Como é a sua alimentação? ${formData.get('alimentacao') || ''}\n`;
    mensagem += `Como é a sua rotina? ${formData.get('rotina') || ''}\n\n`;

    mensagem += "=== Termo de Compromisso ===\n";
    mensagem += `Data: ${formatarData(formData.get('data'))}\n`;
    mensagem += `Assinatura: ${formData.get('assinatura') || ''}\n`;

    // Codifica a mensagem com encodeURIComponent
    const mensagemCodificada = encodeURIComponent(mensagem);

    // Link do WhatsApp no formato correto
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=5513991766125&text=${mensagemCodificada}`;

    // Abre o WhatsApp
    window.open(urlWhatsApp, '_blank');
}