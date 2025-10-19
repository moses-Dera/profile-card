const timeElement = document.querySelector('[data-testid="test-user-time"]');

function updateTime() {
  const now = new Date();
  const readable = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const milliseconds = Date.now();
  timeElement.textContent = `${readable} (${milliseconds})`;
}

updateTime();
setInterval(updateTime, 1000);
