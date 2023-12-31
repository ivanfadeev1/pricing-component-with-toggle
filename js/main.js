const toggle = document.querySelector('.toggle__input');
const prices = document.querySelectorAll('.card__price');

for (const price of prices) {
    price.textContent = price.dataset.monthly;
}

toggle.addEventListener('change', function() {
    for (const price of prices) {
      if (toggle.checked) {
          price.textContent = price.dataset.monthly;
        } else {
          price.textContent = price.dataset.annually;
      }
    }
});