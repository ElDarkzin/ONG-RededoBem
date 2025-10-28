    // Máscara CPF (***.***.***-1234)
    const cpfInput = document.getElementById('cpf');
    cpfInput.addEventListener('input', () => {
      let v = cpfInput.value.replace(/\D/g, '');
      if (v.length > 11) v = v.slice(0, 11);
      let masked = '';
      if (v.length <= 3) masked = v;
      else if (v.length <= 6) masked = v.replace(/(\d{3})(\d+)/, '$1.$2');
      else if (v.length <= 9) masked = v.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3');
      else masked = v.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '***.***.***-$4');
      cpfInput.value = masked;
    });

    function cpf(i){
   
   var v = i.value;
   
   if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
      i.value = v.substring(0, v.length-1);
      return;
   }
   
   i.setAttribute("maxlength", "14");
   if (v.length == 3 || v.length == 7) i.value += ".";
   if (v.length == 11) i.value += "-";

}

    // Máscara celular
    const celularInput = document.getElementById('celular');
    celularInput.addEventListener('input', () => {
      let v = celularInput.value.replace(/\D/g, '');
      if (v.length > 11) v = v.slice(0, 11);
      if (v.length > 6)
        celularInput.value = v.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3');
      else if (v.length > 2)
        celularInput.value = v.replace(/(\d{2})(\d{0,5})/, '($1) $2');
      else celularInput.value = v;
    });

    function salvarPerfil(e) {
      e.preventDefault();
      const msg = document.getElementById('mensagemSucesso');
      msg.classList.add('show');
      setTimeout(() => msg.classList.remove('show'), 2500);
      // Aqui futuramente será feita a integração com o banco de dados
      return false;
    }