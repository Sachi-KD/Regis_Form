
let steps = $('.step-bar ul li');

// First step
$('.firstNext').on('click', (e) => {

  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var password2 = document.getElementById("password2");

  if (password.value !== password2.value ) {
    Swal.fire({
      title: "Password is not same",
      text: "",
      icon: "error"
    });
    return;
  }


  //password strength validator
  if (validatePassword(password))
  {
    Swal.fire({
      title: "Weak password usage",
      text: "",
      icon: "warning"
    });
    return;
  }

 //EMAIL VALIDATION
  if (email.value != '' && validateEmail(email.value))
  {


  }
  else
  {
    Swal.fire({
      title: "Email is invalid",
      text: "",
      icon: "error"
    });
    return;
};


   //password validation
   if (password.value != '' && validatePassword2(password)) {

  } else {
    Swal.fire({
      title: "Invalid Password",
      text: "Please enter a strong password meeting the following criteria:",
      icon: "error",
      footer: "- At least 6 characters long<br>- Contains at least one uppercase, lowercase, number, and special character"
    });
    return;
  };

  setTimeout(() => {
    $(steps[1]).find('.number').addClass('active');
  }, 1000);

  $(steps[1]).find('.line').addClass('line-active');
  $('.account-setup').css('left', '-4000px');
  $('.user-details').css('left', 'calc(50% - 175px)');


});


// Second step
$('.secondNext').on('click', (e) => {

  var fullname = document.getElementById("fullname");
  var number = document.getElementById("number");
  var city = document.getElementById("city");
  var country = document.getElementById("country");

  if (fullname.value=='' || number.value=='' || city.value=='' ||country.value=='' ) {
    Swal.fire({
      title: "Any field can't empty",
      text: "",
      icon: "error"
    });
    return;
  }

  //FULLNAME VALIDATION
  const nameValue = fullname.value;
 // Check if the name value is a string containing only numbers:
 if (!isNaN(nameValue)) { // Use isNaN for type checking
  Swal.fire({
    title: "Invalid Name",
    text: "Please enter your name using only letters, spaces, and hyphens.",
    icon: "error"
  });
  return;
  fullname.focus(); // Focus on the invalid input
}

//MOBILE NUMBER VALIDATION

const phoneNumber = number.value; // Access the phone number input

// Use a regular expression to match common phone number formats:
const phoneRegex = /^\d{10}$/; // Example: 10 digits for US phone numbers

if (!phoneRegex.test(phoneNumber)) {
  Swal.fire({
    title: "Invalid Phone Number",
    text: "Please enter a valid  phone number.",
    icon: "error"
  });
 return;
 number.focus();
}

//CITY AND COUNTRY VALIDATION
//city
const cityValue = city.value;
const countryValue = country.value;
// Check if the name value is a string containing only numbers:
if (!isNaN(cityValue) || !isNaN(countryValue)) { // Use isNaN for type checking
 Swal.fire({
   title: "Invalid Region",
   text: "Please enter valid city or country.",
   icon: "error"
 });
 return;
 city.focus(); // Focus on the invalid input
}

// //country
// const country = country.value;
// // Check if the name value is a string containing only numbers:
// if (!isNaN(countryValue)) { // Use isNaN for type checking
//  Swal.fire({
//    title: "Invalid Country",
//    text: "Please enter valid country",
//    icon: "error"
//  });
//  return;
//  country.focus(); // Focus on the invalid input
// }


 else

  setTimeout(() => {
    $(steps[2]).find('.number').addClass('active');
  }, 1000);

  $(steps[2]).find('.line').addClass('line-active');
  $('.user-details').css('left', '-4000px');
  $('.finish-step').css('left', 'calc(50% - 175px)');
});

$('.firstPrev').on('click', (e) => {
  $(steps[1]).find('.number').removeClass('active');
  $(steps[1]).find('.line').removeClass('line-active');
  $('.user-details').css('left', '4000px');
  $('.account-setup').css('left', 'calc(50% - 175px)');
});






// Last step
$('.secondPrev').on('click', (e) => {
  $(steps[2]).find('.number').removeClass('active');
  $(steps[2]).find('.line').removeClass('line-active');
  $('.finish-step').css('left', '4000px');
  $('.user-details').css('left', 'calc(50% - 175px)')
});


//function for email validation
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
//function for password validation
function validatePassword(password) {
  const passwordRegex =  / ^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/ ; // Example regex for strong passwords
  return passwordRegex.test(password);
}


function validatePassword2(password) {

  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(password.value.match(lowerCaseLetters)) { 

  } else {
    Swal.fire({
      title: "Invalid Password",
      text: "You need Lower case letters in password",
      icon: "warning"
    });

    return;
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(password.value.match(upperCaseLetters)) { 

  } else {
    Swal.fire({
      title: "Invalid Password",
      text: "Capital letters needed",
      icon: "warning"
    });

    return;
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(password.value.match(numbers)) { 

  } else {
    Swal.fire({
      title: "Invalid Password",
      text: "You need NUMBERS in password",
      icon: "warning"
    });

    return;
  }

  // Validate length
  if(password.value.length >= 8) {

  } else {
    Swal.fire({
      title: "Invalid Password",
      text: "You need at lease 8 charachter password",
      icon: "warning"
    });

    return;
  }


  return true;


}
//REGISTRATION SUCCESS


