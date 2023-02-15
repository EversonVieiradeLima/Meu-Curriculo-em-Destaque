/* A JavaScript code that is used to upload an image. */
const inpuFile = document.querySelector("[data-picture-input]");
const pictureImage = document.querySelector("[data-picture-image]");
const pictureImageTxt = "Adcione sua foto";
pictureImage.innerHTML = pictureImageTxt;

inpuFile.addEventListener("change", function(e) {
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if (file) {
        const reader = new FileReader();

        reader.addEventListener("load", function(e) {
            const readerTarget = e.target;

            const img = document.createElement("img");
            img.src = readerTarget.result;
            img.classList.add("picture__img");

            pictureImage.innerHTML = '';
            pictureImage.appendChild(img);
        });

        reader.readAsDataURL(file);
    } else {
        pictureImage.innerHTML = pictureImageTxt;
    }
});

const btn2 = document.querySelector("[data-inputButton2]");

/* A function that is called when the button is clicked. */
btn2.addEventListener("click", function() {
    const nomeCompleto = document.querySelector("[data-nomeCompleto]");

    /* Getting the value of the input and putting it in the textContent of the element. */
    nomeCompleto.textContent = localStorage.getItem('valueNomeCompleto');

    /**
     * It creates a paragraph element with the class 'option' and a paragraph element with the class
     * 'classP' and appends them to the element with the id 'dataDiv'.
     * @param valor - the value of the localStorage item.
     * @param divDel - The id of the div that will be removed if the localStorage is empty.
     * @param dataDiv - The ID of the div that will be created.
     * @param informativo - The text that will be displayed before the data.
     * @param classP - The class of the element that will be created.
     */
    function dados(valor, divDel, dataDiv, informativo, classP) {
        let dado = localStorage.getItem(valor);
        if(!dado) {
            const box = document.querySelector(divDel);
            box.parentNode.removeChild(box);
        } else {
            function criarDados() {
                const box = document.querySelector(dataDiv);

                const elemento1 = document.createElement('p');
                elemento1.setAttribute('class', 'option');
                elemento1.textContent = informativo;

                const elemento2 = document.createElement('p');
                elemento2.setAttribute('class', classP);
                /* Replacing the line breaks with the `<br>` tag. */
                elemento2.innerHTML = localStorage.getItem(valor).replace(/\n/g, "<br>");

                /* Appending the elements to the div. */
                box.appendChild(elemento1);
                box.appendChild(elemento2);
            }

            criarDados();
        }
    }

    function dadosPeriodo(valor, divDel, dataDiv, informativo, classP) {
        let dado = localStorage.getItem(valor);
        if(!dado) {
            const box = document.querySelector(divDel);
            box.parentNode.removeChild(box);
        } else {
            function criarDados() {
                const box = document.querySelector(dataDiv);

                const elemento1 = document.createElement('p');
                elemento1.setAttribute('class', 'option');
                elemento1.textContent = informativo;

                const elemento2 = document.createElement('p');
                elemento2.setAttribute('class', classP);
                elemento2.innerHTML = 'Atualmente';

                /* Appending the elements to the div. */
                box.appendChild(elemento1);
                box.appendChild(elemento2);
            }

            criarDados()
        }
    }

    /* Creating a paragraph element with the class 'option' and a paragraph element with the class
    'classP' and appends them to the element with the id 'dataDiv'. */
    dados('valueNacionalidade', '[data-nacionalidade]', '[data-nacionalidade]', '', 'nacionalidade');
    const valorNacionalidade = localStorage.getItem('valueNacionalidade');
    if(!valorNacionalidade) {
        dados('valueIdade', '[data-idade]', '[data-idade]' , '', 'idade');
    } else {
        dados('valueIdade', '[data-idade]', '[data-idade]' , ',', 'idade');
    }
    dados('valueNumero1', '[data-numero1]', '[data-numero1]', 'Calular 1:', 'numero1');
    dados('valueNumero2', '[data-numero2]', '[data-numero2]', 'Celular 2:', 'numero2');
    dados('valueEmpregado', '[data-empregado]', '[data-empregado]', 'Está empregado:', 'empregado');
    dados('valueHabilitacao', '[data-habilitacao]', '[data-habilitacao]', 'Carteira de habilitação:', 'habilitacao');
    dados('valueAutomovel', '[data-automovel]', '[data-automovel]', 'Automóvel próprio:', 'automovel');

    dados('valueEnderco', '[data-endereco]', '[data-endereco]', '', 'endereco');
    dados('valueBairro', '[data-bairro]', '[data-bairro]', ',', 'bairro');
    dados('valueCep', '[data-cep]', '[data-cep]', 'CEP:', 'cep');
    dados('valueCidade', '[data-cidade]', '[data-cidade]', '-', 'cidade');
    dados('valueEstado', '[data-estado]', '[data-estado]', '-', 'estado');
    dados('valueEmail', '[data-email]', '[data-email]', 'E-mail:', 'email');
    dados('valueLinkedin', '[data-linkedin]', '[data-linkedin]', 'LinkedIn:', 'linkedin');
    dados('valueViagens', '[data-viagem]', '[data-viagem]', 'Disponibilidade para viagens:', 'viagem');
    dados('valueMudarSe', '[data-mudarSe]', '[data-mudarSe]', 'Disponibilidade para mudar-se:', 'mudarSe');

    dados('valueResumo', '[data-resumo]', '[data-resumo]', 'Resumo Profissional', 'resumo');
    dados('valueObjetivos', '[data-objetivos]', '[data-objetivos]', 'Objetivos Profissionais', 'objetivos');
    
    const empresa1 = localStorage.getItem('valueNomeDaEmpresa1');
    if(empresa1) {
        dados('valueCargo1', '[data-cargo1]', '[data-cargo1]', 'Experiência Profissional', 'cargo');
        dados('valueNomeDaEmpresa1', '[data-nomeDaEmpresa1]', '[data-nomeDaEmpresa1]', '', 'nomeDaEmpresa');
        dados('valueCidadeDaEmpresa1', '[data-cidadeDaEmpresa1]', '[data-cidadeDaEmpresa1]', '', 'cidadeDaEmpresa');
        dados('valueEstadoDaEmpresa1', '[data-estadoDaEmpresa1]', '[data-estadoDaEmpresa1]', '-', 'estadoDaEmpresa');
        const periodoInicio1 = localStorage.getItem('valuePeriodoInicio1');
        if(!isNaN(new Date(periodoInicio1))) {
            dados('valuePeriodoInicio1', '[data-periodo1]', '[data-periodoInicio1]', 'Período:', 'periodoInicio');
        }
        const periodoFinal1 = localStorage.getItem('valuePeriodofinal1');
        const periodoAtualmente1 = localStorage.getItem('valuePeriodoAtualmente1');
        if(periodoAtualmente1 === "false" && !isNaN(new Date(periodoFinal1))) {
            dados('valuePeriodoFinal1', '[data-periodofinal1]', '[data-periodofinal1]', '-', 'periodoFinal');
            periodoAtualmente1.checked = false;
        }
        if(periodoAtualmente1 === "true") {
            dadosPeriodo('valuePeriodoAtualmente1', '[data-periodoAtualmente1]', '[data-periodoAtualmente1]', '-', 'periodoAtualmente');
            periodoAtualmente1.checked = true;
        }
        dados('valueAtividades1', '[data-atividades1]', '[data-atividades1]', 'Atividades:', 'atividades');
    }

    const empresa2 = localStorage.getItem('valueNomeDaEmpresa2');
    if(empresa2) {
        dados('valueCargo2', '[data-cargo2]', '[data-cargo2]', '', 'cargo');
        dados('valueNomeDaEmpresa2', '[data-nomeDaEmpresa2]', '[data-nomeDaEmpresa2]', '', 'nomeDaEmpresa');
        dados('valueCidadeDaEmpresa2', '[data-cidadeDaEmpresa2]', '[data-cidadeDaEmpresa2]', '', 'cidadeDaEmpresa');
        dados('valueEstadoDaEmpresa2', '[data-estadoDaEmpresa2]', '[data-estadoDaEmpresa2]', '-', 'estadoDaEmpresa');
        const periodoInicio2 = localStorage.getItem('valuePeriodoInicio2');
        if(!isNaN(new Date(periodoInicio2))) {
            dados('valuePeriodoInicio2', '[data-periodo2]', '[data-periodoinicio2]', 'Período:', 'periodoInicio');
        }
        const periodoFinal2 = localStorage.getItem('valuePeriodoFinal2');
        const periodoAtualmente2 = localStorage.getItem('valuePeriodoAtualmente2');
        if(periodoAtualmente2 === "false" && !isNaN(new Date(periodoFinal2))) {
            dados('valuePeriodoFinal2', '[data-periodofinal2]', '[data-periodofinal2]', '-', 'periodoFinal');
            periodoAtualmente2.checked = false;
        } else if(periodoAtualmente2 === "true") {
            dadosPeriodo('valuePeriodoAtualmente2', '[data-periodoatualmente2]', '[data-periodoatualmente2]', '-', 'periodoAtualmente');
            periodoAtualmente2.checked = true;
        }
        dados('valueAtividades2', '[data-atividades2]', '[data-atividades2]', 'Atividades:', 'atividades');
    }

    const empresa3 = localStorage.getItem('valueNomeDaEmpresa3');
    if(empresa3) {
        dados('valueCargo3', '[data-cargo3]', '[data-cargo3]', '', 'cargo');
        dados('valueNomeDaEmpresa3', '[data-nomeDaEmpresa3]', '[data-nomeDaEmpresa3]', '', 'nomeDaEmpresa');
        dados('valueCidadeDaEmpresa3', '[data-cidadeDaEmpresa3]', '[data-cidadeDaEmpresa3]', '', 'cidadeDaEmpresa');
        dados('valueEstadoDaEmpresa3', '[data-estadoDaEmpresa3]', '[data-estadoDaEmpresa3]', '-', 'estadoDaEmpresa');
        const periodoInicio3 = localStorage.getItem('valuePeriodoInicio3');
        if(!isNaN(new Date(periodoInicio3))) {
            dados('valuePeriodoInicio3', '[data-periodo3]', '[data-periodoInicio3]', 'Período:', 'periodoInicio');
        }
        const periodoFinal3 = localStorage.getItem('valuePeriodoFinal3');
        const periodoAtualmente3 = localStorage.getItem('valuePeriodoAtualmente3');
        if(periodoAtualmente3 === "false" && !isNaN(new Date(periodoFinal3))) {
            dados('valuePeriodoFinal3', '[data-periodoFinal3]', '[data-periodoFinal3]', '-', 'periodoFinal');
            periodoAtualmente3.checked = false;
        }
        if(periodoAtualmente3 === "true") {
            dadosPeriodo('valuePeriodoAtualmente3', '[data-periodoAtualmente3]', '[data-periodoAtualmente3]', '-', 'periodoAtualmente');
            periodoAtualmente3.checked = true;
        }
        dados('valueAtividades3', '[data-atividades3]', '[data-atividades3]', 'Atividades:', 'atividades');
    }

    const escolaridades = localStorage.getItem('velueEscolaridade');
    if(tipoEscolaridade2.includes(escolaridades)) {
        dados('valueCurso', '[data-curso]', '[data-curso]', 'Escolaridade', 'curso');
        dados('valueSemestre', '[data-semestre]', '[data-semestre]', 'Semestre:', 'semestre');
        dados('valueInstituicao', '[data-instituicao]', '[data-instituicao]', 'Instituição:', 'instituicao');
        dados('valueDuracao', '[data-duracao]', '[data-duracao]', 'Duração:', 'duracao');
        dados('valueConclusao', '[data-anoConclusao]', '[data-anoConclusao]', 'Ano de conclusão:', 'anoConclusao');
    } else {
        dados('velueEscolaridade', '[data-escolaridade]', '[data-escolaridade]', 'Escolaridade', 'escolaridade');
    }

    /* Removing the button from the DOM. */
    const button2 = document.querySelector('[data-inputButton2]');
    button2.parentNode.removeChild(button2);
});


/**
 * When the button is clicked, remove the button from the DOM.
 */
function botaoimprimir() {
    const imprimir = document.querySelector("[data-imprimir]");
    imprimir.parentNode.removeChild(imprimir);

    const picture = document.querySelector('[data-picture-input]');
    if (picture.value == "") {
        const photo = document.querySelector('[data-photo]');
        photo.parentNode.removeChild(photo);
    }

    const atencao = document.querySelector('[data-atencao]');
    atencao.parentNode.removeChild(atencao);
    
}

