document.addEventListener("DOMContentLoaded", () => {
    // Set the target countdown date
    const countdownDate = new Date("Jan 1, 2025 00:00:00").getTime();

    // Function to update the countdown every second
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const remainingTime = countdownDate - now;

        // If the countdown has ended
        if (remainingTime < 0) {
            clearInterval(countdown);
            document.querySelector(".container").innerHTML = `<h1>HAPPY NEW YEAR!</h1>`;
            return;
        }

        // Time calculations
        const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

        // Update the HTML elements
        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
        document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
        document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
    }, 1000);
});
