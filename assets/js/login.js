 async function handleLogin(e){
      e.preventDefault();
      const msg=document.getElementById('loginMsg');
      msg.textContent='Verificando credenciais...';
      await new Promise(r=>setTimeout(r,1000));
      msg.textContent='Login bem-sucedido! Redirecionando...';
      setTimeout(()=>window.location.href='cadastro.html',1000);
    }

    function goToSignup(){
      const card=document.getElementById('loginCard');
      card.style.animation='fadeOut 0.6s forwards';
      setTimeout(()=>window.location.href='cadastro.html',600);
    }

    const style=document.createElement('style');
    style.innerHTML=`@keyframes fadeOut { to { opacity:0; transform:scale(0.9); } }`;
    document.head.appendChild(style);