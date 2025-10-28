// Simulação de histórico (poderá ser substituído por dados do banco)
    const userImpact = JSON.parse(localStorage.getItem("impactoUsuario")) || {
      horas: 36,
      doacoesReais: 350,
      doacoesKg: 42
    };

    document.getElementById("horasVol").textContent = userImpact.horas + "h";
    document.getElementById("doacaoReais").textContent = "R$" + userImpact.doacoesReais;
    document.getElementById("doacaoKg").textContent = userImpact.doacoesKg + "kg";

    // Calcula o nível
    const totalPontos = userImpact.horas + userImpact.doacoesKg + (userImpact.doacoesReais / 10);
    let nivel = "Iniciante";
    if (totalPontos > 100) nivel = "Transformador";
    else if (totalPontos > 50) nivel = "Colaborador";
    document.getElementById("nivelEngajamento").textContent = nivel;

        document.getElementById('year').textContent = new Date().getFullYear();

    const donationAmount = document.getElementById('donationAmount');
    const customWrap = document.getElementById('customAmountWrap');
    donationAmount.addEventListener('change', ()=>{
      customWrap.style.display = donationAmount.value === 'custom' ? 'block' : 'none';
    });

    function simulateServerResponse(ms = 900){
      return new Promise(res=>setTimeout(res, ms));
    }

    async function handleDonate(e){
      e.preventDefault();
      const amount = donationAmount.value === 'custom' ? document.getElementById('customAmount').value : donationAmount.value;
      const name = document.getElementById('donorName').value || 'Anônimo';
      const result = document.getElementById('donationResult');
      if(!amount || Number(amount) <= 0){ result.textContent = 'Por favor informe um valor válido.'; return false }
      result.textContent = 'Processando...';
      await simulateServerResponse();
      result.textContent = `Obrigado, ${name}! Doação de R$ ${Number(amount).toFixed(2)} registrada (simulação). Entraremos em contato por email.`;
      e.target.reset(); customWrap.style.display='none';
      return false;
    }

    async function handleContact(e){
      e.preventDefault();
      const name = document.getElementById('contactName').value || 'Amigo';
      const result = document.getElementById('contactResult');
      result.textContent = 'Enviando...';
      await simulateServerResponse(800);
      result.textContent = `Mensagem enviada. Obrigado, ${name}! Responderemos em breve.`;
      e.target.reset();
      return false;
    }

    // Mobile nav toggle (basic)
    const mobileToggle = document.getElementById('mobileToggle');
    if(mobileToggle){
      mobileToggle.addEventListener('click', ()=>{
        const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
        mobileToggle.setAttribute('aria-expanded', String(!expanded));
        alert('Menu móvel - nesta versão demo, links estão no cabeçalho para desktop.');
      });
    }

    const profileIcon = document.getElementById('profileIcon');
const dropdownMenu = document.getElementById('dropdownMenu');


profileIcon.addEventListener('click', () => {
dropdownMenu.style.display = dropdownMenu.style.display === 'flex' ? 'none' : 'flex';
});


document.addEventListener('click', (e) => {
if (!profileIcon.contains(e.target) && !dropdownMenu.contains(e.target)) {
dropdownMenu.style.display = 'none';
}
});

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
