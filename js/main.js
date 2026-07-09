/* Requires: calc-data.js loaded first, and a global `ROOT` string set on each page
   ("" for root pages, "../" for one-level-deep category/calculator pages). */
(function(){
  const root = typeof ROOT !== "undefined" ? ROOT : "";

  function buildHeader(){
    const navItems = CATEGORIES.map(cat=>{
      const links = calcsByCategory(cat.id).map(c=>`<a href="${root}${c.url}">${c.title}</a>`).join("");
      return `<li>
        <a href="${root}${cat.id}/index.html">${cat.label} <span class="caret">▾</span></a>
        <div class="dropdown">${links}</div>
      </li>`;
    }).join("");

    return `
    <header class="site-header">
      <div class="container header-inner">
        <a href="${root}index.html" class="logo">🧮<span>Calc</span>All</a>
        <nav class="main-nav">
          <ul>
            <li><a href="${root}index.html">Home</a></li>
            ${navItems}
            <li><a href="${root}about.html">About</a></li>
            <li><a href="${root}contact.html">Contact</a></li>
          </ul>
        </nav>
        <div class="header-actions">
          <button class="theme-toggle" aria-label="Toggle theme">🌙</button>
          <button class="hamburger" aria-label="Toggle menu"><span></span><span></span><span></span></button>
        </div>
      </div>
    </header>`;
  }

  function buildFooter(){
    const cols = CATEGORIES.slice(0,4).map(cat=>{
      const links = calcsByCategory(cat.id).slice(0,6).map(c=>`<a href="${root}${c.url}">${c.title}</a>`).join("");
      return `<div><h4>${cat.label}</h4>${links}</div>`;
    }).join("");
    return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <h4>🧮 Calculator Studio</h4>
            <p style="color:var(--text-soft);font-size:.85rem;margin-top:8px">All-in-one free online calculators for math, finance, health, time and more.</p>
          </div>
          ${cols}
        </div>
        <div class="footer-bottom">© <span id="year"></span> Calculator Studio. All rights reserved. | <a href="${root}about.html">About</a> | <a href="${root}contact.html">Contact</a></div>
      </div>
    </footer>`;
  }

  function mountLayout(){
    const headerMount = document.getElementById("site-header");
    const footerMount = document.getElementById("site-footer");
    if(headerMount) headerMount.outerHTML = buildHeader();
    if(footerMount) footerMount.outerHTML = buildFooter();
    const y = document.getElementById("year");
    if(y) y.textContent = new Date().getFullYear();
    bindNav();
  }

  function bindNav(){
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".main-nav");
    if(hamburger && nav){
      hamburger.addEventListener("click", ()=> nav.classList.toggle("active"));
    }
    document.querySelectorAll(".main-nav > ul > li").forEach(li=>{
      const link = li.querySelector(":scope > a");
      const dropdown = li.querySelector(".dropdown");
      if(!dropdown) return;
      link.addEventListener("click", (e)=>{
        if(window.innerWidth <= 768){
          e.preventDefault();
          li.classList.toggle("open");
        }
      });
    });
  }

  document.addEventListener("DOMContentLoaded", mountLayout);

  /* ===== Reusable card renderers ===== */
  window.CalcUI = {
    root,
    calcCard(c){
      return `<a href="${root}${c.url}" class="card calc-card">
        <div class="icon">${c.icon||"🧮"}</div>
        <h3>${c.title}</h3>
        <p>${c.desc}</p>
        <span class="tag">${categoryLabel(c.cat)}</span>
      </a>`;
    },
    categoryCard(cat){
      return `<a href="${root}${cat.id}/index.html" class="card category-card">
        <div class="icon">${cat.icon}</div>
        <h3>${cat.label}</h3>
        <p>${cat.desc}</p>
      </a>`;
    }
  };
})();
