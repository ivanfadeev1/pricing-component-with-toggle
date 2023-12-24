let toggle = document.querySelector('.toggle__input');
let prices = document.querySelectorAll('.card__price');

for (let price of prices) {
    price.textContent = price.dataset.monthly;
}

toggle.addEventListener('change', function() {
    for (let price of prices) {
      if (toggle.checked) {
          price.textContent = price.dataset.monthly;
        } else {
          price.textContent = price.dataset.annually;
      }
    }
});