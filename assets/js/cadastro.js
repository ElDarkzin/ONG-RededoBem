 async function handleSignup(e) {
      e.preventDefault();
      const nome = document.getElementById('nome').value;
      const tipo = document.getElementById('tipoUsuario').value;
      const msg = document.getElementById('mensagem');
      msg.textContent = 'Processando cadastro...';
      await new Promise(r => setTimeout(r, 1000));
      msg.textContent = `Bem-vindo(a), ${nome}! Seu perfil como ${tipo} foi criado com sucesso.`;
      e.target.reset();
    }

    function goToLogin(){
      const card=document.getElementById('signupCard');
      card.style.animation='fadeOut 0.6s forwards';
      setTimeout(()=>window.location.href='index.html',600);
    }

    const style=document.createElement('style');
    style.innerHTML=`@keyframes fadeOut { to { opacity:0; transform:scale(0.9); } }`;
    document.head.appendChild(style);