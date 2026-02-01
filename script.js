const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const card = document.getElementById("card");

let scale = 1;

// Make "No" move away and shrink
function dodgeNo() {
  scale -= 0.08;
  if (scale < 0.35) scale = 0.35;

  const x = Math.random() * 200 - 100;
  const y = Math.random() * 100 - 50;

  noBtn.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
}

// Desktop hover
noBtn.addEventListener("mouseenter", dodgeNo);

// Mobile touch
noBtn.addEventListener("touchstart", dodgeNo);

// YES button click
yesBtn.addEventListener("click", () => {
  confetti({
    particleCount: 200,
    spread: 80,
    origin: { y: 0.6 }
  });

  card.innerHTML = `
    <div class="emoji">🎉</div>
    <h1>YAY!!!</h1>
    <p>You made the correct choice 😌</p>
    <img src="https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif"
         style="width:100%; border-radius:16px; margin-top:20px;">
  `;
});
