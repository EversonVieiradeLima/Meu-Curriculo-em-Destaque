/**
 * Quando o usuário pressiona a tecla Enter, o foco é definido para o elemento de entrada com o id que é passado * para a função.
 * @param idInput - A ID do campo de entrada que você deseja focar.
 */
function EnterTab(idInput) {
   document.getElementById(idInput).focus();
}

/**
 * Ele adiciona um parêntese ao início do número de telefone, um espaço após o código de área e um hífen após os * três primeiros dígitos do número de telefone.
 * @param telefone - o nome do campo de entrada
 */
function mascaraTelefone(telefone) {
   if(telefone.value.length == 0) {
       telefone.value = '(' + telefone.value; //quando começamos a digitar, o script irá inserir um parênteses no começo do campo.
   }
   if(telefone.value.length == 3) {
       telefone.value = telefone.value + ') '; //quando o campo já tiver 3 caracteres (um parênteses e 2 números) o script irá inserir mais um parênteses, fechando assim o código de área.
   }
   if(telefone.value.length == 10) {
       telefone.value = telefone.value + '-'; //quando o campo já tiver 10 caracteres, o script irá inserir um tracinho, para menlhor visualização do telefone.
   }
}

/**
* Se o comprimento do valor da entrada de idade for 2, adicione a string 'anos' ao valor da entrada de idade.
* @param idade - O campo de entrada
*/
function mascaraIdade(idade) {
   if(idade.value.length == 2) {
       idade.value = idade.value + ' anos';
   }
}

/**
 * Se o comprimento do valor da entrada for 5, adicione um traço ao final do valor.
 * @param cep - O campo de entrada que será mascarado.
 */
function mascaraCep(cep) {
   if(cep.value.length == 5) {
       cep.value = cep.value + '-';
   }
}

/**
 * Ele cria um rótulo, uma entrada e uma descrição para a entrada.
 */
function grauEscolaridade() {

    /**
     * Ele cria um rótulo, uma entrada e uma descrição e os anexa a um div.
     * </code>
     * @param dataDiv - O data-attributes do div que receberá os elementos.
     * @param label - O texto que será exibido ao lado da entrada.
     * @param inputName - O nome da entrada.
     * @param classInput - A classe da entrada.
     * @param idInput - O id da entrada.
     * @param enterTab - A função que será chamada quando o usuário pressionar a tecla enter.
     * @param dataInput - O data-attributes que será usado para selecionar a entrada.
     * @param descricao - O texto que será exibido abaixo da entrada.
     * @returns Nothing.
     */
    const escolaridade = document.querySelector('[data-inputEscolaridade]');
    
    function curso(dataDiv, label, inputName, classInput, idInput, enterTab, dataInput, descricao) {

        if(tipoEscolaridade1.includes(escolaridade.value)) {
            return
        } else if(tipoEscolaridade2.includes(escolaridade.value)) {

            
            const box = document.querySelector(dataDiv);
            
            const tagLabel = document.createElement('label');
            tagLabel.setAttribute('for', idInput);
            tagLabel.textContent = label;
            
            const tagB1 = document.createElement('b');
            tagB1.setAttribute('class', 'asterisco');
            tagB1.textContent = '*';
            
            const tagInput = document.createElement('input');
            tagInput.setAttribute('name', inputName)
            tagInput.setAttribute('id', idInput);
            tagInput.setAttribute('class', classInput);
            tagInput.setAttribute(dataInput, '');
            tagInput.setAttribute('onkeypress', enterTab);
            tagInput.setAttribute('required', 'true');
            
            const tagB2 = document.createElement('b');
            tagB2.setAttribute('class', 'input--descricao');
            tagB2.textContent = descricao;
            
            /* Anexando os elementos ao div. */
            box.appendChild(tagLabel);
            tagLabel.appendChild(tagB1);
            box.appendChild(tagInput);
            box.appendChild(tagB2);
            
            /* Configurando o atributo onkeypress do elemento inputEscolaridade para a função EnterTab. */
            const inputEscolaridade = document.querySelector('[data-inputEscolaridade]');
            inputEscolaridade.setAttribute('onkeypress', "EnterTab('inputCurso')");
        }
    }
    
    curso('[data-curso]', 'Curso:', 'curso', 'inputCurso', 'inputCurso', "EnterTab('inputSemestre')", "data-inputCurso", '');
    curso('[data-semestre]', 'Semestre:', 'semestre', 'inputSemestre', 'inputSemestre', "EnterTab('inputInstituicao')", 'data-inputSemestre', 'Ex: 1º, 2º, 3º');
    curso('[data-instituicao]', 'Instituição:', 'instituicao', 'inputInstituicao', 'inputInstituicao', "EnterTab('inputDuracao')", 'data-inputInstituicao', '');
    curso('[data-duracao]', 'Duração:', 'duracao', 'inputDuracao', 'inputDuracao', "EnterTab('inputConclusao')", 'data-inputDuracao', 'Ex: 8 horas, 2 meses, 1 ano');
    curso('[data-conclusao]', 'Ano de conclusão:', 'anoDeConclusao', 'inputConclusao', 'inputConclusao', "EnterTab('objetivos')", 'data-inputConclusao', 'Somente números');
    
}

