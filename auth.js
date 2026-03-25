const loginBox = document.querySelector(".login");
const registerBox = document.querySelector(".register");
const forgotBox = document.querySelector(".forgot");

loginBox.classList.add("active");

/* Switch to Register */

document.getElementById("showRegister").onclick = (e)=>{
e.preventDefault();
loginBox.classList.remove("active");
registerBox.classList.add("active");
};

/* Switch to Login */

document.getElementById("showLogin").onclick = (e)=>{
e.preventDefault();
registerBox.classList.remove("active");
loginBox.classList.add("active");
};

/* Forgot password */

document.getElementById("showForgot").onclick = (e)=>{
e.preventDefault();
loginBox.classList.remove("active");
forgotBox.classList.add("active");
};

/* Back to login */

document.getElementById("backLogin").onclick = (e)=>{
e.preventDefault();
forgotBox.classList.remove("active");
loginBox.classList.add("active");
};

/* Toggle password visibility */

const toggles = document.querySelectorAll(".toggle-password");

toggles.forEach(icon=>{

icon.addEventListener("click",()=>{

const input = icon.previousElementSibling;

if(input.type==="password"){

input.type="text";
icon.classList.remove("fa-eye");
icon.classList.add("fa-eye-slash");

}else{

input.type="password";
icon.classList.remove("fa-eye-slash");
icon.classList.add("fa-eye");

}

});

});

/* Confirm password validation */

document.getElementById("registerForm").addEventListener("submit",(e)=>{

const pass = document.getElementById("registerPassword").value;
const confirm = document.getElementById("confirmPassword").value;

if(pass !== confirm){

alert("Passwords do not match");
e.preventDefault();

}

});

function handleGoogleLogin(response){

const data = parseJwt(response.credential);

console.log(data);

localStorage.setItem("user", JSON.stringify({
name:data.name,
email:data.email,
picture:data.picture
}));

alert("Login successful!");

window.location.href = "index.html";

}

