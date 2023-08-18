window.onload = function() {

  const signInForm = document.getElementById('signInForm');
  const resetForm = document.getElementById('resetForm');
  const signUpForm = document.getElementById('signUpForm');
  const forgottenPasswordLink = document.querySelector('.forget a');
  const createAccountLink = document.querySelector('.register a');
  const signUpBtn = signUpForm.querySelector('#loginBtn');
  const resetBtn = resetForm.querySelector('#loginBtn');
  
  signUpBtn.addEventListener('click', function(event) {
      var username = signUpForm.querySelector('input[name="username"]');
      var password = signUpForm.querySelector('input[name="password"]');
      var email = signUpForm.querySelector('input[name="email"]');
  
      if (username.value === '' || password.value === '' || email.value === '') {
          event.preventDefault();
          alert('Vui lòng nhập đầy đủ thông tin.');
      }
  });
  
  resetBtn.addEventListener('click', function(event) {
      var email = resetForm.querySelector('input[name="email"]');
  
      if (email.value === '') {
          event.preventDefault();
          alert('Vui lòng nhập địa chỉ email.');
      }
  });
  
  forgottenPasswordLink.addEventListener('click', function(event) {
    event.preventDefault(); 
  
    
    signInForm.style.display = 'none';
    resetForm.style.display = 'flex';
  });
  
  
  createAccountLink.addEventListener('click', function(event) {
    event.preventDefault();
  
    
    signInForm.style.display = 'none';
    signUpForm.style.display = 'flex';
  });
  const showPasswordCheckbox = document.querySelector('input[type="checkbox"]');
  const passwordInput = document.querySelector('input[name="password"]');
  
  
  showPasswordCheckbox.addEventListener('change', function() {
  if (this.checked) {
   
    passwordInput.type = 'text';
  } else {
    
    passwordInput.type = 'password';
  }
  });
  const closeBox = document.querySelector('.fa-solid.fa-x');
  closeBox.addEventListener('click', function(event) {
  event.preventDefault(); 
  
  
  signInForm.style.display = 'flex';
  resetForm.style.display = 'none';
  });
  const closeX = document.querySelector('#X');
  closeX.addEventListener('click', function(event) {
  event.preventDefault();
  
  
  signInForm.style.display = 'flex';
  signUpForm.style.display = 'none';
  });
  var sendCodeButton = document.querySelector('#resetForm button');
  sendCodeButton.addEventListener('click', function() {
  resetForm.style.transition = '1s'; 
  resetForm.style.display = 'none';
  
  setTimeout(function() { 
    signInForm.style.transition = '1s'; 
    signInForm.style.display = 'block';
  }, 100); 
  });
  
  var signUpButton = document.querySelector('#signUpForm button');
  signUpButton.addEventListener('click', function() {
  signUpForm.style.transition = '1s'; 
  signUpForm.style.display = 'none';
  
  setTimeout(function() { 
    signInForm.style.transition = '1s'; 
    signInForm.style.display = 'block';
  }, 100); 
  });
  
  
  const formFields = document.querySelectorAll('#signInForm input[type="text"], #signInForm input[type="email"], #signInForm input[type="password"]');
  
  document.getElementById('signInForm').addEventListener('click', function() {
  if (this.style.display === 'none') {
    formFields.forEach(function(field) {
      field.value = '';
    });
  }
  });
  
  const resetFormFields = document.querySelectorAll('#resetForm input[type="email"]');
  
  
  const signUpFormFields = document.querySelectorAll('#signUpForm input[type="text"], #signUpForm input[type="email"], #signUpForm input[type="password"]');
  
  
  function clearFields(fields) {
  fields.forEach(function(field) {
    field.value = '';
  });
  }
  document.getElementById('resetForm').addEventListener('click', function() {
  if (this.style.display === 'none') {
    clearFields(resetFormFields);
  }
  });
  document.getElementById('signUpForm').addEventListener('click', function() {
  if (this.style.display === 'none') {
    clearFields(signUpFormFields);
  }
  });
  var form = document.querySelector('.form');
  
  form.addEventListener('submit', function(event) {
  if (!validateForm()) {
    event.preventDefault();
  }
  });
  
  var form = document.querySelector('.form');
  var loginBtn = document.querySelector('.btn');
  
  
  loginBtn.addEventListener('click', function(event) {
    
    var username = form.querySelector('input[name="username"]');
    var password = form.querySelector('input[name="password"]');
  
    if (username.value === '' || password.value === '') {
      
      event.preventDefault();
      alert('Vui lòng nhập đầy đủ username và password.');
    }
  });
}
  
 
  
  











