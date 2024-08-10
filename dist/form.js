document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    form.addEventListener('submit', async function (e) {
      e.preventDefault();
  
      // Simple form validation
      if (form.checkValidity() === false) {
        e.stopPropagation();
        form.classList.add('was-validated');
        return;
      }
  
      // Collect form data
      const formData = new FormData(form);
  
      // Send form data to Formspree
      try {
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });
  
        if (response.ok) {
          alert('Message sent successfully!');
          form.reset();
          form.classList.remove('was-validated');
        } else {
          alert('There was an error sending your message. Please try again later.');
        }
      } catch (error) {
        alert('There was an error sending your message. Please try again later.');
      }
    });
  });
  