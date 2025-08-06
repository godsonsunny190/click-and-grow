["header", "footer"].forEach((part) => {
  fetch(`${part}.html`)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(part).innerHTML = data;
    });
});
