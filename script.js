const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', async function (e) {
  e.preventDefault(); // Prevent default form submission

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    if (response.ok) {
      status.innerHTML = `<p class="text-green-600 mt-4">Thanks! Your message has been sent.</p>`;
      form.reset();
    } else {
      status.innerHTML = `<p class="text-red-600 mt-4">Oops! Something went wrong. Please try again.</p>`;
    }
  } catch (error) {
    status.innerHTML = `<p class="text-red-600 mt-4">Error: ${error.message}</p>`;
  }
});