let contadorDeCursos = 1;
document.querySelector("[data-inputButton-adicionarCursos]").addEventListener("click", function() {
    let numero = parseInt(contadorDeCursos) + 1;
    contadorDeCursos = numero;

    if(contadorDeCursos == 5) {
        const deletBotao = document.querySelector("[data-inputButton-adicionarCursos]");
        deletBotao.parentNode.removeChild(deletBotao);
    }
});

let contadorAddCursos = 1;
function botaoAdicionarCursos() {
    contadorAddCursos ++;
    const pai = document.querySelector("[data-campos-cursosOuEventos]");

    const adicionarDivTipo1 = function() {
        const addDivPai = document.createElement('div');
        addDivPai.setAttribute('class', 'campos__cursosOuEventos');

        const adicionarDivTipo2 = function(classDiv, idInput, descricaoLabel, nameInput, classInput, dataInput, descricaoB) {
            
            const addDivFilho = document.createElement('div');
            addDivFilho.classList.add('campos--comuns');
            addDivFilho.classList.add(classDiv);
    
            const addLabel = document.createElement('label');
            addLabel.setAttribute('for', idInput);
            addLabel.textContent = descricaoLabel;

            const addInput = document.createElement('input');
            addInput.setAttribute('type', 'text');
            addInput.setAttribute('name', nameInput);
            addInput.setAttribute('id', idInput);
            addInput.setAttribute('class', classInput);
            addInput.setAttribute(dataInput, '');

            const addB = document.createElement('b');
            addB.setAttribute('class', 'input--descricao');
            addB.textContent = descricaoB;

            addDivPai.appendChild(addDivFilho);
            addDivFilho.appendChild(addLabel);
            addDivFilho.appendChild(addInput);
            addDivFilho.appendChild(addB);
        }

        const adicionarDivTipo3 = function() {
            
            const addDivFilho = document.createElement('div');
            addDivFilho.classList.add('campos--comuns');
            addDivFilho.classList.add('campos__cursosOuEventos__descricao');
    
            const addLabel = document.createElement('label');
            addLabel.setAttribute('for', 'textareaDescricaoCurso' + contadorAddCursos);
            addLabel.textContent = 'Descrição:';

            const addTextarea = document.createElement('textarea');
            addTextarea.setAttribute('name', 'descricaoCurso' + contadorAddCursos);
            addTextarea.setAttribute('id', 'textareaDescricaoCurso' + contadorAddCursos);
            addTextarea.setAttribute('class', 'textarea--padrao');
            addTextarea.setAttribute('data-textareaDescricaoCurso' + contadorAddCursos, '');
            addTextarea.setAttribute('cols', '30');
            addTextarea.setAttribute('rows', '10');

            addDivPai.appendChild(addDivFilho);
            addDivFilho.appendChild(addLabel);
            addDivFilho.appendChild(addTextarea);
        }

        pai.appendChild(addDivPai);

        adicionarDivTipo2('campos__cursosOuEventos__cursoEvento', 'inputCursoEvento' + contadorAddCursos, 'Curso/Evento:', 'cursoOuEvento' + contadorAddCursos, 'inputCurso', 'data-inputCursoEvento' + contadorAddCursos, '');
        adicionarDivTipo2('campos__cursosOuEventos__instituicao', 'inputInstituicaoCurso' + contadorAddCursos, 'Instituição:', 'instituicaoCurso' + contadorAddCursos, 'inputInstituicao', 'data-inputInstituicaoCurso' + contadorAddCursos, '');
        adicionarDivTipo2('campos__cursosOuEventos__duracao', 'inputDuracaoCurso' + contadorAddCursos, 'Duração:', 'duracaoCurso' + contadorAddCursos, 'inputDuracao', 'data-inputDuracaoCurso' + contadorAddCursos, 'Ex: 8 horas, 2 meses, 1 ano');
        adicionarDivTipo2('campos__cursosOuEventos__conclusao', 'inputConclusaoCurso' + contadorAddCursos, 'Ano de conclusão:', 'conclusaoCurso' + contadorAddCursos, 'inputConclusao', 'data-inputConclusaoCurso' + contadorAddCursos, 'Somente números');
        adicionarDivTipo3();

    }

    adicionarDivTipo1();
}

