/* ============================================================
   Tokyo Muslim Guide — Main JS
   Renders cards from data.js, handles search, filters, nav.
   ============================================================ */

(function () {
  "use strict";

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.getElementById("nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(open));
    });
  }

  /* ---------- SVG icon helpers ---------- */
  const ICONS = {
    pin: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
    clock: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    users: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    train: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="3" width="16" height="14" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="m8 19-2 3"/><path d="m18 22-2-3"/><circle cx="8.5" cy="14.5" r=".5"/><circle cx="15.5" cy="14.5" r=".5"/></svg>',
    utensils: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7"/></svg>',
    plane: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>',
    building: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/></svg>',
    landmark: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>',
    compass: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
    basket: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m5 11 4-7"/><path d="m19 11-4-7"/><path d="M2 11h20"/><path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4"/><path d="m9 11 1 9"/><path d="M4.5 15.5h15"/><path d="m15 11-1 9"/></svg>'
  };

  function escapeHtml(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* ---------- Card renderers ---------- */
  function mosqueCard(m) {
    const facilities = m.facilities.map(f => `<span class="badge badge-price">${escapeHtml(f)}</span>`).join("");
    const website = m.website
      ? `<a class="chip-link subtle" href="${escapeHtml(m.website)}" target="_blank" rel="noopener">Website</a>`
      : "";
    return `
      <article class="card" data-tags="${m.tags.join(" ")}" data-search="${escapeHtml((m.name + " " + m.area + " " + m.nameJp + " " + m.station + " " + m.description).toLowerCase())}">
        <h3>${escapeHtml(m.name)} <span class="jp">${escapeHtml(m.nameJp)}</span></h3>
        <div class="card-meta">
          <span class="row">${ICONS.pin}<span>${escapeHtml(m.address)}</span></span>
          <span class="row">${ICONS.train}<span>${escapeHtml(m.station)}</span></span>
          <span class="row">${ICONS.clock}<span>${escapeHtml(m.jumuah)}</span></span>
          <span class="row">${ICONS.users}<span>${escapeHtml(m.capacity)}</span></span>
        </div>
        <div class="tag-row">${facilities}</div>
        <p class="desc">${escapeHtml(m.description)}</p>
        <div class="card-actions">
          <a class="chip-link" href="${escapeHtml(m.maps)}" target="_blank" rel="noopener">${ICONS.pin} Open in Maps</a>
          ${website}
        </div>
      </article>`;
  }

  function restaurantCard(r) {
    const halalClass = r.halal.toLowerCase().includes("certified") ? "badge-halal" : "badge-friendly";
    return `
      <article class="card" data-tags="${r.tags.join(" ")}" data-search="${escapeHtml((r.name + " " + r.area + " " + r.cuisine + " " + r.station + " " + r.description).toLowerCase())}">
        <div class="tag-row">
          <span class="badge ${halalClass}">${escapeHtml(r.halal)}</span>
          <span class="badge badge-price">${escapeHtml(r.price)}</span>
        </div>
        <h3>${escapeHtml(r.name)}</h3>
        <div class="card-meta">
          <span class="row">${ICONS.utensils}<span>${escapeHtml(r.cuisine)}</span></span>
          <span class="row">${ICONS.pin}<span>${escapeHtml(r.area)}</span></span>
          <span class="row">${ICONS.train}<span>${escapeHtml(r.station)}</span></span>
        </div>
        <p class="desc">${escapeHtml(r.description)}</p>
        <div class="card-actions">
          <a class="chip-link" href="${escapeHtml(r.maps)}" target="_blank" rel="noopener">${ICONS.pin} Open in Maps</a>
        </div>
      </article>`;
  }

  function groceryCard(g) {
    return `
      <article class="card">
        <h3>${escapeHtml(g.name)}</h3>
        <div class="card-meta">
          <span class="row">${ICONS.pin}<span>${escapeHtml(g.area)}</span></span>
        </div>
        <p class="desc">${escapeHtml(g.notes)}</p>
        <div class="card-actions">
          <a class="chip-link" href="${escapeHtml(g.maps)}" target="_blank" rel="noopener">${ICONS.pin} Open in Maps</a>
        </div>
      </article>`;
  }

  function spaceItem(s) {
    const icon = ICONS[s.icon] || ICONS.compass;
    return `
      <div class="space-item">
        <span class="icon-wrap">${icon}</span>
        <div>
          <h3>${escapeHtml(s.name)}</h3>
          <p class="loc">${escapeHtml(s.location)}</p>
          <p>${escapeHtml(s.notes)}</p>
        </div>
      </div>`;
  }

  function tipCard(t) {
    return `
      <article class="tip">
        <h3>${escapeHtml(t.title)}</h3>
        <p>${escapeHtml(t.body)}</p>
      </article>`;
  }

  /* ---------- Search + filter wiring ---------- */
  function wireSearchFilter(searchId, filterId, gridId, emptyId) {
    const searchInput = document.getElementById(searchId);
    const filterBar = document.getElementById(filterId);
    const grid = document.getElementById(gridId);
    const empty = document.getElementById(emptyId);
    if (!grid) return;

    let activeFilter = "all";
    let query = "";

    function apply() {
      const cards = grid.querySelectorAll(".card");
      let visible = 0;
      cards.forEach(card => {
        const tags = card.dataset.tags || "";
        const haystack = card.dataset.search || "";
        const matchesFilter = activeFilter === "all" || tags.split(" ").includes(activeFilter);
        const matchesQuery = !query || haystack.includes(query);
        const show = matchesFilter && matchesQuery;
        card.style.display = show ? "" : "none";
        if (show) visible++;
      });
      if (empty) empty.classList.toggle("show", visible === 0);
    }

    if (searchInput) {
      searchInput.addEventListener("input", () => {
        query = searchInput.value.trim().toLowerCase();
        apply();
      });
    }

    if (filterBar) {
      filterBar.addEventListener("click", e => {
        const btn = e.target.closest(".filter-btn");
        if (!btn) return;
        filterBar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        activeFilter = btn.dataset.filter;
        apply();
      });
    }
  }

  /* ---------- Page bootstrapping ---------- */
  const mosqueGrid = document.getElementById("mosque-grid");
  if (mosqueGrid && typeof MOSQUES !== "undefined") {
    mosqueGrid.innerHTML = MOSQUES.map(mosqueCard).join("");
    wireSearchFilter("mosque-search", "mosque-filters", "mosque-grid", "mosque-empty");
  }

  const spaceList = document.getElementById("space-list");
  if (spaceList && typeof PRAYER_SPACES !== "undefined") {
    spaceList.innerHTML = PRAYER_SPACES.map(spaceItem).join("");
  }

  const foodGrid = document.getElementById("food-grid");
  if (foodGrid && typeof RESTAURANTS !== "undefined") {
    foodGrid.innerHTML = RESTAURANTS.map(restaurantCard).join("");
    wireSearchFilter("food-search", "food-filters", "food-grid", "food-empty");
  }

  const groceryGrid = document.getElementById("grocery-grid");
  if (groceryGrid && typeof GROCERIES !== "undefined") {
    groceryGrid.innerHTML = GROCERIES.map(groceryCard).join("");
  }

  const tipsList = document.getElementById("tips-list");
  if (tipsList && typeof TIPS !== "undefined") {
    tipsList.innerHTML = TIPS.map(tipCard).join("");
  }
})();
