const cards = Array.from(document.querySelectorAll(".card"));
const next = document.querySelector("#next");
let current = 0;

function showCard() {
  cards.forEach((card, index) => {
    card.hidden = index !== current;
    card.querySelector("details").open = false;
  });
  next.textContent =
    current === cards.length - 1 ? next.dataset.again : next.dataset.next;
}

next.addEventListener("click", () => {
  current = (current + 1) % cards.length;
  showCard();
  cards[current].querySelector("h2").focus({ preventScroll: true });
});
showCard();
next.hidden = false;

const copy = document.querySelector("#copy");
const status = document.querySelector("#status");
copy.hidden = false;
copy.addEventListener("click", async () => {
  const command = document.querySelector("#command");
  try {
    await navigator.clipboard.writeText(command.textContent);
    status.textContent = copy.dataset.copied;
  } catch {
    const range = document.createRange();
    range.selectNodeContents(command);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = copy.dataset.failed;
  }
});
