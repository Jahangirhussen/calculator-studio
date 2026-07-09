/* Requires calc-data.js and main.js (for ROOT/CalcUI). Attaches to any input with [data-search] */
(function(){
  document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelectorAll("[data-search]").forEach(input=>{
      const resultsBox = document.querySelector(input.dataset.search);
      if(!resultsBox) return;
      input.addEventListener("input", ()=>{
        const q = input.value.trim().toLowerCase();
        if(!q){ resultsBox.classList.remove("active"); resultsBox.innerHTML=""; return; }
        const matches = CALCULATORS.filter(c=>
          c.title.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q) || c.cat.includes(q)
        ).slice(0,10);
        if(matches.length===0){
          resultsBox.innerHTML = `<a>No calculators found.</a>`;
        } else {
          resultsBox.innerHTML = matches.map(c=>`<a href="${CalcUI.root}${c.url}">${c.icon||"🧮"} ${c.title}</a>`).join("");
        }
        resultsBox.classList.add("active");
      });
      document.addEventListener("click", (e)=>{
        if(!resultsBox.contains(e.target) && e.target!==input) resultsBox.classList.remove("active");
      });
    });

    /* Category page filter (grid of .card inside [data-filter-grid]) */
    document.querySelectorAll("[data-filter]").forEach(input=>{
      const grid = document.querySelector(input.dataset.filter);
      if(!grid) return;
      input.addEventListener("input", ()=>{
        const q = input.value.trim().toLowerCase();
        grid.querySelectorAll(".calc-card").forEach(card=>{
          const text = card.textContent.toLowerCase();
          card.style.display = text.includes(q) ? "" : "none";
        });
      });
    });
  });
})();
