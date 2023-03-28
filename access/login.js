const change = document.querySelectorAll("#box h6");
const change1 = document.querySelector(".change");
for (let i = 0; i < change.length; i++) {
  change[i].onclick = function () {
    change1.classList.toggle("active");
  };
}
// Save value in storage
//Get element login
const nameLogin = document.querySelector("#login .name");
const passLogin = document.querySelector("#login .pass");
const loginBtn = document.querySelector("#login button a");
console.log(loginBtn);
//Get element register
const emailRegister = document.querySelector("#register .email");
const userRegister = document.querySelector("#register .username");
const passRegister = document.querySelector("#register .pass");
const registerBtn = document.querySelector("#register button a");
//Save value in storage
loginBtn.addEventListener("click", function () {
  localStorage.setItem("username", nameLogin.value.trim());
  localStorage.setItem("password", passLogin.value.trim());
});
registerBtn.addEventListener("click", function () {
  localStorage.setItem("userRegister", userRegister.value.trim());
  localStorage.setItem("passRegister", passRegister.value.trim());
  localStorage.setItem("emailRegister", emailRegister.value.trim());
});
//Check username and password | Notification
const access = document.querySelector("#access");
const error = document.querySelector("#error");
console.log(access, error);
fetch("./access/main.json")
  .then((response) => response.json())
  .then((data) => {
    let count = 0;
    loginBtn.addEventListener("click", function () {
      let a = nameLogin.value.trim();
      let b = passLogin.value.trim();
      for (let i = 0; i < data.accounts.length; i++) {
        if (a == data.accounts[i].username && b == data.accounts[i].password) {
          count++;
        }
      }
      if (count == 0) {
        error.classList.add("active");
        setTimeout(() => {
          error.classList.remove("active");
        }, 2000);
      } else {
        access.classList.add("active");
        setTimeout(() => {
          access.classList.remove("active");
        }, 2000);
      }
    });
  })
  .catch((error) => console.error(error));
