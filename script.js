/*
  ==================================================================
  SITE BEHAVIOUR
  ==================================================================
  This file:
  1. Places the content from data/content.js into the website.
  2. Handles the mobile menu and active navigation state.
  3. Runs the lightweight animated cosmos in the hero section.
  4. Reveals sections gently as they enter the screen.

  Most personalisation belongs in data/content.js, not in this file.
*/

(function () {
  "use strict";

  const content = window.siteContent;
  if (!content) {
    console.warn("Content could not be loaded. Check data/content.js.");
    return;
  }

  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];
  const escapeHTML = (value = "") => String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");

  /* ---------------------------------------------------------------
     CONTENT RENDERING
     These small templates keep the HTML structure uncluttered.
     --------------------------------------------------------------- */
  function hydratePersonalDetails() {
    const { person } = content;
    document.title = `${person.name} | Cosmology`;
    $$('[data-site-name]').forEach((element) => { element.textContent = person.name; });
    $('[data-hero-summary]').textContent = person.heroSummary;
    $('[data-intro-primary]').textContent = person.introduction[0];
    $('[data-intro-secondary]').textContent = person.introduction[1];
    $('#profile-image').alt = `Portrait of ${person.name}`;
    $('.portrait-fallback span').textContent = person.initials || "YN";

    const emailLink = $('[data-email-link]');
    emailLink.href = `mailto:${person.email}`;
    emailLink.textContent = person.email;
  }

  function renderAbout() {
    $('[data-about-content]').innerHTML = content.about
      .map((paragraph) => `<p>${escapeHTML(paragraph)}</p>`)
      .join("");

    $('[data-facts-list]').innerHTML = content.facts
      .map((fact) => `
        <div class="fact reveal">
          <span class="fact-label">${escapeHTML(fact.label)}</span>
          <span class="fact-value">${escapeHTML(fact.value)}</span>
        </div>
      `)
      .join("");
  }

  function renderResearch() {
    $('[data-research-list]').innerHTML = content.research
      .map((item, index) => `
        <article class="research-card reveal">
          <span class="research-number">0${index + 1}</span>
          <h3>${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.description)}</p>
        </article>
      `)
      .join("");
  }

  function safeLink(url) {
    // A # link is safe as a temporary placeholder. Otherwise allow normal paths
    // and http(s) links only, avoiding unsafe protocol links in content data.
    if (url === "#") return "#";
    return /^(https?:\/\/|\/|\.\/|\.\.\/|assets\/)/.test(url || "") ? url : "#";
  }

  function externalAttributes(url) {
    return /^https?:\/\//.test(url || "") ? ' target="_blank" rel="noopener noreferrer"' : "";
  }

  function renderProjects() {
    $('[data-projects-list]').innerHTML = content.projects
      .map((project) => {
        const url = safeLink(project.link);
        return `
          <article class="project-card reveal">
            <div class="project-orb" aria-hidden="true"></div>
            <span class="project-meta">${escapeHTML(project.type)}</span>
            <h3>${escapeHTML(project.title)}</h3>
            <p>${escapeHTML(project.description)}</p>
            <a class="text-link light-link project-link" href="${escapeHTML(url)}"${externalAttributes(url)}>
              ${escapeHTML(project.linkLabel || "Explore work")} <span aria-hidden="true">↗</span>
            </a>
          </article>
        `;
      })
      .join("");
  }

  function renderBlog() {
    const blogContainer = $('[data-blog-list]');
    blogContainer.innerHTML = content.blog
      .map((post) => {
        const url = safeLink(post.link);
        return `
          <article class="blog-card reveal">
            <a href="${escapeHTML(url)}"${externalAttributes(url)}>
              <span class="blog-date">${escapeHTML(post.date)}</span>
              <h3>${escapeHTML(post.title)}</h3>
              <p>${escapeHTML(post.description)}</p>
            </a>
          </article>
        `;
      })
      .join("");
  }

  function renderSocialLinks() {
    $('[data-social-links]').innerHTML = content.social
      .map((link) => {
        const url = safeLink(link.url);
        return `<a href="${escapeHTML(url)}"${externalAttributes(url)}>${escapeHTML(link.label)} <span aria-hidden="true">↗</span></a>`;
      })
      .join("");
  }

  hydratePersonalDetails();
  renderAbout();
  renderResearch();
  renderProjects();
  renderBlog();
  renderSocialLinks();
  $('#current-year').textContent = new Date().getFullYear();

  /* Hide the missing-photo icon and use the designed placeholder until you add
     assets/images/profile.jpg. Once the image successfully loads, it fades in. */
  const profileImage = $('#profile-image');
  profileImage.addEventListener("load", () => profileImage.parentElement.classList.add("has-photo"));
  profileImage.addEventListener("error", () => profileImage.parentElement.classList.remove("has-photo"));
  if (profileImage.complete && profileImage.naturalWidth) {
    profileImage.parentElement.classList.add("has-photo");
  }

  /* ---------------------------------------------------------------
     MOBILE NAVIGATION
     --------------------------------------------------------------- */
  const menuButton = $('.menu-toggle');
  const navigation = $('.primary-nav');
  const menuLinks = $$('a', navigation);

  function setMenu(open) {
    menuButton.setAttribute("aria-expanded", String(open));
    navigation.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  }

  menuButton.addEventListener("click", () => {
    setMenu(menuButton.getAttribute("aria-expanded") !== "true");
  });
  menuLinks.forEach((link) => link.addEventListener("click", () => setMenu(false)));
  window.addEventListener("resize", () => {
    if (window.innerWidth > 850) setMenu(false);
  });

  /* Mark the navigation link for the section currently closest to view. */
  const navTargets = menuLinks
    .map((link) => ({ link, section: $(link.getAttribute("href")) }))
    .filter((entry) => entry.section);
  const activeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navTargets.forEach(({ link }) => link.classList.remove("active"));
        const matched = navTargets.find(({ section }) => section === entry.target);
        if (matched) matched.link.classList.add("active");
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
  navTargets.forEach(({ section }) => activeObserver.observe(section));

  /* Reveal elements only when motion is allowed. */
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const reveals = $$(".reveal");
  if (reducedMotion.matches) {
    reveals.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });
    reveals.forEach((element) => revealObserver.observe(element));
  }

  /* ---------------------------------------------------------------
     COSMOLOGY CANVAS
     A deliberately small particle animation: no libraries, no images, and it
     pauses when the tab is not visible. Change STAR_COUNT to adjust density.
     --------------------------------------------------------------- */
  function setupCosmos() {
    const canvas = $('#cosmos-canvas');
    const context = canvas.getContext("2d");
    const hero = $('.hero');
    const STAR_COUNT = window.innerWidth < 650 ? 52 : 92;
    let stars = [];
    let width = 0;
    let height = 0;
    let animationFrame;

    function makeStar() {
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + .5,
        speed: Math.random() * .11 + .025,
        alpha: Math.random() * .55 + .2,
        drift: (Math.random() - .5) * .09,
        phase: Math.random() * Math.PI * 2
      };
    }

    function resize() {
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
      width = hero.clientWidth;
      height = hero.clientHeight;
      canvas.width = width * pixelRatio;
      canvas.height = height * pixelRatio;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      stars = Array.from({ length: STAR_COUNT }, makeStar);
    }

    function draw(time) {
      context.clearRect(0, 0, width, height);
      const elapsed = time * .001;

      // Faint orbital paths give the visual a cosmology-inspired character.
      context.save();
      context.translate(width * .76, height * .42);
      context.rotate(-.3);
      context.strokeStyle = "rgba(157, 200, 241, 0.10)";
      context.lineWidth = 1;
      [150, 235, 330].forEach((radius, index) => {
        context.beginPath();
        context.ellipse(0, 0, radius, radius * (.26 + index * .02), 0, 0, Math.PI * 2);
        context.stroke();
      });
      context.restore();

      stars.forEach((star) => {
        star.y -= star.speed;
        star.x += star.drift;
        if (star.y < -3) { star.y = height + 3; star.x = Math.random() * width; }
        if (star.x < -3) star.x = width + 3;
        if (star.x > width + 3) star.x = -3;

        const shimmer = Math.sin(elapsed * 1.8 + star.phase) * .14;
        context.beginPath();
        context.fillStyle = `rgba(215, 235, 255, ${Math.max(.12, star.alpha + shimmer)})`;
        context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        context.fill();
      });

      animationFrame = requestAnimationFrame(draw);
    }

    resize();
    if (!reducedMotion.matches) animationFrame = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(animationFrame);
      else if (!reducedMotion.matches) animationFrame = requestAnimationFrame(draw);
    });
  }

  setupCosmos();
})();
