let email = document.getElementById("email");
let password = document.getElementById("password");
let userName = document.getElementById("name");
let number = document.getElementById("number");
let login = document.getElementById("login");
let createAccount = document.getElementById("create-Acc");
let togglePassword = document.getElementById("togglePassword");

let allUserData = JSON.parse(localStorage.getItem("createUser")) || [];

if (togglePassword) {
  togglePassword.addEventListener("change", () => {
    password.type = togglePassword.checked ? "text" : "password";
  });
}

if (login) {
  login.addEventListener("click", (e) => {
    e.preventDefault();

    if (!email.value || !password.value) {
      alert("Please fill all fields");
      return;
    }

    let userFound = false;

    for (let i = 0; i < allUserData.length; i++) {
      if (
        email.value === allUserData[i].email &&
        password.value === allUserData[i].password
      ) {
        userFound = true;
        break;
      }
    }

    if (userFound) {
      alert("Login Successful ✅");
    } else {
      alert("Invalid Email or Password ❌");
    }
  });
}

if (createAccount) {
  createAccount.addEventListener("click", (e) => {
    e.preventDefault();

    if (!userName.value || !number.value || !email.value || !password.value) {
      alert("Please fill all fields");
      return;
    }
    let alreadyRegistered = allUserData.some(
      (user) => user.email === email.value
    );

    if (alreadyRegistered) {
      alert("Already Registered ❗");
      return;
    }

    let createUser = {
      name: userName.value,
      number: number.value,
      email: email.value,
      password: password.value,
    };

    allUserData.push(createUser);
    localStorage.setItem("createUser", JSON.stringify(allUserData));

    alert("Account Created Successfully 🎉");

    userName.value = "";
    number.value = "";
    email.value = "";
    password.value = "";
  });
}