 const openBtns = document.querySelectorAll('.open-panel');
const overlay  = document.getElementById('panelOverlay');

function openPanel(id) {
  const panel = document.getElementById('panel-' + id);
  if (!panel) return;
  panel.classList.add('open');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeAll() {
  document.querySelectorAll('.side-panel').forEach(p => p.classList.remove('open'));
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

openBtns.forEach(btn => {
  btn.addEventListener('click', () => openPanel(btn.dataset.membre));
});

document.querySelectorAll('.side-panel__close').forEach(btn => {
  btn.addEventListener('click', closeAll);
});

overlay.addEventListener('click', closeAll);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeAll();
});
