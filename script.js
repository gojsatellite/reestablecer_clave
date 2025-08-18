const form = document.getElementById('wifi-form');
const message = document.getElementById('message');
const toggleBtn = document.getElementById('toggle-theme');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.textContent = document.body.classList.contains('dark') ? '??' : '??';
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const ssid = form.ssid.value.trim();
  const password = form.password.value;

  if (ssid && password.length >= 8) {
    localStorage.setItem('ssid', ssid);
    localStorage.setItem('wifi-password', password);

    message.textContent = 'Red Wi?Fi actualizada correctamente.';
    message.className = 'message success';
    message.classList.remove('hidden');
  } else {
    message.textContent = 'Por favor, ingresa un nombre de red y una contraseña de al menos 8 caracteres.';
    message.className = 'message error';
    message.classList.remove('hidden');
  }

  setTimeout(() => {
    message.classList.add('hidden');
  }, 4000);
});