//* variable
let body = document.body;

let titleSignUp = document.getElementById("titleSignUp");
let signUpContainer = document.getElementById("signUpContainer");
let signUpUser = document.getElementById("signUpUser");
let signUpPass = document.getElementById("signUpPass");
let signUpButton = document.getElementById("signUpButton");
let signUpError = document.getElementById("signUpError");
let signUpDone = document.getElementById("signUpDone");

let signInContainer = document.getElementById("signInContainer");
let titleSignIn = document.getElementById("titleSignIn");
let signInUser = document.getElementById("signInUser");
let signInPass = document.getElementById("signInPass");
let signInButton = document.getElementById("signInButton");
let signInError = document.getElementById("signInError");
let daftarYuk = document.getElementById("daftarYuk");

let logoutButton = document.getElementById("logoutButton");
let admin = document.getElementById("admin");
let user = document.getElementById("user");

//* menghilangkan sign up container saat sign in
signUpContainer.style.display = "none";
signUpError.style.display = "none";
signUpDone.style.dsiplay = "none";
signInError.style.display = "none";
admin.style.display = "none";
user.style.display = "none";
logoutButton.style.display = "none";

//* function buat akun baru
function signUp() {
    if(signUpUser.value !== "" && signUpPass.value !== "") {
localStorage.setItem("username", signUpUser.value);
localStorage.setItem("role", "user");
localStorage.setItem("password", signUpPass.value);
signUpDone.style.display = "block";
signUpError.style.display = "none";
    } else {
        signUpError.style.display = "block";
        signUpDone.style.display = "none";
    }
}

//* function untuk masuk / login
function signIn() {
    if (signInUser.value == localStorage.getItem('username') && signInPass.value == localStorage.getItem('password')) {
      localStorage.setItem('role', 'user')
      signInContainer.style.display = 'none'
      logoutButton.style.display = 'block'
      user.style.display = 'block'
    user.textContent = `Hi, ${signInUser.value}!`
      signInError.style.display = 'none'
      body.style.backgroundColor = '#d5d5d5'
    } else if (signInUser.value == 'admin' && signInPass.value == 'admin') {
      localStorage.setItem('username', 'admin')
      localStorage.setItem('role', 'admin')
      signInContainer.style.display = 'none'
      logoutButton.style.display = 'block'
      admin.style.display = 'block'
    admin.textContent = `Hi, ${signInUser.value}!`
      signInError.style.display = 'none'
      body.style.backgroundColor = '#d5d5d5'
    } else {
      signInError.style.display = 'block'
    }
  }

  if (localStorage.getItem('username')) {
    logoutButton.style.display = 'block';
    signInContainer.style.display = 'none';
    body.style.backgroundColor = '#d5d5d5';
    if (localStorage.getItem('role') == 'admin') {
      admin.style.display = 'block';
    admin.textContent = `Hi, ${signInUser.value}!`

    } else if (localStorage.getItem('role') == 'user') {
      user.style.display = 'block';
    user.textContent = `Hi, ${signInUser.value}!`

    };
  };

//* memunculkan sign up container saat klik daftar
function daftar() {
    signUpContainer.style.display = "flex";
    signInContainer.style.display = "none";
    signUpDone.style.display = "none";
}

//* memunculkan sign in container saat klik masuk
function masuk() {
    signUpContainer.style.display = "none";
    signInContainer.style.display = "flex"
}

//* function untuk logout
function logout() {
    localStorage.clear();
    location.reload();
} 