let contadorDeIdiomas = 1;
document.querySelector("[data-inputButton-adicionarIdiomas]").addEventListener("click", function() {
    contadorDeIdiomas++;

    if(contadorDeIdiomas == 4) {
        const deletBotao = document.querySelector("[data-inputButton-adicionarIdiomas]");
        deletBotao.parentNode.removeChild(deletBotao);
    }
});

let contadorAddIdiomas = 1;
function botaoAdicionarIdiomas() {
    contadorAddIdiomas++;
    const pai = document.querySelector("[data-conhecimentosEmIdiomas]");

    const adicionarDivTipo1 = function() {
        const addDivPai = document.createElement('div');
        addDivPai.setAttribute('class', 'campos__conhecimentos');

        const adicionarDivTipo2 = function() {
            const addDivFilho = document.createElement('div');
            addDivFilho.classList.add('campos--comuns');
            addDivFilho.classList.add('campos__conhecimentos__idioma');

            const addLabel = document.createElement('label');
            addLabel.setAttribute('for', 'inputIdioma' + contadorAddIdiomas);
            addLabel.textContent = 'Idioma:';

            const addInput = document.createElement('input');
            addInput.setAttribute('type', 'text');
            addInput.setAttribute('name', 'idioma' + contadorAddIdiomas);
            addInput.setAttribute('id', 'inputIdioma' + contadorAddIdiomas);
            addInput.classList.add('inputIdioma');
            addInput.classList.add('input-idiomas');
            addInput.setAttribute('data-inputIdioma' + contadorAddIdiomas, '');

            addDivPai.appendChild(addDivFilho);
            addDivFilho.appendChild(addLabel);
            addDivFilho.appendChild(addInput);
        }

        const adicionarDivTipo3 = function(classDiv, idInput, descricaoLabel, nameInput, classInput, dataInput) {
            const addDivFilho = document.createElement('div');
            addDivFilho.classList.add('campos--comuns');
            addDivFilho.classList.add(classDiv);

            const addLabel = document.createElement('label');
            addLabel.setAttribute('for', idInput + contadorAddIdiomas);
            addLabel.textContent = descricaoLabel;

            const addInput = document.createElement('input');
            addInput.setAttribute('list', 'opcoesGrausIdiomas');
            addInput.setAttribute('name', nameInput + contadorAddIdiomas);
            addInput.setAttribute('id', idInput + contadorAddIdiomas);
            addInput.classList.add(classInput);
            addInput.classList.add('input-idiomas');
            addInput.setAttribute(dataInput + contadorAddIdiomas, '');

            addDivPai.appendChild(addDivFilho);
            addDivFilho.appendChild(addLabel);
            addDivFilho.appendChild(addInput);
        }

        pai.appendChild(addDivPai);

        adicionarDivTipo2();
        adicionarDivTipo3('campos__conhecimentos__compreesao', 'inputCompreesao', 'Compreensão:', 'compreesao', 'inputCompreesao', 'data-inputCompreesao');
        adicionarDivTipo3('campos__conhecimentos__escrita', 'inputEscrita', 'Escrita:', 'escrita', 'inputEscrita', 'data-inputEscrita');
        adicionarDivTipo3('campos__conhecimentos__fala', 'inputFala', 'Fala:', 'fala', 'inputFala', 'data-inputFala');
        adicionarDivTipo3('campos__conhecimentos__leitura', 'inputLeitura', 'Leitura:', 'leitura', 'inputLeitura', 'data-inputLeitura');
    }

    adicionarDivTipo1();
    
}

