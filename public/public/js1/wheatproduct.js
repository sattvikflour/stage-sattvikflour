// Get necessary elements
const cartIcon = document.querySelector('.cart-icon');
const cartOverlay = document.querySelector('.cart-overlay');
const closeIcon = document.querySelector('.close-icon');
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.querySelector('.cart-items');
const totalPrice = document.querySelector('.total-price');
let itemCount = 0;
let totalAmount = 0;const profilePicture = document.getElementById('profile-picture');





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


  // Add event listener to each "Add to Cart" button
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
  });
  
  // Function to add item to cart
  function addToCart(event) {
    const productCard = event.target.closest('.product-card');
    const productName = productCard.querySelector('h3').innerText;
    const productPrice = parseFloat(productCard.querySelector('.price').innerText.replace('Rs. ', ''));
    
    // Check if the product is already in the cart
    const existingCartItem = cartItems.querySelector(`li[data-product="${productName}"]`);
    
    if (existingCartItem) {
      const quantity = existingCartItem.querySelector('.quantity');
      const currentQuantity = parseInt(quantity.innerText);
      quantity.innerText = currentQuantity + 1;
    } else {
      const cartItem = document.createElement('li');
      cartItem.setAttribute('data-product', productName);
      cartItem.innerHTML = `
        <span>${productName}</span>
        <span>Rs. ${productPrice}</span>
        <div class="quantity-controls">
          <button class="decrease-quantity">-</button>
          <span class="quantity">1</span>
          <button class="increase-quantity">+</button>
        </div>
        <button class="remove-item">Remove</button>
      `;
      cartItems.appendChild(cartItem);
      itemCount++;
    }
    
    
    updateItemCount();
    totalAmount += productPrice;
    updateTotalPrice();
  }
  
  // Function to update the item count
  function updateItemCount() {
    document.querySelector('.item-count').innerText = itemCount;
  }
  
  // Function to update the total price
  function updateTotalPrice() {
    totalPrice.querySelector('.price').innerText = totalAmount;
  }
  
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


// Event delegation for removing items from cart
cartItems.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-item')) {
      const cartItem = event.target.closest('li');
      const productName = cartItem.getAttribute('data-product');
      const productPrice = parseFloat(cartItem.querySelector('span:nth-child(2)').innerText.replace('Rs. ', ''));
      console.log(productPrice);
      const quantity = parseInt(cartItem.querySelector('.quantity').innerText);
      console.log(itemCount);
      itemCount = itemCount-1;
      console.log(itemCount);
      updateItemCount();
      totalAmount -= productPrice * quantity;
      updateTotalPrice();
      
      cartItem.remove();
    }
  });
  
  // Event delegation for changing item quantity
  cartItems.addEventListener('click', function(event) {
    if (event.target.classList.contains('decrease-quantity') || event.target.classList.contains('increase-quantity')) {
      const cartItem = event.target.closest('li');
      const productPrice = parseFloat(cartItem.querySelector('span:nth-child(2)').innerText.replace('Rs. ', ''));
      console.log(productPrice);
      const quantity = parseInt(cartItem.querySelector('.quantity').innerText);
      
      if (event.target.classList.contains('decrease-quantity')) {
        if (quantity > 1) {
          cartItem.querySelector('.quantity').innerText = quantity - 1;
          totalAmount -= productPrice;
        }
      } else {
        cartItem.querySelector('.quantity').innerText = quantity + 1;
        totalAmount += productPrice;
      }
      
      updateTotalPrice();
    }
  });


  //Toggle Password visibility
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('loginpassword');

togglePassword.addEventListener('click', function () {
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  togglePassword.innerHTML = type === 'password' ? '<img src="img/eyeclosed.svg" alt="Toggle Password Visibility">' : '<img src="img/eyeopen.svg" alt="Toggle Password Visibility">';
});