// Pegando o nome do usuário do localStorage
const nomeSalvo = localStorage.getItem("nomeUsuario");
const nomeMenu = document.querySelector("#user");
nomeMenu.innerHTML = `Olá, ${nomeSalvo}`;

if (!nomeSalvo) {
    window.location.href = "login.html";
}

// Abrir e fechar o menu
const botaoMenu = document.querySelector("#logo__menu");
const botaoFechar = document.querySelector("#logo__menu__fechado");
const logoHC = document.querySelector("#logo__hc");
const links = document.querySelectorAll(".text__link");
const icons = document.querySelectorAll(".icons");
const header = document.querySelector("header");
const main = document.querySelector("main");

function alternarMenu() {
    const menuVisivel = getComputedStyle(botaoMenu).display !== "none";

    // Alternar os botões de menu
    botaoMenu.style.display = menuVisivel ? "none" : "block";
    botaoFechar.style.display = menuVisivel ? "block" : "none";

    // Alternar visibilidade do logo HC
    logoHC.style.display = (logoHC.style.display === "none") ? "block" : "none";

    // Alternar visibilidade dos links
    links.forEach(link => {
        link.style.display = (link.style.display === "none") ? "block" : "none";
    });

    // Centralizar ou restaurar ícones
    icons.forEach(icon => {
        if (links[0].style.display === "none") {
            icon.style.display = "flex";
            icon.style.justifyContent = "center";
            icon.style.width = "34px";
            botaoFechar.style.margin = "2rem 1rem 0 0";
        } else {
            icon.style.display = "";
            icon.style.justifyContent = "";
            icon.style.width = "";
            botaoFechar.style.margin = "";
        }
    });

    // Ajustar tamanho do header
    header.style.width = (links[0].style.display === "none") ? "6%" : "18.1%";

    // Ajustar tamanho e margem do main
    if (links[0].style.display === "none") {
        main.style.marginLeft = "8%";
        main.style.width = "90%";
    } else {
        main.style.marginLeft = "20%";
        main.style.width = "79%";
    }
}

// Adiciona eventos para os dois botões
botaoMenu.addEventListener("click", alternarMenu);
botaoFechar.addEventListener("click", alternarMenu);

// Mostrar a mensagem de página não desenvolvida
const linksNaoDesenvolvidos = document.querySelectorAll(".pagina__nao__desenvolvida");

function paginaNaoDesenvolvida(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    const mensagem = document.getElementById('pagina__nao__desenvolvida');
    
    // Mostra a mensagem
    mensagem.classList.add('visible');
    
    // Esconde a mensagem após 3 segundos
    setTimeout(() => {
        mensagem.classList.remove('visible');
    }, 2000);
}

// Adiciona o evento a cada link
linksNaoDesenvolvidos.forEach(link => {
    link.addEventListener("click", paginaNaoDesenvolvida);
});

// Ativar o switch
document.addEventListener('DOMContentLoaded', () => {
    const switches = document.querySelectorAll('.switch');

    switches.forEach(sw => {
        sw.addEventListener('click', () => {
            sw.classList.toggle('active');
        });
    });
});

// Fazendo a troca de icon do menu mobile quando o usuário clicar