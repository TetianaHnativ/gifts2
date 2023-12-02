const giftsList = document.querySelector(".gifts-list");
const gifts = document.querySelectorAll(".gifts-list-item");
//const buttons = document.querySelectorAll(".shop-button");

const filterGifts = (filter) => {
  gifts.forEach((gift) => {
    const category = gift.querySelector(".gift-category").textContent;
    if (filter !== "Усі" && category !== filter) {
      gift.style.display = "none";
    } else {
      gift.style.display = "flex";
    }
  });
  document.querySelector(".search").value = "";
};

function searchGift() {
  // Перебрати всі елементи списку
  for (const gift of gifts) {
    const search = document.querySelector(".search").value.toLowerCase();
    const giftName = gift.getAttribute("data-name").toLowerCase();

    // Перевірити, чи назва товару містить введений рядок
    if (giftName.includes(search)) {
      gift.style.display = "flex";
    } else {
      gift.style.display = "none";
    }
  }
}

function sortGifts() {
  const sort = document.querySelector(".sort-list").value;
  var giftsArray = Array.from(gifts);

  // Сортування товарів згідно вибраного значення
  switch (sort) {
    case "cheap":
      giftsArray.sort(function (a, b) {
        let priceA = parseInt(
          a.getElementsByClassName("gift-price")[0].innerText
        );
        let priceB = parseInt(
          b.getElementsByClassName("gift-price")[0].innerText
        );
        return priceA - priceB;
      });
      break;
    case "expensive":
      giftsArray.sort(function (a, b) {
        let priceA = parseInt(
          a.getElementsByClassName("gift-price")[0].innerText
        );
        let priceB = parseInt(
          b.getElementsByClassName("gift-price")[0].innerText
        );
        return priceB - priceA;
      });
      break;
    default:
      // Загальний порядок сортування
      giftsArray.sort(function (a, b) {
        return 0;
      });
      break;
  }

  // Очистка списку
  giftsList.innerHTML = "";

  // Додавання відсортованих елементів до списку
  giftsArray.forEach(function (item) {
    giftsList.appendChild(item);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Додайте обробник подій для кожного товару
  gifts.forEach(function (item) {
    item.addEventListener("click", function () {
      // Викликайте функцію для збереження даних у localStorage
      saveDataToLocalStorage(item);
    });
  });

  // Функція для збереження даних у localStorage
  function saveDataToLocalStorage(item) {
    // Отримайте дані про товар, які вам потрібно зберегти
    let giftImg = item.querySelector(".gift-img").getAttribute("src");
    let giftName = item.querySelector(".gift-name").innerText;
    let giftCategory = item.querySelector(".gift-category").innerText;
    let giftPrice = item.querySelector(".gift-price").innerText;

    // Створіть об'єкт для збереження
    let giftData = {
      img: giftImg,
      name: giftName,
      category: giftCategory,
      price: giftPrice,
    };

    // Збережіть об'єкт у localStorage
    localStorage.setItem("selectedGift", JSON.stringify(giftData));
  }
});
