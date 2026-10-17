const searchInput = document.getElementById("resourceSearch");
const cards = [...document.querySelectorAll(".resource-card")];
const empty = document.getElementById("searchEmpty");
searchInput?.addEventListener("input", () => {
  const term = searchInput.value.trim().toLowerCase();
  let visible = 0;
  cards.forEach(card => {
    const match = (card.innerText + " " + (card.dataset.search || "")).toLowerCase().includes(term);
    card.hidden = !match;
    if (match) visible++;
  });
  empty.hidden = visible !== 0;
});
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("siteNav");
menuToggle?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle?.setAttribute("aria-expanded", "false");
}));
