const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const buttons = document.getElementById("buttons");
const result = document.getElementById("result");

function moveNoButton() {
  const area = buttons.getBoundingClientRect();
  const btn = noBtn.getBoundingClientRect();

  // zone dispo à l'intérieur du conteneur
  const padding = 6;
  const maxX = area.width - btn.width - padding;
  const maxY = area.height - btn.height - padding;

  const x = Math.max(padding, Math.random() * maxX);
  const y = Math.max(padding, Math.random() * maxY);

  // on le met en position absolue pour le déplacer librement
  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", (e) => {
  e.preventDefault();
  moveNoButton();
});

yesBtn.addEventListener("click", () => {
  title.textContent = "Je suis l'homme le plus heureux 😍❤️";
  subtitle.textContent = "Tu viens de me rendre trop heureux.";
  buttons.style.display = "none";
  result.classList.remove("hidden");
});
