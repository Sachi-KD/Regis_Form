<?php require_once '../include/config.php'; ?>
<?php require_once '../operations/index_op.php'; ?>


<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Registration</title>
  <link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html --> 
<div class="step-bar">
  <ul>
    <li>
      <div class="number active">1</div>
      <div class="text">account setup</div>
    </li>
    <li> 
      <div class="number">2</div>
      <div class="text">profiles</div>
      <div class="line"></div>
    </li>
    <li> 
      <div class="number">3</div>
      <div class="text">Register</div>
      <div class="line"></div>
    </li>
  </ul>
</div>
<h1>Create new account</h1>
<form method="post" action="">
  <div class="account-setup register-form">
    <h2>Step 1</h2>
    <input id="email" name="email" type="email" placeholder="Email" required/>
    <input id="password" name="password" type="password" placeholder="Password" required/>
    <input  id="password2"  name="confirmPassword" type="password" placeholder="Confirm Password" required/>
    <div class="button firstNext">Next</div>
  </div>
  <div class="user-details register-form">
    <h2>Step 2</h2>
    <input id="fullname"  name="name" type="text" placeholder="Full name"  required/>
    <input id="number"  name="nb" type="text" placeholder="Mobile-Number" required/>
    <input id="city"   name="city" type="text" placeholder="City"  required/>
    <input  id="country" name="country" type="text" placeholder="Country" required/>
    <div class="button firstPrev">Back</div>
    <div class="button secondNext">Next</div>
  </div>
  <div class="finish-step register-form">
    <h2>Step 3</h2>
    <label for="birth-day">Birth date</label>
    <input class="error" name="birth-day" type="date"/>
    
    <label class="accept-conditions" for="accept">Accept <a href="#"> terms & conditions</a>
      <input name="accept" type="checkbox"/>
    </label>
    <div class="button secondPrev">Back</div>
    <button class="button" type="submit" name="register_btn">Register</button>
  </div>
</form>
<!-- partial -->
  <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script><script  src="./script.js"></script>


<script src="sweetalert.js"></script>

</body>
</html>
