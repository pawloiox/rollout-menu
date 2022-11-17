(() => {
  const button = document.querySelector("#button");
  const rollout = document.querySelector("#rollout");
  button.addEventListener("click", () => {
    rollout.classList.toggle("open");
  });
})();
