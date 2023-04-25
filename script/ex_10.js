window.onload = () => {
  const submitBtn = document.getElementById('submit-btn');
  const postalCodeInput = document.getElementById('postal-code');
  const resultDiv = document.getElementById('result');

  submitBtn.addEventListener('onclick', () => {
    const postalCode = postalCodeInput.value;
    fetch(`https://geo.api.gouv.fr/communes?codePostal=${postalCode}`)
      .then(response => response.json())
      .then(data => {
        const communeName = data[0].nom;
        const acheminementLabel = data[0].codesPostaux[0];
        result.innerHTML = `Commune Name: ${communeName} <br> Acheminement Label: ${acheminementLabel}.`;
      })
      .catch(error => console.error(error));
  });
};