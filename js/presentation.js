(function () {
  const C = window.PresentationComponents;
  const deck = document.getElementById('presentation');
  const slides = [];

  const careers = [
    { icon: '&lt;/&gt;', title: 'Desarrollo de software', body: 'Apps web, móviles y empresariales.' },
    { icon: '✚', title: 'Ingeniero/a en Inteligencia Artificial', body: 'Desarrolla soluciones con IA y aprendizaje automático.' },
    { icon: '▥', title: 'Big Data', body: 'Gestiona datos y crea soluciones para analizarlos.' },
    { icon: '◇', title: 'Ciberseguridad', body: 'Protege el software y los datos frente a amenazas.' },
    { icon: '✚', title: 'Desarrollador/a de aplicaciones IoT', body: 'Conecta dispositivos y crea soluciones inteligentes.' },
    { icon: '☁', title: 'Computación en la nube', body: 'Diseña y administra servicios e infraestructura cloud.' }
  ];

  const cover = [
    `<div class="cover-layout">`,
    `<div class="cover-hero">`,
    `<div class="brand-lockup"><img src="assets/images/ups-logo-white.webp" alt="Universidad Politécnica Salesiana"><span>Carrera de<br>Computación<small>Sede Cuenca</small></span></div>`,
    `<h1 class="cover-title">Ingeniería en Ciencias<br>de la Computación</h1>`,
    `<p class="cover-tagline">Transformando ideas en soluciones digitales que impactan</p>`,
    `<p class="cover-description">Diseña soluciones inteligentes, crea y utiliza modelos y agentes de IA para resolver problemas y automatizar tareas.</p>`,
    `<img class="hero-accreditation" src="assets/images/abet-accreditation-white.webp" alt="Carrera acreditada internacionalmente por ABET">`,
    `</div>`,
    C.imageFrame('assets/images/students-collaborating.jpg', 'Dos estudiantes colaboran frente a una laptop', 'cover-photo'),
    `</div>`,
    `<div class="cover-facts">`,
    C.card({ icon: '✦', title: '4 años', body: '8 semestres', variant: 'fact-card' }),
    C.card({ icon: '★', title: 'Título a obtener:', body: 'Ingeniero/a en Ciencias de la Computación', variant: 'fact-card' }),
    C.card({ icon: '◎', title: 'Área del conocimiento', body: 'Tecnologías de la Información y la Comunicación', variant: 'fact-card' }),
    `</div>`,
    `<div class="cover-slogan">TECNOLOGÍA QUE RESUELVE PROBLEMAS REALES</div>`,
    C.footer()
  ].join('');

  const work = [
    C.header({ title: '¿En qué puedes', highlight: 'trabajar?', subtitle: 'Desarrollando soluciones tecnológicas para empresas y comunidades de todo el mundo.', image: 'assets/images/technology-landscape.jpg', imageAlt: 'Ilustración de paisaje tecnológico', compact: true }),
    `<div class="career-grid">${careers.map(C.careerCard).join('')}</div>`,
    `<div class="section-band">TU FORMACIÓN PUEDE APORTAR EN MUCHOS SECTORES</div>`,
    C.sectorList(['Tecnología', 'Industria', 'Servicios públicos', 'Academia']),
    C.footer()
  ].join('');

  const opportunities = [
    C.header({ title: 'Beneficios y', highlight: 'oportunidades', subtitle: 'QUE LLAMAN LA ATENCIÓN', image: 'assets/images/technology-landscape.jpg', imageAlt: 'Ilustración de paisaje tecnológico', compact: true }),
    `<div class="opportunity-stats">`,
    C.card({ metric: '144', body: 'De 215 inscritos en el periodo 67', variant: 'info-card--yellow info-card--blue-rail' }),
    `<article class="abet-card"><img src="assets/images/abet-accreditation-white.webp" alt="Carrera acreditada internacionalmente por ABET"></article>`,
    C.card({ title: 'Amplio campo laboral', body: 'Software, IA, redes e infraestructura tecnológica', variant: 'info-card--pale' }),
    `</div>`,
    `<div class="postgraduate-grid">`,
    C.card({ icon: '4+1', title: 'Proyección académica en la UPS', body: 'Maestría en Software<br>Maestría en Seguridad de la Información', variant: 'postgraduate-card' }),
    C.card({ icon: '↑', title: 'Proyección académica en la UPS', body: 'Doctorado en Ciencias Computacionales', variant: 'postgraduate-card postgraduate-card--dark' }),
    `</div>`,
    `<div class="section-band opportunity-band">TU FUTURO PUEDE ESTAR EN LA TECNOLOGÍA</div>`,
    `<div class="admission-link">Conoce la oferta académica y el proceso de admisión en www.ups.edu.ec</div>`,
    C.footer()
  ].join('');

  slides.push(C.slide('cover-slide', cover, 'Portada'));
  slides.push(C.slide('work-slide', work, 'En qué puedes trabajar'));
  slides.push(C.slide('opportunity-slide', opportunities, 'Beneficios y oportunidades'));
  deck.innerHTML = slides.join('');

  const slideElements = [...deck.querySelectorAll('.slide')];
  const counter = document.getElementById('slide-counter');
  let activeSlide = 0;
  const updateCounter = (index) => {
    activeSlide = (index + slideElements.length) % slideElements.length;
    counter.value = `${activeSlide + 1} / ${slideElements.length}`;
    counter.textContent = counter.value;
  };

  document.getElementById('previous-slide').addEventListener('click', () => {
    const next = (activeSlide - 1 + slideElements.length) % slideElements.length;
    slideElements[next].scrollIntoView({ behavior: 'smooth', block: 'center' });
    updateCounter(next);
  });
  document.getElementById('next-slide').addEventListener('click', () => {
    const next = (activeSlide + 1) % slideElements.length;
    slideElements[next].scrollIntoView({ behavior: 'smooth', block: 'center' });
    updateCounter(next);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) updateCounter(slideElements.indexOf(entry.target));
    });
  }, { threshold: 0.55 });
  slideElements.forEach((slide) => observer.observe(slide));

  document.getElementById('download-pdf').addEventListener('click', async (event) => {
    const button = event.currentTarget;
    const status = document.getElementById('download-status');
    if (typeof window.html2pdf !== 'function') {
      status.textContent = 'No se pudo cargar el generador PDF. Comprueba tu conexión e inténtalo de nuevo.';
      return;
    }
    button.disabled = true;
    status.textContent = 'Generando PDF…';
    const options = {
      margin: 0,
      filename: 'Ingenieria-en-Ciencias-de-la-Computacion-UPS-Cuenca.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2, useCORS: true, backgroundColor: '#f7f9fd', scrollX: 0, scrollY: 0, windowWidth: 1280 },
      jsPDF: { unit: 'in', format: [13.333333, 7.5], orientation: 'landscape', compress: true },
      pagebreak: { mode: ['css', 'legacy'], after: '.slide:not(:last-child)' }
    };
    try {
      await window.html2pdf().set(options).from(deck).save();
      status.textContent = 'PDF descargado.';
    } catch (error) {
      console.error('Error al generar PDF:', error);
      status.textContent = 'No se pudo generar el PDF. Recarga la página e inténtalo de nuevo.';
    } finally {
      button.disabled = false;
      window.setTimeout(() => { status.textContent = ''; }, 5000);
    }
  });
})();
