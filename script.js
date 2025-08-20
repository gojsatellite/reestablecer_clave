// Tema claro/oscuro
const toggle = document.getElementById('toggleTheme');
toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
  toggle.textContent = document.body.classList.contains('light') ? '??' : '??';
});

// Copiar 10.0.0.1
document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', async () => {
    try{
      await navigator.clipboard.writeText(btn.getAttribute('data-copy'));
      const original = btn.textContent;
      btn.textContent = 'Copiado ??';
      setTimeout(()=> btn.textContent = original, 1400);
    }catch(e){
      alert('No se pudo copiar. Copia manualmente: ' + btn.getAttribute('data-copy'));
    }
  });
});
