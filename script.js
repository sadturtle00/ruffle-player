const input = document.getElementById("fileInput");
const playerContainer = document.getElementById("player");

input.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const blobURL = URL.createObjectURL(file);

  // Clear previous player
  playerContainer.innerHTML = "";

  // Create Ruffle player
  const ruffle = window.RufflePlayer.newest();
  const player = ruffle.createPlayer();

  playerContainer.appendChild(player);

  player.load({
    url: blobURL
  });
});
