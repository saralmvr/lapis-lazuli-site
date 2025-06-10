// dropdown menu abr/fecha ao clicar fecha ao clicar fora
document.querySelectorAll('.dropbtn').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    // fecha todos os outros dropdowns antes de abrir o clicado
    document.querySelectorAll('.dropdown-content').forEach(function(content) {
      if (content !== btn.parentElement.querySelector('.dropdown-content')) {
        content.style.display = 'none';
      }
    });
    const dropdown = btn.parentElement;
    const content = dropdown.querySelector('.dropdown-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

// fecha dropdown ao clicar fora
document.addEventListener('click', function(e) {
  document.querySelectorAll('.dropdown-content').forEach(function(content) {
    if (!content.parentElement.contains(e.target)) {
      content.style.display = 'none';
    }
  });
});

// validação de formulário c msg personalizada
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    // tira mensagens antigas
    let msg = form.querySelector('.form-msg');
    if (msg) msg.remove();

    if (!nome || !email || !mensagem) {
      mostrarMensagem('Preencha todos os campos!', form);
      e.preventDefault();
    } else if (!emailValido) {
      mostrarMensagem('Digite um e-mail válido!', form);
      e.preventDefault();
    }
  });
}

// mensagem de erro no formulário
function mostrarMensagem(texto, form) {
  let msg = document.createElement('div');
  msg.className = 'form-msg';
  msg.textContent = texto;
  msg.style.color = '#b32d2d';
  msg.style.margin = '10px 0 0 0';
  msg.style.textAlign = 'center';
  form.prepend(msg);
}