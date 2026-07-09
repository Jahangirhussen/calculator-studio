/* Reusable helpers for calculator pages */
function formatNumber(n, decimals=2){
  if(isNaN(n) || !isFinite(n)) return "—";
  return Number(n).toLocaleString(undefined,{maximumFractionDigits:decimals, minimumFractionDigits:0});
}

function showResult(boxSelector, value){
  const box = document.querySelector(boxSelector);
  if(!box) return;
  box.classList.remove("hidden");
  const valueEl = box.querySelector(".value");
  if(valueEl) valueEl.textContent = value;
  box.classList.add("copied-flash");
  setTimeout(()=>box.classList.remove("copied-flash"), 600);
}

function copyResultText(selector){
  const el = document.querySelector(selector);
  if(!el) return;
  navigator.clipboard.writeText(el.textContent.trim()).then(()=>{
    alert("Result copied to clipboard!");
  });
}

function shareCurrentPage(){
  const url = window.location.href;
  if(navigator.share){
    navigator.share({ title: document.title, url }).catch(()=>{});
  } else {
    navigator.clipboard.writeText(url).then(()=>alert("Link copied to clipboard!"));
  }
}

function resetForm(formSelector, resultSelector){
  const form = document.querySelector(formSelector);
  if(form) form.reset();
  const result = document.querySelector(resultSelector);
  if(result) result.classList.add("hidden");
}

/* FAQ accordion toggle, attach on DOM ready for any .faq-item */
document.addEventListener("DOMContentLoaded", ()=>{
  document.querySelectorAll(".faq-item .faq-q").forEach(q=>{
    q.addEventListener("click", ()=>{
      q.closest(".faq-item").classList.toggle("open");
    });
  });
});
