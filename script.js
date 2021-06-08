const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const play = document.getElementById("ply");
const player = document.querySelectorAll("p");

play.addEventListener("click", (e) => {
  const random1 = Math.trunc(Math.random() * 6 + 1);
  const random2 = Math.trunc(Math.random() * 6 + 1);
  player[0].classList.remove("hidden");
  player[1].classList.remove("hidden");
  img1.setAttribute("src", `images/dice${random1}.png`);
  img2.setAttribute("src", `images/dice${random2}.png`);
  if (random1 > random2) {
    document.querySelector(".head").textContent = "Player 1 won the match";
  } else if (random1 < random2) {
    document.querySelector(".head").textContent = "Player 2 won the match";
  } else {
    document.querySelector(".head").textContent = "Tie";
  }
});