let contadorDeConhecimentosTecnicos = 1;
document.querySelector("[data-inputButton-adicionarConhecimentosTecnicos]").addEventListener("click", function() {
    contadorDeConhecimentosTecnicos++;

    if(contadorDeConhecimentosTecnicos == 20) {
        const deletBotao = document.querySelector("[data-inputButton-adicionarConhecimentosTecnicos]");
        deletBotao.parentNode.removeChild(deletBotao);
    }
});

let contadorAddConhecimentosTecnicos = 1;
function botaoAdicionarConhecimentosTecnicos() {
    contadorAddConhecimentosTecnicos++;
    const pai = document.querySelector("[data-conhecimentosTecnicos]");

    const divPai = document.createElement('div');
    divPai.setAttribute('class', 'campos__conhecimentosTecnicos');

    const divFilho1 = document.createElement('div');
    divFilho1.classList.add('campos--comuns');
    divFilho1.classList.add('campos__conhecimentosTecnicos__conhecimentos');

    const labelFilho1 = document.createElement('label');
    labelFilho1.setAttribute('for', 'inputConhecimento' + contadorAddConhecimentosTecnicos);
    labelFilho1.textContent = 'Conhecimentos:';

    const inputFilho1 = document.createElement('input');
    inputFilho1.setAttribute('name', 'conhecimentoTecnico' + contadorAddConhecimentosTecnicos);
    inputFilho1.setAttribute('id', 'inputConhecimento' + contadorAddConhecimentosTecnicos);
    inputFilho1.setAttribute('class', 'inputConhecimento');
    inputFilho1.setAttribute('data-inputConhecimento' + contadorAddConhecimentosTecnicos, '');


    const divFilho2 = document.createElement('div');
    divFilho2.classList.add('campos--comuns');
    divFilho2.classList.add('campos__conhecimentosTecnicos__Nivel');

    const labelFilho2 = document.createElement('label');
    labelFilho2.setAttribute('for', 'inputNivel' + contadorAddConhecimentosTecnicos);
    labelFilho2.textContent = 'Nível de conhecimento:';

    const inputFilho2 = document.createElement('input');
    inputFilho2.setAttribute('list', 'niveis')
    inputFilho2.setAttribute('name', 'nivelConhecimento' + contadorAddConhecimentosTecnicos);
    inputFilho2.setAttribute('id', 'inputNivel' + contadorAddConhecimentosTecnicos);
    inputFilho2.setAttribute('class', 'inputNivel');
    inputFilho2.setAttribute('data-inputNivel' + contadorAddConhecimentosTecnicos, '');


    pai.appendChild(divPai);

    divPai.appendChild(divFilho1);
    divFilho1.appendChild(labelFilho1);
    divFilho1.appendChild(inputFilho1);

    divPai.appendChild(divFilho2);
    divFilho2.appendChild(labelFilho2);
    divFilho2.appendChild(inputFilho2);

}

/**
 * Se a caixa de seleção estiver marcada, oculte a entrada de data. Se a caixa de seleção não estiver marcada,   * mostra a entrada de data.
 * </code>
 * @param dataAtualmente - O data-attribute da caixa de seleção
 * @param dataPeriodoFinal - O data-attribute da entrada que será ocultado ou mostrado.
 */
function check(dataAtualmente, dataPeriodoFinal) {
    const check = document.querySelector(dataAtualmente);
    if(check.checked) {
        const dataFinal = document.querySelector(dataPeriodoFinal);
        dataFinal.setAttribute('style', 'display:none');
    } else {
        const dataFinal = document.querySelector(dataPeriodoFinal);
        dataFinal.setAttribute('style', 'display:block');
    }
}

function check1() {
    check("[data-inputAtualmente1]", "[data-periodo-final1]");
}

function check2() {
    check("[data-inputAtualmente2]", "[data-periodo-final2]");
}

function check3() {
    check("[data-inputAtualmente3]", "[data-periodo-final3]");
}

let contadorDeExperiencias = 1;
document.querySelector("[data-inputButton-adicionarExperiencia]").addEventListener("click", function() {
    let numero = parseInt(contadorDeExperiencias) + 1;
    contadorDeExperiencias = numero;
    
    if(contadorDeExperiencias == 3) {
        const deletBotao = document.querySelector("[data-inputButton-adicionarExperiencia]");
        deletBotao.parentNode.removeChild(deletBotao);
    }
});

