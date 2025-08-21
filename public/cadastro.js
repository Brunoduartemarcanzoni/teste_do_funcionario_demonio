async function cadastrarAluno(event) {
    event.preventDefault();

    const aluno = {
        nome: document.getElementById('aluno-nome').value,
        telefone: document.getElementById('aluno-telefone').value,
        email: document.getElementById('aluno-email').value,
        cpf: document.getElementById('aluno-cpf').value,
        rg: document.getElementById('aluno-rg').value,
        genero: document.getElementById('aluno-genero').value,
        data_de_nascimento: document.getElementById('aluno-data-nascimento').value,
        cep: document.getElementById('aluno-cep').value,
        logradouro: document.getElementById('aluno-logradouro').value,
        numero: document.getElementById('aluno-numero').value,
        complemento: document.getElementById('aluno-complemento').value,
        cidade: document.getElementById('aluno-cidade').value,
        bairro: document.getElementById('aluno-bairro').value,
        estado: document.getElementById('aluno-estado').value,
        numero_de_matricula: document.getElementById('aluno-matricula').value,
        curso: document.getElementById('aluno-curso').value,
        periodo: document.getElementById('aluno-periodo').value,
        turno: document.getElementById('aluno-turno').value,
        nome_responsavel: document.getElementById('resp0-nome').value,
        telefone_responsavel: document.getElementById('resp0-telefone').value,
        parentesco_responsavel: document.getElementById('resp0-parentesco').value,
        cpf_responsavel: document.getElementById('resp0-cpf').value,
        email_responsavel: document.getElementById('resp0-email').value
    };
       
    try {
        const response = await fetch('/aluno', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(aluno)
        });

        const result = await response.json();
        if (response.ok) {
            alert('Cliente cadastrado com sucesso!');
            //document.getElementById('cliente-form').reset();
        } else {
            alert(`Erro: ${result.message}`);
        }
    } catch (err) {
        console.error('Erro na solicitação:', err);
        alert('Erro ao cadastrar cliente.');
    }
}
