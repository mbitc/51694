function calculate() {
  const today = new Date();
  const pastDate = new Date('1991-07-01');

  const diffTime = today - pastDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffYears = today.getFullYear() - pastDate.getFullYear();

  document.getElementById('result').innerText = `${diffYears}`;
}

calculate();