let contadorAddExperiencia = 1;
function botaoAdicionarExperiencia() { 

    contadorAddExperiencia++
    const pai = document.querySelector("[data-campos-experiencias]");

    const linhaDivisoria = document.createElement('hr');
    linhaDivisoria.setAttribute('class', 'linhaDivisoria');
    pai.appendChild(linhaDivisoria);
    
    const adicionarDivTipo1 = function(classDiv, forLabel, descricaoLabel, inputName, idInput, classInput, dataInput) {
        const addDiv = document.createElement('div');
        addDiv.classList.add('campos--comuns');
        addDiv.classList.add(classDiv);
        addDiv.classList.add('campos--comuns--espacamentos');
        
        const label = document.createElement('label');
        label.setAttribute('for', forLabel);
        label.textContent = descricaoLabel;

        const input = document.createElement('input');
        input.setAttribute('name', inputName);
        input.setAttribute('id', idInput);
        input.setAttribute('class', classInput);
        input.setAttribute(dataInput, '');

        pai.appendChild(addDiv);
        addDiv.appendChild(label);
        addDiv.appendChild(input);
    }

    const adicionarDivTipo2 = function() {
        const addDiv = document.createElement('div');
        addDiv.classList.add('campos--comuns');
        addDiv.classList.add('campos__experiencias__estadoDaEmpresa');
        addDiv.classList.add('campos--comuns--espacamentos');
        
        const label = document.createElement('label');
        label.setAttribute('for', 'inputEstadoDaEmpresa' + contadorAddExperiencia);
        label.textContent = 'Estado:';

        const input = document.createElement('input');
        input.setAttribute('list', 'estados');
        input.setAttribute('name', 'estadoDaEmpresa' + contadorAddExperiencia);
        input.setAttribute('id', 'inputEstadoDaEmpresa' + contadorAddExperiencia);
        input.setAttribute('class', 'inputEstadoDaEmpresa');
        input.setAttribute('data-inputEstadoDaEmpresa' + contadorAddExperiencia, '');
        input.setAttribute('pattern', '[A-Z]{2}');
        input.setAttribute('title', 'ex:PE');

        pai.appendChild(addDiv);
        addDiv.appendChild(label);
        addDiv.appendChild(input);
    }
    
    const adicionarDivTipo3 = function() {
        const addDivFilho = document.createElement('div');
        addDivFilho.classList.add('campos__experiencias__periodo');
        addDivFilho.classList.add('campos--comuns--espacamentos');

        const h4 = document.createElement('h4');
        h4.setAttribute('class', 'subtopicos');
        h4.textContent = 'Período';
        
        const adicionarDivTipo4 = function(classDiv, dataDiv, forLabel, descricaoLabel, inputName, idInput, classInput, dataInput) {
            const addDiv = document.createElement('div');
            addDiv.classList.add('campos--comuns');
            addDiv.classList.add(classDiv);
            addDiv.classList.add('campos--comuns--espacamentos');
            addDiv.setAttribute(dataDiv, '');
            
            const label = document.createElement('label');
            label.setAttribute('for', forLabel);
            label.textContent = descricaoLabel;
    
            const input = document.createElement('input');
            input.setAttribute('type', 'date');
            input.setAttribute('name', inputName);
            input.setAttribute('id', idInput);
            input.setAttribute('class', classInput);
            input.setAttribute(dataInput, '');
            
            addDivFilho.appendChild(addDiv);
            addDiv.appendChild(label);
            addDiv.appendChild(input);
        }

        const adicionarDivTipo5 = function() {
            
            const addDivAtualmente = document.createElement('div');
            addDivAtualmente.classList.add('campos--comuns');
            addDivAtualmente.classList.add('campos__experiencias__periodo__atualmente');
            addDivAtualmente.classList.add('campos--comuns--espacamentos');
            
            const input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
            input.setAttribute('name', 'periodoAtualmente' + contadorAddExperiencia);
            input.setAttribute('id', 'inputAtualmente' + contadorAddExperiencia);
            input.setAttribute('class', 'inputAtualmente');
            input.setAttribute('data-inputAtualmente' + contadorAddExperiencia, '');
            input.setAttribute('onclick', `check${contadorAddExperiencia}()`);
            
            const label = document.createElement('label');
            label.setAttribute('for', 'inputAtualmente' + contadorAddExperiencia);
            label.textContent = 'Atualmente trabalho na empresa';
            
            addDivFilho.appendChild(addDivAtualmente);
            addDivAtualmente.appendChild(input);
            addDivAtualmente.appendChild(label);

        }

        pai.appendChild(addDivFilho);
        addDivFilho.appendChild(h4);
        adicionarDivTipo4('campos__experiencias__periodo__inicio', 'data-periodo-inicio' + contadorAddExperiencia, 'inputInicio' + contadorAddExperiencia, 'Início:', 'periodoInicio' + contadorAddExperiencia, 'inputInicio' + contadorAddExperiencia, 'inputInicio', 'data-inputInicio' + contadorAddExperiencia);
        adicionarDivTipo4('campos__experiencias__periodo__final', 'data-periodo-final' + contadorAddExperiencia, 'inputFinal' + contadorAddExperiencia, 'Final:', 'periodoFinal' + contadorAddExperiencia, 'inputFinal' + contadorAddExperiencia, 'inputFinal', 'data-inputFinal' + contadorAddExperiencia);
        adicionarDivTipo5();

    }

    const adicionarDivTipo6 = function() {
        const addDiv = document.createElement('div');
        addDiv.classList.add('campos--comuns');
        addDiv.classList.add('campos__experiencias__atividades');
        addDiv.classList.add('campos--comuns--espacamentos');
        
        const label = document.createElement('label');
        label.setAttribute('for', 'principaisAtividades' + contadorAddExperiencia);
        label.textContent = 'Principais atividades:';

        const textarea = document.createElement('textarea');
        textarea.setAttribute('name', 'principaisAtividades' + contadorAddExperiencia)
        textarea.setAttribute('id', 'inputPrincipaisAtividades' + contadorAddExperiencia);
        textarea.setAttribute('cols', '30');
        textarea.setAttribute('rows', '10');
        textarea.classList.add('inputPrincipaisAtividades');
        textarea.classList.add('textarea--padrao');
        textarea.setAttribute('data-principaisAtividades' + contadorAddExperiencia, '');

        pai.appendChild(addDiv);
        addDiv.appendChild(label);
        addDiv.appendChild(textarea);
    }

    adicionarDivTipo1('campos__experiencias__nomeDaEmpresa', 'inputNomeDaEmpresa' + contadorAddExperiencia, 'Nome da empresa:', 'nomeDaEmpresa' + contadorAddExperiencia, 'inputNomeDaEmpresa' + contadorAddExperiencia, 'inputNomeDaEmpresa', 'data-inputNomeDaEmpresa' + contadorAddExperiencia);

    adicionarDivTipo1('campos__experiencias__cargo', 'inputCargo' + contadorAddExperiencia, 'Cargo:', 'cargo' + contadorAddExperiencia, 'inputCargo' + contadorAddExperiencia, 'inputCargo', 'data-inputCargo' + contadorAddExperiencia);

    adicionarDivTipo2();
    
    adicionarDivTipo1('campos__experiencias__cidadeDaEmpresa', 'inputCidadeDaEmpresa' + contadorAddExperiencia, 'Cidade:', 'cidadeDaEmpresa' + contadorAddExperiencia, 'inputCidadeDaEmpresa' + contadorAddExperiencia, 'inputCidadeDaEmpresa', 'data-inputcidadeDaEmpresa' + contadorAddExperiencia);

    adicionarDivTipo3();

    adicionarDivTipo6();

};


