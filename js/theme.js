(function(){
  const stored = localStorage.getItem("theme");
  const theme = stored || "dark";
  document.documentElement.setAttribute("data-theme", theme);
  window.addEventListener("DOMContentLoaded", ()=>{
    const btn = document.querySelector(".theme-toggle");
    if(!btn) return;
    updateIcon(btn);
    btn.addEventListener("click", ()=>{
      const current = document.documentElement.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
      updateIcon(btn);
    });
  });
  function updateIcon(btn){
    const current = document.documentElement.getAttribute("data-theme");
    btn.textContent = current === "dark" ? "☀️" : "🌙";
  }
})();
