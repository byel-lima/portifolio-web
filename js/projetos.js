const buscarProjetos = document.getElementById("buscarProjetos");
const listarProjetos = document.getElementById("listarProjetos");

let projeto = [];

async function carregarProjetos(){
    const resposta = await fetch("../data/projetos.json");
    projeto = await resposta.json();
    renderizarProjetos(projeto);
}

function renderizarProjetos(lista){
    listarProjetos.innerHTML = "";
    lista.forEach((projeto) => {
        const card = document.createElement("div");
        card.classList.add("projeto");
        card.innerHTML = `
        <h2>${projeto.titulo}</h2>
        <img src="${projeto.imagem}" width="150" height="150">
        <p>${projeto.descricao}</p>
        `;
    listarProjetos.appendChild(card);
    })
};

buscarProjetos.addEventListener("input", function(){
    const texto = buscarProjetos.value.toLowerCase();
    const filtrados = projeto.filter((projeto) => 
        projeto.titulo.toLowerCase().includes(texto)
    );

    renderizarProjetos(filtrados)
});

carregarProjetos();