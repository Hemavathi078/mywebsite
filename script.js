// script.js – Advanced Script for Girlish Theme Effects

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Animate the header with a smooth fade-in and scale effect
  const header = document.querySelector("header");
  header.style.opacity = 0;
  header.style.transform = "scale(0.9)";
  header.style.transition = "all 1.2s ease-in-out";
  setTimeout(() => {
    header.style.opacity = 1;
    header.style.transform = "scale(1)";
  }, 300);

  // Add floating hearts effect
  createFloatingHearts();

  // Button hover shimmer effect
  const buttons = document.querySelectorAll("a.button, a");
  buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      btn.classList.add("shimmer");
    });
    btn.addEventListener("mouseleave", () => {
      btn.classList.remove("shimmer");
    });
  });
});

// Create floating hearts animation
function createFloatingHearts() {
  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.top = 0;
  container.style.left = 0;
  container.style.width = "100%";
  container.style.height = "100%";
  container.style.pointerEvents = "none";
  container.style.zIndex = 9999;
  document.body.appendChild(container);

  setInterval(() => {
    const heart = document.createElement("div");
    heart.innerText = "♥";
    heart.style.position = "absolute";
    heart.style.fontSize = `${Math.random() * 15 + 20}px`;
    heart.style.color = ["#ffb6c1", "#ff69b4", "#ffcccb", "#ffc0cb"][Math.floor(Math.random() * 4)];
    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = "100%";
    heart.style.transition = "top 5s ease-out, opacity 5s";
    container.appendChild(heart);

    setTimeout(() => {
      heart.style.top = "-10%";
      heart.style.opacity = 0;
    }, 10);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  }, 500);
}

// Optional shimmer CSS class
const style = document.createElement("style");
style.innerHTML = `
  .shimmer {
    background-image: linear-gradient(120deg, rgba(255,192,203,0.2) 0%, rgba(255,192,203,0.4) 20%, rgba(255,182,193,0.6) 60%, rgba(255,192,203,0.2) 100%);
    background-size: 200% 100%;
    animation: shimmer 2s infinite linear;
  }

  @keyframes shimmer {
    from { background-position: 200% 0; }
    to { background-position: -200% 0; }
  }
`;
document.head.appendChild(style);
/* Rose & peach palette for variety */
const heartColors = ['#a0005e', '#ff69b4', '#ff94b6', '#ffaecb', '#fc6c85'];

function createHeart() {
  const heart       = document.createElement('div');
  heart.className   = 'heart';
  heart.textContent = '❤';                       // use '💖' or '🌸' for blossoms
  /* randomize properties */
  heart.style.left            = Math.random() * 100 + 'vw';
  heart.style.fontSize        = 20 + Math.random() * 20 + 'px';
  heart.style.animationDuration = 4 + Math.random() * 4 + 's';
  heart.style.color           = heartColors[Math.floor(Math.random() * heartColors.length)];
  document.body.appendChild(heart);

  /* remove after animation ends to keep DOM light */
  setTimeout(() => heart.remove(), 9000);
}

/* spawn a new heart every 350 ms */
setInterval(createHeart, 350);

