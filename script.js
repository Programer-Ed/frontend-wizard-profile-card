const timeElement = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  timeElement.textContent = `Current time: ${Date.now()} ms`;
}

updateTime();
// Optional: update every second if you want
setInterval(updateTime, 1000);
