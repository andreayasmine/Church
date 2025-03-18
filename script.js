document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll(".nav-links a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Dynamic Daily Verse (Random Bible Verses)
    const verses = [
        "Trust in the Lord with all your heart... - Proverbs 3:5",
        "I can do all things through Christ who strengthens me. - Philippians 4:13",
        "The Lord is my shepherd; I shall not want. - Psalm 23:1",
        "Be strong and courageous. Do not be afraid. - Joshua 1:9"
    ];
    document.getElementById("daily-verse").textContent = verses[Math.floor(Math.random() * verses.length)];

    // Prayer Request Submission
    const prayerForm = document.getElementById("prayer-form");
    const prayerInput = document.getElementById("prayer-input");
    const prayerPopup = document.getElementById("prayer-popup");
    const prayerContainer = document.getElementById("prayer-requests");

    prayerForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Stop the page from refreshing
        const prayerText = prayerInput.value.trim();
        if (prayerText) {
            prayerInput.value = "";

            // Show popup confirmation inside the prayer request container
            prayerPopup.classList.remove("hidden");
            prayerPopup.style.display = "block";
            prayerPopup.style.opacity = "1";
            prayerPopup.style.position = "absolute";
            prayerPopup.style.bottom = "10px";
            prayerPopup.style.left = "50%";
            prayerPopup.style.transform = "translateX(-50%)";
            prayerPopup.style.padding = "10px 20px";
            prayerPopup.style.fontSize = "1.2rem";
            prayerContainer.appendChild(prayerPopup);

            // Hide the popup after 5 seconds
            setTimeout(() => {
                prayerPopup.style.opacity = "0";
                setTimeout(() => {
                    prayerPopup.style.display = "none";
                }, 500); // Wait for opacity transition before hiding
            }, 5000);
        }
    });
});
