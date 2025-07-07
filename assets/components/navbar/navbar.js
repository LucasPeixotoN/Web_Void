document.addEventListener("DOMContentLoaded", () => {
  const includes = document.querySelectorAll('[data-include]');

  includes.forEach(el => {
    const file = el.getAttribute("data-include");
    fetch(file)
      .then(resp => resp.text())
      .then(html => el.innerHTML = html);
  });
});
