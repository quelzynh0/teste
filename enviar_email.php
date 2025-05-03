<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "quelzynh0@hotmail.com";
    $subject = "Nova Resposta - Ficha de Avaliação de Skincare";

    $nome = isset($_POST['nome']) ? $_POST['nome'] : '';
    $data_nascimento = isset($_POST['data-nascimento']) ? $_POST['data-nascimento'] : '';
    $cpf = isset($_POST['cpf']) ? $_POST['cpf'] : '';
    $rg = isset($_POST['rg']) ? $_POST['rg'] : '';
    $telefone = isset($_POST['telefone']) ? $_POST['telefone'] : '';
    $endereco = isset($_POST['endereco']) ? $_POST['endereco'] : '';

    $cirurgia = isset($_POST['cirurgia']) ? $_POST['cirurgia'] : '';
    $cirurgia_qual = isset($_POST['cirurgia-qual']) ? $_POST['cirurgia-qual'] : '';
    $gestante = isset($_POST['gestante']) ? $_POST['gestante'] : '';
    $figado_rim = isset($_POST['figado-rim']) ? $_POST['figado-rim'] : '';
    $fumante = isset($_POST['fumante']) ? $_POST['fumante'] : '';
    $remedio = isset($_POST['remedio']) ? $_POST['remedio'] : '';
    $remedio_qual = isset($_POST['remedio-qual']) ? $_POST['remedio-qual'] : '';
    $hepatite = isset($_POST['hepatite']) ? $_POST['hepatite'] : '';
    $anticoncepcional = isset($_POST['anticoncepcional']) ? $_POST['anticoncepcional'] : '';
    $anticoncepcional_qual = isset($_POST['anticoncepcional-qual']) ? $_POST['anticoncepcional-qual'] : '';
    $diabetes = isset($_POST['diabetes']) ? $_POST['diabetes'] : '';
    $alergia = isset($_POST['alergia']) ? $_POST['alergia'] : '';
    $alergia_qual = isset($_POST['alergia-qual']) ? $_POST['alergia-qual'] : '';
    $asma = isset($_POST['asma']) ? $_POST['asma'] : '';
    $pressao = isset($_POST['pressao']) ? $_POST['pressao'] : '';
    $pressao_qual = isset($_POST['pressao-qual']) ? $_POST['pressao-qual'] : '';
    $cardiaco = isset($_POST['cardiaco']) ? $_POST['cardiaco'] : '';
    $tratamento = isset($_POST['tratamento']) ? $_POST['tratamento'] : '';
    $tratamento_qual = isset($_POST['tratamento-qual']) ? $_POST['tratamento-qual'] : '';
    $convulsao = isset($_POST['convulsao']) ? $_POST['convulsao'] : '';
    $renal = isset($_POST['renal']) ? $_POST['renal'] : '';
    $tontura = isset($_POST['tontura']) ? $_POST['tontura'] : '';
    $pele = isset($_POST['pele']) ? $_POST['pele'] : '';
    $objetivo = isset($_POST['objetivo']) ? $_POST['objetivo'] : '';
    $alimentacao = isset($_POST['alimentacao']) ? $_POST['alimentacao'] : '';
    $rotina = isset($_POST['rotina']) ? $_POST['rotina'] : '';

    $data = isset($_POST['data']) ? $_POST['data'] : '';
    $assinatura = isset($_POST['assinatura']) ? $_POST['assinatura'] : '';

    $body = "=== Dados Pessoais ===\n";
    $body .= "Nome: $nome\n";
    $body .= "Data de Nascimento: $data_nascimento\n";
    $body .= "CPF: $cpf\n";
    $body .= "RG: $rg\n";
    $body .= "Telefone: $telefone\n";
    $body .= "Endereço: $endereco\n\n";

    $body .= "=== Histórico de Saúde ===\n";
    $body .= "Já fez alguma cirurgia? $cirurgia\n";
    $body .= "Se sim, qual? $cirurgia_qual\n";
    $body .= "Está gestante? $gestante\n";
    $body .= "Problemas no fígado ou rim? $figado_rim\n";
    $body .= "Você é fumante? $fumante\n";
    $body .= "Toma algum remédio? $remedio\n";
    $body .= "Se sim, qual? $remedio_qual\n";
    $body .= "Já teve hepatite? $hepatite\n";
    $body .= "Toma anticoncepcional? $anticoncepcional\n";
    $body .= "Se sim, qual? $anticoncepcional_qual\n";
    $body .= "Tem diabetes? $diabetes\n";
    $body .= "Alergia a medicamento? $alergia\n";
    $body .= "Se sim, qual? $alergia_qual\n";
    $body .= "Tem asma? $asma\n";
    $body .= "Sabe qual é a sua pressão? $pressao\n";
    $body .= "Se sim, qual? $pressao_qual\n";
    $body .= "Tem problema cardíaco? $cardiaco\n";
    $body .= "Faz tratamento médico? $tratamento\n";
    $body .= "Se sim, qual? $tratamento_qual\n";
    $body .= "Já teve convulsão? $convulsao\n";
    $body .= "Tem problema renal? $renal\n";
    $body .= "Costuma sentir tontura? $tontura\n";
    $body .= "Como é a sua pele normalmente? $pele\n";
    $body .= "Objetivo do tratamento: $objetivo\n";
    $body .= "Como é a sua alimentação? $alimentacao\n";
    $body .= "Como é a sua rotina? $rotina\n\n";

    $body .= "=== Termo de Compromisso ===\n";
    $body .= "Data: $data\n";
    $body .= "Assinatura: $assinatura\n";

    $headers = "From: no-reply@seusite.com\r\n";
    $headers .= "Reply-To: no-reply@seusite.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "E-mail enviado com sucesso! Você receberá as informações em breve.";
    } else {
        echo "Falha ao enviar o e-mail. Tente novamente mais tarde.";
    }
} else {
    echo "Método de requisição inválido.";
}
?>