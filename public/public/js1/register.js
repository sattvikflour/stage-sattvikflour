

function checkNumberAvailability() {
var number = document.getElementById("number").value;

var xhr = new XMLHttpRequest();
xhr.open("GET", "checkphonenumber?number=" + number, true);

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    //var response = xhr.responseText;
    var jsonResponse = JSON.parse(xhr.responseText); // Parse JSON response
    var response = jsonResponse.status; // Extract the status field

    
    if (response === "available") {
        document.getElementById("error").textContent = "";
        document.getElementById("errorsection").style.display= "none";
        document.getElementById("availabilitysection").style.display = "block";
        document.getElementById("availablemsg").textContent = "Mobile number is available.";
      
    } else {
      document.getElementById("availablemsg").textContent = "";
      document.getElementById("availabilitysection").style.display = "none";
      document.getElementById("errorsection").style.display= "block";
      document.getElementById("error").textContent = "Mobile number is not available. Please choose a different number.";
    }
  }
};

xhr.send();
}



        function checkPassword() {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const passwordError = document.getElementById('passwordError');
            const confirmPasswordError = document.getElementById('confirmPasswordError');

            if (password.length < 8) {
                passwordError.textContent = 'Password must be at least 8 characters.';
            } else {
                passwordError.textContent = '';
            }

            // if (confirmPassword.length < 8) {
            //     confirmPasswordError.textContent = 'Password must be at least 8 characters.';
            // } else 
            if (password !== confirmPassword) {
                confirmPasswordError.textContent = 'Passwords do not match.';
            } else {
                confirmPasswordError.textContent = '';
            }
        }

        function validateForm() {
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            var errorMessage = document.getElementById("error").textContent;

            if (password.length < 8 || confirmPassword.length < 8 || password !== confirmPassword || errorMessage !== "" ) {
                return false; // Prevent form submission
            }

            return true; // Allow form submission
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