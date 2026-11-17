/* ==========================================
   SCRIPT — Site Enedina Alves Marques
   Tema Afro-Brasileiro | Consciência Negra
========================================== */

// ===== BOTÃO VOLTAR AO TOPO =====
const botaoTopo = document.createElement('button');
botaoTopo.innerHTML = '⬆️';
botaoTopo.setAttribute('aria-label', 'Voltar ao topo');
botaoTopo.style.cssText = `
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #D4AF37, #B8941F);
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s, visibility 0.3s;
  box-shadow: 0 4px 15px rgba(0,0,0,0.4);
`;
document.body.appendChild(botaoTopo);

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    botaoTopo.style.opacity = '1';
    botaoTopo.style.visibility = 'visible';
  } else {
    botaoTopo.style.opacity = '0';
    botaoTopo.style.visibility = 'hidden';
  }
});

botaoTopo.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== ROLAGEM SUAVE PARA LINKS INTERNOS =====
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const alvoId = this.getAttribute('href');
    const alvo = document.querySelector(alvoId);
    if (alvo) {
      alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ===== ANIMAÇÃO DE ENTRADA DAS SEÇÕES =====
const observador = new IntersectionObserver((entradas) => {
  entradas.forEach(entrada => {
    if (entrada.isIntersecting) {
      entrada.target.style.opacity = '1';
      entrada.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.secao').secao?.forEach?.(secao => {
  secao.style.opacity = '0';
  secao.style.transform = 'translateY(25px)';
  secao.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  observador.observe(secao);
});

// ===== MENSAGEM NO CONSOLE =====
console.log('%c🌐 Site Enedina Alves Marques carregado com sucesso!', 
  'color: #D4AF37; font-weight: bold; font-size: 14px;');
console.log('%c🦅 Sankofa: "Aprender com o passado para construir o futuro"', 
  'color: #006B3C; font-style: italic;');