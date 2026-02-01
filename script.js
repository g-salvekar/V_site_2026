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
    <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTI0aDE1OGcyd205ZTVuaG92amV1dnFoYmYyZDZyeDh4dmozM2xneSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/sLkIthus9lEwoe7PRx/giphy.gif"
         style="width:100%; border-radius:16px; margin-top:20px;">
  `;
});
