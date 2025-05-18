function calculate() {
  const today = new Date();
  const pastDate = new Date('1991');

  const diffYears = today.getFullYear() - pastDate.getFullYear();

  document.getElementById('result').innerText = `${diffYears}`;
}

calculate();
