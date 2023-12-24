<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <div id="registerForm" class="reg">
        <div class=regcontainer>
          <h3>Fill Up Below Form to Register</h3>
          <div>
            <form id="myForm" method="POST" action="{{ route('registration-submit') }}" onsubmit="return validateForm()">
                @csrf
              <label for="firstname">Enter your Full Name</label><br>
              <input name="firstname" id="firstname" type="text" required><br><br>
    
              <label for="lastname">Enter your Last Name</label><br>
              <input name="lastname" id="lastname" type="text" required><br><br>
    
              <label for="address">Enter your Address</label><br>
              <input name="address" id="address" type="text" required><br><br>
    
              <label for="city">Enter your City</label><br>
              <input name="city" id="city" type="text" value="Pune" readonly><br><br>
    
              <label for="number">Enter your Phone Number</label><br>
              <input type="tel" name="number" id="number" pattern="[0-9]{10}" maxlength="10"
                onchange="checkNumberAvailability()" required><br><br>
    
              <div id="availabilitysection" style="display:none">
                <span id="availablemsg" style="color:green"></span><br><br>
              </div>
              <div id="errorsection" style="display:none">
                <span id="error" style="color:red"></span><br><br>
              </div>
            <div>
              <label for="password">Enter your Password</label><br>
              <div class="password-input-container">
              <input type="password" name="password" id="password" type="text" required  minlength="8" onchange = "checkPassword()">
             <div id="togglePassword" class="eye-icon" onclick= "togglePasswordVisibility('password', 'togglePassword')">
                <img src="public/logos/eyeclosed.svg" alt="Toggle Password Visibility">
                </div>
              </div>
              <span id="passwordError" style="color: red;"></span>
              <br><br>
              </div>
    
            <div>
                <label for="confirmPassword">Confirm Password:</label>
                <div class="password-input-container">
                <input type="password" id="confirmPassword" name="confirmPassword" required minlength="8" onchange = "checkPassword()">
             <div id="toggleConfPassword" class="eye-icon" onclick="togglePasswordVisibility('confirmPassword', 'toggleConfPassword')">
                <img src="public/logos/eyeclosed.svg" alt="Toggle Password Visibility">
                </div>
              </div>
                <span id="confirmPasswordError" style="color: red;"></span>
              <br><br>
            </div>
    
              <button type="submit">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    
      <script src="/js1/register.js')}}"></script>
</body>
</html>