const message = document.querySelector(".message");
const form = document.querySelector(".authorization");

form.addEventListener("submit", async function (event) {
  const userData = localStorage.getItem("user");
  if (userData) {
    const user = JSON.parse(userData);
    const loginUser = user.email;
    const passwordUser = user.password;
    const loginEnter = document.getElementById("login").value;
    const passwordEnter = document.getElementById("password").value;

    async function hashPassword(password) {
      return crypto.subtle
        .digest("SHA-256", new TextEncoder().encode(password))
        .then((buffer) => {
          const hashArray = Array.from(new Uint8Array(buffer));
          return hashArray
            .map((byte) => byte.toString(16).padStart(2, "0"))
            .join("");
        });
    }

    async function hashedPassword() {
      const hashedPassword = await hashPassword(passwordEnter);
      return hashedPassword;
    }
    async function change() {
      if (loginUser === loginEnter && passwordUser === (await hashedPassword())) {
        let userLogIn = {
          login: loginUser,
        };

        localStorage.setItem("userLogin", JSON.stringify(userLogIn));
        alert("Ви успішно ввійшли в систему!");
      } else {
        alert("Логін або пароль неправильні!");
      }
    }
    await change();
  } else {
    message.textContent = "Вас немає в системі, зареєструйтеся, будь ласка!";
    event.preventDefault();
  }
});
