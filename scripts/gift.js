//Управління формами
document.addEventListener("DOMContentLoaded", function () {
  // Отримуємо елементи DOM для подальших взаємодій
  const openButton = document.querySelector(".order-button");
  const orderModal = document.getElementById("order-modal");
  const closeOrderButton = document.querySelector(".order-close");
  const closeSuccessButton = document.querySelector(".success-close");
  const orderButton = document.querySelector(".modal-form-button");
  const successModal = document.getElementById("success-modal");

  // Управління формою замовленя
  openButton.addEventListener("click", function () {
    orderModal.style.display = "flex";
  });

  closeOrderButton.addEventListener("click", function () {
    orderModal.style.display = "none";
  });

  // Управління формою успішного замовлення
  orderButton.addEventListener("click", function () {
    successModal.style.display = "flex";
  });

  closeSuccessButton.addEventListener("click", function () {
    successModal.style.display = "none";
  });
});
