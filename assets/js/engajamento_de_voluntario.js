// assets/js/javascript.js

// === Atualiza o ano automaticamente no rodapé ===
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});

// === Menu responsivo ===
const mobileToggle = document.getElementById("mobileToggle");
if (mobileToggle) {
  mobileToggle.addEventListener("click", () => {
    const nav = document.querySelector("nav");
    const expanded = mobileToggle.getAttribute("aria-expanded") === "true";
    mobileToggle.setAttribute("aria-expanded", !expanded);
    nav.style.display = expanded ? "none" : "flex";
  });
}

// === Dropdown de perfil ===
const profileIcon = document.getElementById("profileIcon");
const dropdownMenu = document.getElementById("dropdownMenu");
if (profileIcon && dropdownMenu) {
  profileIcon.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownMenu.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!dropdownMenu.contains(e.target) && e.target !== profileIcon) {
      dropdownMenu.classList.remove("show");
    }
  });
}

// === Máscara de CPF ===
function formatCPF(value) {
  value = value.replace(/\D/g, ""); // remove tudo que não é número
  if (value.length > 11) value = value.slice(0, 11);
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  return value;
}

document.addEventListener("input", (e) => {
  if (e.target.id === "volCPF" || e.target.id === "donorCPF") {
    e.target.value = formatCPF(e.target.value);
  }
});

// === Máscara de CEP ===
function formatCEP(value) {
  value = value.replace(/\D/g, "");
  if (value.length > 8) value = value.slice(0, 8);
  return value.replace(/(\d{5})(\d{3})$/, "$1-$2");
}

document.addEventListener("input", (e) => {
  if (e.target.id === "cep") {
    e.target.value = formatCEP(e.target.value);
  }
});

// === Doação (tela inicial) ===
function handleDonate(event) {
  event.preventDefault();

  const amountSelect = document.getElementById("donationAmount");
  const customWrap = document.getElementById("customAmountWrap");
  const customInput = document.getElementById("customAmount");
  const nameInput = document.getElementById("donorName");
  const result = document.getElementById("donationResult");

  let amount = amountSelect.value;
  if (amount === "custom") {
    customWrap.style.display = "block";
    amount = customInput.value || 0;
  } else {
    customWrap.style.display = "none";
  }

  if (!nameInput.value.trim()) {
    result.textContent = "Por favor, insira seu nome.";
    result.style.color = "var(--error)";
    return false;
  }

  if (Number(amount) <= 0 || isNaN(amount)) {
    result.textContent = "Escolha um valor válido para doação.";
    result.style.color = "var(--error)";
    return false;
  }

  result.textContent = `Obrigado, ${nameInput.value}! Sua doação de R$${amount} foi registrada com sucesso 💖`;
  result.style.color = "var(--success)";
  event.target.reset();
  return false;
}

// === Formulário de voluntário (Engajamento) ===
function handleVolunteer(event) {
  event.preventDefault();

  const name = document.getElementById("volName").value.trim();
  const cpf = document.getElementById("volCPF").value.trim();
  const email = document.getElementById("volEmail").value.trim();
  const area = document.getElementById("volArea").value;
  const result = document.getElementById("volunteerResult");

  if (!name || !cpf || !email || !area) {
    result.textContent = "Por favor, preencha todos os campos obrigatórios.";
    result.style.color = "var(--error)";
    return false;
  }

  if (!validateEmail(email)) {
    result.textContent = "E-mail inválido. Verifique o formato.";
    result.style.color = "var(--error)";
    return false;
  }

  result.textContent = "Inscrição enviada com sucesso! 🎉 Nossa equipe entrará em contato por e-mail.";
  result.style.color = "var(--success)";
  event.target.reset();
  return false;
}

// === Validação simples de e-mail ===
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}


document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.querySelector('.toggle_btn')
    const toggleBtnIcon = document.querySelector('.toggle_btn i')
    const dropDownMenu = document.querySelector('.dropdown_menu')

    // Check if toggleBtn was found before setting onclick
    if (toggleBtn) {
        toggleBtn.onclick = function () {
            dropDownMenu.classList.toggle('open')
            const isOpen = dropDownMenu.classList.contains('open')

            // Check if toggleBtnIcon was found before setting classList
            if (toggleBtnIcon) {
                toggleBtnIcon.classList = isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'
            }
        }
    }
});
