const surname = document.querySelector("#surname");
const name = document.querySelector("#name");
const phone = document.querySelector("#phone");
const email = document.querySelector("#login");
const password = document.querySelector("#password");
const passwordConfirmation = document.querySelector("#password-confirmation");
const registerButton = document.querySelector(".registration-button");
const message = document.querySelector(".message");
const form = document.querySelector(".registration");

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

password.addEventListener("input", function (event) {
  const inputValue = event.target.value;

  // Регулярний вираз для перевірки, чи введені лише цифри та деякі додаткові символи
  const validCharactersRegex = /^[ ]*$/;

  if (validCharactersRegex.test(inputValue)) {
    // Видаліть останній введений символ, який не відповідає правилам
    event.target.value = inputValue.slice(0, -1);
  }
});

passwordConfirmation.addEventListener("input", function (event) {
  const inputValue = event.target.value;

  // Регулярний вираз для перевірки, чи введені лише цифри та деякі додаткові символи
  const validCharactersRegex = /^[ ]*$/;

  if (validCharactersRegex.test(inputValue)) {
    // Видаліть останній введений символ, який не відповідає правилам
    event.target.value = inputValue.slice(0, -1);
  }
});

form.addEventListener("submit", function (event) {
  const regex = /^(?=.*[a-zа-яё])(?=.*[A-ZА-ЯЁ])(?=.*\d)\S*$/;
  if (
    surname.value &&
    name.value &&
    phone.value.length >= 10 &&
    email.value &&
    password.value.length >= 8 &&
    passwordConfirmation.value.length >= 8
  ) {
    if (!regex.test(password.value)) {
      event.preventDefault();
      message.textContent =
        "Пароль має містити хоча б одну велику та маленьку літери та хоча б одну цифру, все без пробілів!";
    } else if (password.value != passwordConfirmation.value) {
      event.preventDefault();
      message.textContent = "Паролі не збігаються!";
    } else {
      let userData = {
        surname: surname.value,
        name: name.value,
        phone: phone.value,
        email: email.value,
        password: password.value,
      };

      localStorage.setItem("user", JSON.stringify(userData));
    }
  }
});
