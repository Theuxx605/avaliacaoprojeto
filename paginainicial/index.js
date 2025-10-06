
function formatNumber(num) {
    return num.toString().padStart(2, '0');
}

function updateCountdown() {
    const now = new Date();
    const midnight = new Date();
    midnight.setHours(24, 0, 0, 0); 

    const diff = midnight - now;

    if (diff <= 0) {
        document.getElementById('countdown').textContent = "00:00:00";
        return;
    }

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const formattedTime = `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}`;
    document.getElementById('countdown').textContent = formattedTime;
}

setInterval(updateCountdown, 1000);
updateCountdown();