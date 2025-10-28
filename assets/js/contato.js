 async function handleSubmit(e){
      e.preventDefault();
      const result=document.getElementById('result');
      result.textContent='Enviando...';
      await new Promise(r=>setTimeout(r,1000));
      result.textContent='Mensagem enviada com sucesso! Entraremos em contato em breve.';
      e.target.reset();
      return false;
    }