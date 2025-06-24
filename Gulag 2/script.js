document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.textContent.toLowerCase().replace(' ', '');
    const targetSection = document.querySelector(`.${targetId}`);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

const revealElements = document.querySelectorAll('section, .card, .project');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => observer.observe(el));
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', e => {
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;
    btn.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
  });
});
// Show welcome chatbot after delay
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('chatbot').style.display = 'block';
  }, 2500); // adjust delay as needed
});
document.getElementById('closeChat').addEventListener('click', () => {
  const chat = document.getElementById('chatbot');
  chat.style.opacity = '0';
  chat.style.transform = 'translateY(10px)';
  setTimeout(() => {
    chat.style.display = 'none';
  }, 300);
});

document.getElementById('closeChat').addEventListener('click', () => {
  document.getElementById('chatbot').style.display = 'none';
});
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  // Optional: update icon
  toggleBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});