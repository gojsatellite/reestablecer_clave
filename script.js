// Tema claro/oscuro
const toggle = document.getElementById('toggleTheme');
toggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('light');
  toggle.textContent = document.documentElement.classList.contains('light') ? '??' : '??';
});

// Copiar texto (10.0.0.1)
document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', async () => {
    try{
      await navigator.clipboard.writeText(btn.getAttribute('data-copy'));
      btn.textContent = 'Copiado ??';
      setTimeout(()=> btn.textContent = 'Copiar 10.0.0.1', 1500);
    }catch(e){
      alert('No se pudo copiar. Copia manualmente: ' + btn.getAttribute('data-copy'));
    }
  });
});