function year() {
  const currentYear = document.getElementById("currentYear");
  const year = new Date();
  currentYear.textContent = year.getFullYear();
}

export {year};