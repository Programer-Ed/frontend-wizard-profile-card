document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');

  function updateTime() {
    if (timeElement) {
      timeElement.textContent = `Current time: ${Date.now()} ms`;
    }
  }

  updateTime();
  setInterval(updateTime, 1000);

  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const subject = document.getElementById("subject");
      const message = document.getElementById("message");
      const successMsg = document.getElementById("success");

      let isValid = true;
      document.querySelectorAll("[data-testid^='test-contact-error']").forEach(el => el.remove());

      if (!name.value.trim()) {
        showError(name, "Name is required", "test-contact-error-name");
        isValid = false;
      }

      if (!email.value.includes("@") || !email.value.includes(".")) {
        showError(email, "Enter a valid email address", "test-contact-error-email");
        isValid = false;
      }

      if (!subject.value.trim()) {
        showError(subject, "Subject is required", "test-contact-error-subject");
        isValid = false;
      }

      if (message.value.length < 10) {
        showError(message, "Message must be at least 10 characters", "test-contact-error-message");
        isValid = false;
      }

      if (isValid) {
        successMsg.hidden = false;
      }
    });
  }

  function showError(input, msg, id) {
    const error = document.createElement("p");
    error.textContent = msg;
    error.id = id;
    error.dataset.testid = id;
    error.setAttribute("aria-describedby", input.id);
    error.style.color = "red";
    input.insertAdjacentElement("afterend", error);
  }
});
