(() => {
  const header = document.querySelector('[data-header]');
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#main-nav');

  const closeMenu = () => {
    if (!header || !toggle) return;
    header.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  if (header && toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      header.classList.toggle('is-open', !open);
      toggle.setAttribute('aria-expanded', String(!open));
    });
    nav.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape') {
        closeMenu();
        toggle.focus();
      }
    });
    document.addEventListener('click', event => {
      if (header.classList.contains('is-open') && !header.contains(event.target)) closeMenu();
    });
  }

  document.querySelectorAll('[data-year]').forEach(node => {
    node.textContent = new Date().getFullYear();
  });

  const filterButtons = [...document.querySelectorAll('[data-filter]')];
  const projectCards = [...document.querySelectorAll('[data-project-card]')];
  const filterSummary = document.querySelector('[data-filter-summary]');
  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        filterButtons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
        let visible = 0;
        projectCards.forEach(card => {
          const show = filter === 'Alla' || card.dataset.category === filter;
          card.hidden = !show;
          if (show) visible += 1;
        });
        if (filterSummary) {
          const suffix = filter === 'Alla' ? 'i hela portföljen' : `inom ${filter.toLowerCase()}`;
          filterSummary.textContent = `${visible} ${visible === 1 ? 'initiativ' : 'initiativ'} visas ${suffix}.`;
        }
      });
    });
  }

  const demoForm = document.querySelector('[data-demo-form]');
  if (demoForm) {
    demoForm.addEventListener('submit', event => {
      event.preventDefault();
      const status = demoForm.querySelector('[data-form-status]');
      if (status) {
        status.textContent = 'Demoläge: uppgifterna har inte skickats eller sparats.';
        status.focus();
      }
    });
  }
})();
