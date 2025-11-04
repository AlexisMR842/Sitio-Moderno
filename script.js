// Cambio de tema
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');
  const isDark = body.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  themeToggle.textContent = isDark ? '☀️' : '🌙';
});

// Envío del formulario
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Se envió el correo.');
  e.target.reset();
});

// commit 3: mejora de interacción
