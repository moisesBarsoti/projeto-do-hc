// Página de login
const status = document.querySelector("#status");
const form = document.querySelector(".login-form");

// Expressões regulares
const regularExpressionName = /^[a-zA-ZÀ-ÿ\s]{3,}$/;
const regularExpressionEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const regularExpressionPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d]).{8,}$/;

// Inputs
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#senha");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const valorName = name.value.trim();
    const valorEmail = email.value.trim();
    const valorPassword = password.value.trim();

    let mensagensErro = [];

    // Validações
    if (!regularExpressionName.test(valorName)) {
        mensagensErro.push("Nome inválido. Use pelo menos 3 letras e apenas letras.");
    }

    if (!regularExpressionEmail.test(valorEmail)) {
        mensagensErro.push("Email inválido. Use o formato: exemplo@gmail.com.");
    }

    if (!regularExpressionPassword.test(valorPassword)) {
        mensagensErro.push("Senha inválida. Use pelo menos 8 caracteres, incluindo letras e números.");
    }

    if (mensagensErro.length > 0) {
        status.innerHTML = mensagensErro.join("<br>");
        status.style.color = "#f00";
        status.style.marginBottom = "10px";
        return;
    }

    localStorage.setItem("nomeUsuario", valorName);

    status.textContent = "Login válido! Redirecionando...";
    status.style.color = "lightgreen";
    setTimeout(() => {
        window.location.href = "index.html";
    }, 1000); 
});