document.querySelectorAll('.dropbtn').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const dropdown = btn.parentElement;
    const content = dropdown.querySelector('.dropdown-content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});

document.addEventListener('click', function(e) {
  document.querySelectorAll('.dropdown-content').forEach(function(content) {
    if (!content.parentElement.contains(e.target)) {
      content.style.display = 'none';
    }
  });
});

const form = document.querySelector('form');
form.addEventListener('submit', function(e) {
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.mensagem.value.trim();

  if (!nome || !email || !mensagem) {
    alert('Preencha todos os campos!');
    e.preventDefault();
  } else if (!email.includes('@')) {
    alert('Digite um e-mail válido!');
    e.preventDefault();
  }
});