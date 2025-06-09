const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quais são os principais desafios enfrentados pelas escolas do campo no Brasil?",
        alternativas: [
            {
                texto:  "Infraestrutura precária e acesso limitado a recursos: Um dos maiores obstáculos é a infraestrutura inadequada. Muitas escolas rurais carecem de saneamento básico, água potável, energia elétrica e até mesmo salas de aula em boas condições.",
                afirmacao: "<b>desigualdade</b> A infraestrutura precária nas escolas rurais é um desafio central que engloba a ausência de saneamento básico, água potável, energia elétrica e até mesmo salas de aula em boas condições.."
            },
            {
                texto: "Falta de professores qualificados e transporte deficiente: A escassez de professores qualificados que queiram atuar em áreas rurais é um desafio significativo. Muitas vezes, os profissionais que aceitam essas vagas enfrentam dificuldades de deslocamento e não possuem formação específica para a educação do campo.",
                afirmacao: "<b>acessibilidade</b>,A falta de professores qualificados dispostos a atuar em áreas rurais e o transporte deficiente são grandes barreiras para a educação no campo"
            }
        ]
    },
    {
        enunciado: "O que diferencia a proposta pedagógica da educação do campo da educação urbana tradicional?",
        alternativas: [
            {
                texto: "Contextualização à Realidade Local e Valorização dos Saberes: A educação do campo adota uma proposta pedagógica que busca ativamente vincular o currículo e as atividades de ensino à realidade e às especificidades do meio rural.",
                afirmacao: "<b>Relevância</b>.</b>A contextualização à realidade local na educação do campo significa que o currículo e as atividades de ensino são diretamente vinculados às vivências, saberes e especificidades do meio rural."
            },
            {
                texto: "Pedagogia da Alternância e Formação Integral: Outro diferencial marcante, especialmente em instituições como as Escolas Família Agrícola (EFAs), é a Pedagogia da Alternância.",
                afirmacao: "<b>Alternância</b>A Pedagogia da Alternância é um método da educação do campo, especialmente em Escolas Família Agrícola (EFAs), que intercala períodos de estudo na escola com períodos de aplicação prática na casa e na propriedade do aluno."
            }
        ]
    },
    {
        enunciado: "Qual a importância das Escolas Família Agrícola (EFAs) para a educação do campo?",
        alternativas: [
            {
                texto: "Formação Contextualizada e Integral para o Jovem Rural: As EFAs são vitais por oferecerem uma educação que está intrinsecamente ligada à realidade do campo.",
                afirmacao: "<b>Enraizamento</b>As Escolas Família Agrícola (EFAs) são fundamentais porque proporcionam uma educação que está profundamente enraizada na realidade e nas necessidades do campo."
            },
            {
                texto: "Desenvolvimento Sustentável e Fortalecimento Comunitário: Além de formar indivíduos, as EFAs contribuem diretamente para o desenvolvimento rural sustentável.",
                afirmacao: "<b>Sustentabilidade Comunitária</b>As EFAs impulsionam o desenvolvimento rural sustentável ao capacitar jovens com práticas agroecológicas e de gestão, incentivando sua permanência no campo."
            }
        ]
    },
    {
        enunciado: "De que forma a tecnologia pode contribuir para a melhoria da educação do campo?",
        alternativas: [
            {
                texto: "A tecnologia pode contribuir significativamente através do acesso à internet e plataformas de ensino a distância, que permitem a oferta de cursos e materiais didáticos de qualidade.",
                afirmacao: "<b>Democratização Digital</b> A tecnologia, através do acesso à internet e plataformas de ensino a distância (EAD), é crucial para a educação do campo."
            },
            {
                texto: "A tecnologia torna o ensino no campo mais dinâmico e engajador, adaptando-o às necessidades individuais dos alunos.",
                afirmacao: "<b>Engajamento Personalizado</b> A tecnologia torna o ensino no campo mais dinâmico e engajador através de recursos multimídia, gamificação e projetos virtuais. "
            }
        ]
    },
    {
        enunciado: "Como evitar que ocorra a extinção de animais nativos?",
        alternativas: [
            {
                texto: "Criação de mais áreas de proteção ambiental, com grande biodiversidade ajudaria a melhorar esse cenário?",
                afirmacao: "Sim, pois preservando nosso meio ambiente, protegemos nossos animais e facilitamos sua reprodução "
            },
            {
                texto: "Evitar intervenções de espécies não nativas neste ambiente pode ser uma alternativa?",
                afirmacao: "Sim, animais de um determinado local não estão preparados para lidar com predadores de outras áreas, levando a um extermínio da espécie local"
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.innerHTML = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta(); 