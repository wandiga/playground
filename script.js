const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  // Convert FormData to URL-encoded string
  const encoded = new URLSearchParams(formData).toString();

  try {
    const response = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encoded,
    });

    if (response.ok) {
      status.innerHTML = `<p class="text-green-600">Thanks! Your message has been sent.</p>`;
      form.reset();
    } else {
      status.innerHTML = `<p class="text-red-600">Oops! Something went wrong. Please try again.</p>`;
    }
  } catch (error) {
    status.innerHTML = `<p class="text-red-600">Error: ${error.message}</p>`;
  }
});
