(function () {
  const escapeHtml = (value = '') => String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);

  function imageFrame(src, alt, extraClass = '') {
    return `<figure class="image-frame ${extraClass}"><img src="${escapeHtml(src)}" alt="${escapeHtml(alt)}"></figure>`;
  }

  function header({ title, highlight, subtitle, image, imageAlt, compact = false, logo = false, accreditation = false }) {
    const brand = logo ? `<div class="brand-lockup"><img src="assets/images/ups-logo-white.webp" alt="Universidad Politécnica Salesiana"><span>Carrera de<br>Computación<small>Sede Cuenca</small></span></div>` : '';
    const heading = `<h1>${escapeHtml(title)}${highlight ? `<span class="title-highlight">${escapeHtml(highlight)}</span>` : ''}</h1>`;
    const subtitleMarkup = subtitle ? `<p class="hero-subtitle">${escapeHtml(subtitle)}</p>` : '';
    const accreditationMarkup = accreditation ? `<img class="hero-accreditation" src="assets/images/abet-accreditation-white.webp" alt="Carrera acreditada internacionalmente por ABET">` : '';
    return `<div class="slide-header ${compact ? 'slide-header--compact' : ''}">
      <div class="hero-panel">${brand}${heading}${subtitleMarkup}${accreditationMarkup}</div>
      ${imageFrame(image, imageAlt, 'slide-header__image')}
    </div>`;
  }

  function card({ title, body, icon, metric, variant = '', iconVariant = '' }) {
    const iconMarkup = icon ? `<span class="card-icon ${iconVariant}" aria-hidden="true">${icon}</span>` : '';
    const titleMarkup = title ? `<h2>${escapeHtml(title)}</h2>` : '';
    const bodyMarkup = body ? `<p>${body}</p>` : '';
    const metricMarkup = metric ? `<strong class="card-metric">${escapeHtml(metric)}</strong>` : '';
    return `<article class="info-card ${variant} ${icon ? 'info-card--icon' : ''}">${iconMarkup}${metricMarkup}${titleMarkup}${bodyMarkup}</article>`;
  }

  function careerCard(item) {
    return card({
      title: item.title,
      body: escapeHtml(item.body),
      icon: item.icon,
      variant: 'career-card',
      iconVariant: item.iconVariant || ''
    });
  }

  function footer(text = 'UNIVERSIDAD POLITÉCNICA SALESIANA  |  SEDE CUENCA') {
    return `<footer class="institution-footer">${escapeHtml(text)}</footer>`;
  }

  function sectorList(items) {
    return `<div class="sector-list">${items.map((item) => `<div>${escapeHtml(item)}</div>`).join('')}</div>`;
  }

  function slide(className, content, label) {
    return `<section class="slide ${className}" aria-label="${escapeHtml(label)}">${content}</section>`;
  }

  window.PresentationComponents = { imageFrame, header, card, careerCard, footer, sectorList, slide };
})();
