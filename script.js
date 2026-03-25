document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  // OPEN menu
  hamburger.addEventListener("click", function () {
    mobileMenu.classList.add("active");
  });

  // CLOSE menu (X button)
  if (closeMenu) {
    closeMenu.addEventListener("click", function () {
      mobileMenu.classList.remove("active");
    });
  }

  // CLOSE when clicking any link
  document.querySelectorAll("#mobileMenu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active");
    });
  });
}); 
let cart = [];
const cartCount = document.getElementById("cartCount");

document.querySelectorAll(".add-to-cart").forEach(btn => {
  btn.addEventListener("click", () => {
    const name = btn.dataset.name;
    const price = btn.dataset.price;

    cart.push({ name, price });
    cartCount.textContent = cart.length;

    btn.textContent = "Added ✓";
    btn.disabled = true;
  });
});

let favCount = 0;
const favCountEl = document.getElementById("favCount");

document.querySelectorAll(".fav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");

    if (btn.classList.contains("active")) {
      favCount++;
    } else {
      favCount--;
    }

    favCountEl.textContent = favCount;
  });
});
 

const slider = document.querySelector(".hero-slider");
const slides = document.querySelectorAll(".hero-slide");

let index = 0;
const SLIDE_INTERVAL = 7000;

slides[index].classList.add("active");

function slideHero(){

  slides[index].classList.remove("active");

  index = (index + 1) % slides.length;

  slider.style.transform = `translateX(-${index * 100}vw)`;

  slides[index].classList.add("active");
}

setInterval(slideHero, SLIDE_INTERVAL);



/*close top bar */ 
const closeTopBar = document.getElementById("closeTopBar");
const topBar = document.getElementById("topBar");

closeTopBar.addEventListener("click", () => {
  topBar.style.display = "none";
});



const profileMenu = document.querySelector(".profile-menu");
const profileDropdown = document.querySelector(".profile-dropdown");

profileMenu.addEventListener("click", (e) => {
  e.stopPropagation(); // prevent closing immediately
  profileDropdown.classList.toggle("active");
});

// Close dropdown if clicked outside
document.addEventListener("click", () => {
  profileDropdown.classList.remove("active");
});


const user = JSON.parse(localStorage.getItem("user"));

const guestLinks = document.querySelector(".guest-links");
const memberLinks = document.querySelector(".member-links");

if (user) {
  guestLinks.style.display = "none";
  memberLinks.style.display = "block";
} else {
  guestLinks.style.display = "block";
  memberLinks.style.display = "none";
}

document.getElementById("logoutBtn")?.addEventListener("click", () => {
  localStorage.removeItem("user");
  location.reload();
});


/*register for google form*/

/*callback*/
function handleGoogleLogin(response) {
    // Decode the JWT
    const user = parseJwt(response.credential);
    console.log("Google User:", user);

    // Save user to localStorage
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("userLoggedIn", "true");

    // Redirect or update UI
    alert("Welcome, " + user.name);
    window.location.href = "account.html"; // or refresh current page
}

// Your JWT parser
function parseJwt(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g,'+').replace(/_/g,'/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c){
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
}