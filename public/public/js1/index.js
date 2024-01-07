
  
  //Slideshow starts here
  
  const slides = document.querySelectorAll(".slide");
const radioInputs = document.querySelectorAll('input[name="slide-radio"]');
let currentSlide = 0;

function goToSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });
    currentSlide = index;
    radioInputs[currentSlide].checked = true;
}

function autoSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);
}

setInterval(autoSlide, 5000);

radioInputs.forEach((input, index) => {
    input.addEventListener("change", () => {
        goToSlide(index);
    });
});


// Update the autoSlide function to toggle the active class
function autoSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    goToSlide(currentSlide);

    // Remove active class from all labels
    radioLabels.forEach(label => {
        label.classList.remove('active');
    });

    // Add active class to the current slide's label
    radioLabels[currentSlide].classList.add('active');
}

// Get all radio labels
const radioLabels = document.querySelectorAll('.radio-labels label');



//Slideshow ends here







document.addEventListener("DOMContentLoaded", function () {
  const loginRegButton = document.querySelector("#loginRegBtns");
  const userInfo = document.querySelector("#user-info");

  function updateUI() {
    //const isLoggedIn = checkLoginStatus(); // Replace this with your actual login check function

    if (false) {
      loginRegButton.style.display = "none";
      userInfo.style.display = "flex";
    } else {
      loginRegButton.style.display = "flex";
      userInfo.style.display = "none";
    }
  }

  // Call the updateUI function on page load to set the initial state
  updateUI();
});


const cartIcon = document.querySelector('.cart-icon');
const cartOverlay = document.querySelector('.cart-overlay');
const closeIcon = document.querySelector('.close-icon');


  // Event listener for opening the cart overlay
  cartIcon.addEventListener('click', openCartOverlay);
  
  // Function to open the cart overlay
  function openCartOverlay() {
    cartOverlay.classList.add('show');
  }
  
  // Event listener for closing the cart overlay
  closeIcon.addEventListener('click', closeCartOverlay);
  
  // Function to close the cart overlay
  function closeCartOverlay() {
    cartOverlay.classList.remove('show');
  }


//Login Overlay

const loginbtn = document.querySelector('.loginBtn');
const loginOverlay = document.querySelector('.login-overlay');
const closeIcon2 = document.querySelector('.close-icon2');


// Event listener for opening the Login overlay
loginbtn.addEventListener('click', openLoginOverlay);


// Function to open the Login overlay
function openLoginOverlay() {
  loginOverlay.classList.add('show');
}

// Event listener for closing the Login overlay
closeIcon2.addEventListener('click', closeLoginOverlay);

// Function to close the Login overlay
function closeLoginOverlay() {
  loginOverlay.classList.remove('show');
}


        //toggle password


                function togglePasswordVisibility(inputId, toggleIconId) {
            const passwordInput = document.getElementById(inputId);
            const toggleIcon = document.getElementById(toggleIconId);
            
            if (passwordInput.type === 'password') {
                passwordInput.type = 'text';
                toggleIcon.innerHTML = '<img src="public/logos/eyeopen.svg" alt="Toggle Password Visibility">';
            } else {
                passwordInput.type = 'password';
                toggleIcon.innerHTML = '<img src="public/logos/eyeclosed.svg" alt="Toggle Password Visibility">';
            }
        }

