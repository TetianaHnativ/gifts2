document.addEventListener("DOMContentLoaded", function () {
  // Отримайте дані з localStorage
  let storedGiftData = localStorage.getItem("selectedGift");

  // Перевірте, чи дані збережені у localStorage
  if (storedGiftData) {
    // Розпакуйте дані у об'єкт
    let selectedGift = JSON.parse(storedGiftData);

    // Використовуйте дані на вашій сторінці

    // Код, який має бути викликаний після завантаження сторінки
    document.querySelector(".gift-img").setAttribute("src", selectedGift.img);
    document.querySelector(".gift-name").textContent = selectedGift.name;
    document.querySelector(".gift-category").textContent =
      selectedGift.category;
    document.querySelector(".gift-price").textContent = selectedGift.price;

    // Очистіть дані у localStorage після використання, якщо потрібно
    //localStorage.removeItem("selectedGift");
  }
});

//Управління формами
document.addEventListener("DOMContentLoaded", function () {
  // Отримуємо елементи DOM для подальших взаємодій (кнопки)
  const openButton = document.querySelector(".order-button");
  const orderModal = document.getElementById("order-modal");
  const closeOrderButton = document.querySelector(".order-close");
  const closeSuccessButton = document.querySelector(".success-close");
  const orderButton = document.querySelector(".modal-form-button");
  const successModal = document.getElementById("success-modal");

  // Отримуємо елементи DOM для подальших взаємодій
  const phone = document.getElementById("phone");

  phone.addEventListener("input", function (event) {
    const inputValue = event.target.value;

    // Регулярний вираз для перевірки, чи введені лише цифри та деякі додаткові символи
    const validCharactersRegex = /^[0-9+]*$/;

    if (!validCharactersRegex.test(inputValue)) {
      // Видаліть останній введений символ, який не відповідає правилам
      event.target.value = inputValue.slice(0, -1);
    }

    // Перевірка на максимальну довжину номеру телефону
    if (inputValue.length > 15) {
      // Обрізаємо значення, якщо воно занадто довге
      event.target.value = inputValue.slice(0, 15);
    }
  });

  const numberInput = document.querySelector("#number");
  const priceOne = parseFloat(
    document.querySelector(".gift-price").textContent
  );
  document.querySelector(".modal-price").textContent = (
    numberInput.value * priceOne
  ).toFixed(2);

  // Додаємо обробник подій для елементу вводу кількості
  numberInput.addEventListener("input", function () {
    const quantity = parseFloat(numberInput.value) || 0;
    const totalPrice = (quantity * priceOne).toFixed(2);
    document.querySelector(".modal-price").textContent = totalPrice;
  });

  // form
  const form = document.querySelector("#order-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  // Управління формою замовленя
  openButton.addEventListener("click", function () {
    orderModal.style.display = "flex";
  });

  closeOrderButton.addEventListener("click", function () {
    orderModal.style.display = "none";
    form.reset();
  });

  // Управління формою успішного замовлення
  orderButton.addEventListener("click", function () {
    const totalPrice = document.querySelector(".modal-price").textContent;
    const number = document.querySelector("#number").value;
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;
    const giftName = document.querySelector(".gift-name").textContent;

    if (number && address.length >= 5 && phone && phone.length >= 10) {
      let orderData = {
        name: giftName,
        number: number,
        address: address,
        phone: phone,
        price: totalPrice,
      };

      localStorage.setItem("order", JSON.stringify(orderData));
      setTimeout(function () {
        orderModal.style.display = "none";
      }, 100);

      setTimeout(function () {
        successModal.style.display = "flex";
      }, 2000);

      setTimeout(function () {
        successModal.style.display = "none";
      }, 4000);

      form.reset();
    }
  });

  closeSuccessButton.addEventListener("click", function () {
    successModal.style.display = "none";
  });
});
