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
  const number = document.getElementById("number").textContent;
  const generalPrice = document.querySelector(".modal-price");
  const address = document.getElementById("address").textContent;
  const phone = document.getElementById("phone").textContent;

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
  });

  // Управління формою успішного замовлення
  orderButton.addEventListener("click", function () {
    if (number && address && phone) {
      successModal.style.display = "flex";
    }
  });

  closeSuccessButton.addEventListener("click", function () {
    successModal.style.display = "none";
  });
});
