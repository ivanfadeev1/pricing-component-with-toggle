const prices = document.querySelectorAll('.card__price');
const annuallyInput = document.querySelector('#annually');
const monthlyInput = document.querySelector('#monthly');

for (const price of prices) {
  price.textContent = price.dataset.monthly;
}

const updatePrices = (checkedInput) => {
  for (const price of prices) {
    if (checkedInput === annuallyInput && annuallyInput.checked) {
      price.textContent = price.dataset.annually;
    } else if (checkedInput === monthlyInput && monthlyInput.checked) {
      price.textContent = price.dataset.monthly;
    }
  }
};

monthlyInput.addEventListener('change', () => {
  updatePrices(monthlyInput);
});

annuallyInput.addEventListener('change', () => {
  updatePrices(annuallyInput);
});