const btn = document.querySelector("[data-inputButton]");
/* Uma função que é executada quando o botão é clicado. */
btn.addEventListener("click", function() {

    /* Salvando os valores dos campos de entrada no localStorage. */
    const nomeCompleto = document.querySelector("[data-inputNomeCompleto]").value;
    const nacionalidade = document.querySelector("[data-inputNacionalidade]").value;
    const numero1 = document.querySelector("[data-inputNumero1]").value;
    const numero2 = document.querySelector("[data-inputNumero2]").value;
    const idade = document.querySelector("[data-inputIdade]").value;
    const endereco = document.querySelector("[data-inputEndereco]").value;
    const bairro = document.querySelector("[data-inputBairro]").value;
    const cep = document.querySelector("[data-inputCep]").value;
    const estado = document.querySelector("[data-inputEstado]").value;
    const cidade = document.querySelector("[data-inputCidade]").value;
    const email = document.querySelector("[data-imputEmail]").value;

    const linkedin = document.querySelector("[data-inputLinkedin]").value;

    const empregado = document.querySelector("[data-inputEmpregado]").value;
    const habilitacao = document.querySelector("[data-inputHabilitacao]").value;
    const automovel = document.querySelector("[data-inputAutomovel]").value;
    const viagens = document.querySelector("[data-inputViagens]").value;
    const mudarSe = document.querySelector("[data-inputMudarSe]").value;

    const escolaridade = document.querySelector("[data-inputEscolaridade]").value;

    const objetivos = document.querySelector("[data-objetivos]").value;
    const resumo = document.querySelector("[data-resumo]").value;
    
    const nomeDaEmpresa1 = document.querySelector("[data-inputnomedaempresa1]").value;
    const cargo1 = document.querySelector("[data-inputcargo1]").value;
    const estadoDaEmpresa1 = document.querySelector("[data-inputestadodaempresa1]").value;
    const cidadeDaEmpresa1 = document.querySelector("[data-inputcidadedaempresa1]").value;

    const periodoInicio1 = document.querySelector("[data-inputinicio1]").value;
    const dataInicio1 = new Date(periodoInicio1);
    const dataFormatadaInicio1 = ((dataInicio1.getDate() + 1)) + "/" + ((dataInicio1.getMonth() + 1)) + "/" + dataInicio1.getFullYear();
    const periodoFinal1 = document.querySelector("[data-inputFinal1]").value;
    const dataFinal1 = new Date(periodoFinal1);
    const dataFormatadaFinal1 = ((dataFinal1.getDate() + 1)) + "/" + ((dataFinal1.getMonth() + 1)) + "/" + dataFinal1.getFullYear();
    const periodoAtualmente1 = document.querySelector("[data-inputAtualmente1]");
    const atividades1 = document.querySelector("[data-principaisAtividades1]").value;


    if(contadorDeExperiencias > 1) {
        const nomeDaEmpresa2 = document.querySelector("[data-inputNomeDaEmpresa2]").value;
        const cargo2 = document.querySelector("[data-inputCargo2]").value;
        const estadoDaEmpresa2 = document.querySelector("[data-inputEstadoDaEmpresa2]").value;
        const cidadeDaEmpresa2 = document.querySelector("[data-inputcidadedaempresa2]").value;

        const periodoInicio2 = document.querySelector("[data-inputInicio2]").value;
        const dataInicio2 = new Date(periodoInicio2);
        const dataFormatadaInicio2 = ((dataInicio2.getDate() + 1)) + "/" + ((dataInicio2.getMonth() + 1)) + "/" + dataInicio2.getFullYear();
        const periodoFinal2 = document.querySelector("[data-inputFinal2]").value;
        const dataFinal2 = new Date(periodoFinal2);
        const dataFormatadaFinal2 = ((dataFinal2.getDate() + 1)) + "/" + ((dataFinal2.getMonth() + 1)) + "/" + dataFinal2.getFullYear();
        const periodoAtualmente2 = document.querySelector("[data-inputAtualmente2]");
        const atividades2 = document.querySelector("[data-principaisAtividades2]").value;

        localStorage.setItem('valueNomeDaEmpresa2', nomeDaEmpresa2);
        localStorage.setItem('valueCargo2', cargo2);
        localStorage.setItem('valueEstadoDaEmpresa2', estadoDaEmpresa2);
        localStorage.setItem('valueCidadeDaEmpresa2', cidadeDaEmpresa2);
        localStorage.setItem('valuePeriodoInicio2', dataFormatadaInicio2);
        localStorage.setItem('valuePeriodoFinal2', dataFormatadaFinal2);
        localStorage.setItem('valuePeriodoAtualmente2', periodoAtualmente2.checked);
        localStorage.setItem('valueAtividades2', atividades2);
    }

    if(contadorDeExperiencias == 3) {
        const nomeDaEmpresa3 = document.querySelector("[data-inputNomeDaEmpresa3]").value;
        const cargo3 = document.querySelector("[data-inputCargo3]").value;
        const estadoDaEmpresa3 = document.querySelector("[data-inputEstadoDaEmpresa3]").value;
        const cidadeDaEmpresa3 = document.querySelector("[data-inputCidadeDaEmpresa3]").value;
    
        const periodoInicio3 = document.querySelector("[data-inputinicio3]").value;
        const dataInicio3 = new Date(periodoInicio3);
        const dataFormatadaInicio3 = ((dataInicio3.getDate() )) + "/" + ((dataInicio3.getMonth() + 1)) + "/" + dataInicio3.getFullYear();
        const periodoFinal3 = document.querySelector("[data-inputFinal3]").value;
        const dataFinal3 = new Date(periodoFinal3);
        const dataFormatadaFinal3 = ((dataFinal3.getDate() + 1)) + "/" + ((dataFinal3.getMonth() + 1)) + "/" + dataFinal3.getFullYear();
        const periodoAtualmente3 = document.querySelector("[data-inputAtualmente3]");
        const atividades3 = document.querySelector("[data-principaisAtividades3]").value;

        localStorage.setItem('valueNomeDaEmpresa3', nomeDaEmpresa3);
        localStorage.setItem('valueCargo3', cargo3);
        localStorage.setItem('valueEstadoDaEmpresa3', estadoDaEmpresa3);
        localStorage.setItem('valueCidadeDaEmpresa3', cidadeDaEmpresa3);
        localStorage.setItem('valuePeriodoInicio3', dataFormatadaInicio3);
        localStorage.setItem('valuePeriodoFinal3', dataFormatadaFinal3);
        localStorage.setItem('valuePeriodoAtualmente3', periodoAtualmente3.checked);
        localStorage.setItem('valueAtividades3', atividades3);
    }

    
    
    /* Salvando os valores dos campos de entrada no localStorage. */
    localStorage.setItem('valueNomeCompleto', nomeCompleto);
    localStorage.setItem('valueNacionalidade', nacionalidade);
    localStorage.setItem('valueNumero1', numero1);
    localStorage.setItem('valueNumero2', numero2);
    localStorage.setItem('valueIdade', idade);
    localStorage.setItem('valueEnderco', endereco);
    localStorage.setItem('valueBairro', bairro);
    localStorage.setItem('valueCep', cep);
    localStorage.setItem('valueEstado', estado);
    localStorage.setItem('valueCidade', cidade);
    localStorage.setItem('valueEmail', email);

    localStorage.setItem('valueLinkedin', linkedin);

    localStorage.setItem('valueEmpregado', empregado);
    localStorage.setItem('valueHabilitacao', habilitacao);
    localStorage.setItem('valueAutomovel', automovel);
    localStorage.setItem('valueViagens', viagens);
    localStorage.setItem('valueMudarSe', mudarSe);

    localStorage.setItem('velueEscolaridade', escolaridade);

    localStorage.setItem('valueObjetivos', objetivos);
    localStorage.setItem('valueResumo', resumo);
    
    localStorage.setItem('valueNomeDaEmpresa1', nomeDaEmpresa1);
    localStorage.setItem('valueCargo1', cargo1);
    localStorage.setItem('valueEstadoDaEmpresa1', estadoDaEmpresa1);
    localStorage.setItem('valueCidadeDaEmpresa1', cidadeDaEmpresa1);
    localStorage.setItem('valuePeriodoInicio1', dataFormatadaInicio1);
    localStorage.setItem('valuePeriodoFinal1', dataFormatadaFinal1);
    localStorage.setItem('valuePeriodoAtualmente1', periodoAtualmente1.checked);
    localStorage.setItem('valueAtividades1', atividades1);

    /** Código abaixo pode apresentar um erro na linha seguinte se a Formação/Escolaridade não for a partir do técnico, mas não vai alterar em nada no resultado final */
    const curso = document.querySelector("[data-inputcurso]").value;
    const semestre = document.querySelector("[data-inputsemestre]").value;
    const instituicao = document.querySelector("[data-inputinstituicao]").value;
    const duracao = document.querySelector("[data-inputduracao]").value;
    const conclusao = document.querySelector("[data-inputconclusao]").value;

    localStorage.setItem('valueCurso', curso);
    localStorage.setItem('valueSemestre', semestre);
    localStorage.setItem('valueInstituicao', instituicao);
    localStorage.setItem('valueDuracao', duracao);
    localStorage.setItem('valueConclusao', conclusao);

});