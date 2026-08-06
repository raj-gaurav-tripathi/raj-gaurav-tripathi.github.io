/* This file turns the editable content in content.js into the page. */
(function () {
  const content = window.SITE_CONTENT;
  if (!content) return;

  const $ = (selector) => document.querySelector(selector);
  const escape = (value = "") =>
    String(value).replace(/[&<>'"]/g, (character) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", '"': "&quot;",
    })[character]);
  const external = (href) => (href && href !== "#" ? ' target="_blank" rel="noreferrer"' : "");

  document.title = `${content.profile.name} | ${content.profile.organization}`;
  $("#brand-name").textContent = content.profile.name;
  $("#footer-name").textContent = `© ${new Date().getFullYear()} ${content.profile.name}`;
  $("#hero-eyebrow").textContent = content.profile.role;
  $("#hero-title").innerHTML = `${escape(content.profile.name)}<br><em>${escape(content.profile.organization)}</em>`;
  $("#hero-intro").textContent = content.hero.intro;
  $("#hero-focus").textContent = content.hero.focus;
  $("#contact-blurb").textContent = content.profile.contactBlurb;
  $("#email-link").href = `mailto:${content.profile.email}`;
  $("#email-link").innerHTML = `${escape(content.profile.email)} <span>↗</span>`;

  const primary = $("#hero-primary-link");
  primary.textContent = content.hero.primaryLabel;
  primary.href = content.hero.primaryHref;
  const secondary = $("#hero-secondary-link");
  secondary.innerHTML = `${escape(content.hero.secondaryLabel)} <span>↗</span>`;
  secondary.href = content.hero.secondaryHref;

  const navigation = [
    ["About", "#about"], ["Research", "#research"], ["News", "#news"],
    ["Publications", "#publications"], ["Contact", "#contact"],
  ];
  $("#site-nav").innerHTML = navigation
    .map(([label, href]) => `<a href="${href}">${label}</a>`)
    .join("");

  $("#stats").innerHTML = content.stats
    .map((stat) => `<article class="stat reveal"><strong>${escape(stat.value)}</strong><span>${escape(stat.label)}</span></article>`)
    .join("");

  $("#about-copy").innerHTML = content.about.map((paragraph) => `<p>${escape(paragraph)}</p>`).join("");

  $("#research-grid").innerHTML = content.research
    .map((item) => `
      <article class="research-card reveal">
        <div class="card-top"><span>${escape(item.number)}</span><a href="${escape(item.link)}"${external(item.link)} aria-label="Read more about ${escape(item.title)}">↗</a></div>
        <h3>${escape(item.title)}</h3>
        <p>${escape(item.text)}</p>
        <div class="tag-row">${item.tags.map((tag) => `<span>${escape(tag)}</span>`).join("")}</div>
      </article>`)
    .join("");

  $("#news-list").innerHTML = content.news
    .map((item, index) => `
      <li class="news-item reveal">
        <div class="news-number">0${index + 1}</div>
        <div><p class="news-date">${escape(item.date)}</p><h3>${escape(item.title)}</h3><p>${escape(item.text)}</p>
        <a class="text-link compact" href="${escape(item.link)}"${external(item.link)}>${escape(item.linkLabel)} <span>↗</span></a></div>
      </li>`)
    .join("");

  $("#publication-list").innerHTML = content.publications
    .map((item) => `
      <article class="publication reveal">
        <div class="publication-year">${escape(item.year)}</div>
        <div><p class="publication-type">${escape(item.type)}</p><h3>${escape(item.title)}</h3><p>${escape(item.authors)}</p><p class="venue">${escape(item.venue)}</p></div>
        <a href="${escape(item.link)}"${external(item.link)} aria-label="Open ${escape(item.title)}">↗</a>
      </article>`)
    .join("");

  $("#all-publications-link").href = content.allPublicationsLink;
  $("#social-links").innerHTML = content.social
    .map((item) => `<a href="${escape(item.href)}"${external(item.href)}>${escape(item.label)} <span>↗</span></a>`)
    .join("");

  const menuButton = $(".menu-button");
  const nav = $("#site-nav");
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", open);
  });
  nav.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
})();
