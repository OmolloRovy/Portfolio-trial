// Form submission
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Validate form inputs
  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    alert('Please fill in all fields');
    return;
  }

  // Send form data to the server (you can replace this with your own code for form submission)
  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
  };

  // Display success message
  alert('Form submitted successfully!');
  // Reset form inputs
  contactForm.reset();
});


