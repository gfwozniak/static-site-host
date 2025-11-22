const buttons = document.querySelectorAll(".view-btn");
const contents = document.querySelectorAll(".view-content");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        // Remove active class from all buttons
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // Hide all content
        contents.forEach(c => c.classList.add("hidden"));
        const target = document.getElementById(btn.dataset.target);
        target.classList.remove("hidden");
    });
});