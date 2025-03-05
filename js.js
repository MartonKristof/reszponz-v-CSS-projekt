document.addEventListener("DOMContentLoaded", function () { 
    const links = document.querySelectorAll(".navList a");
    const currentUrl = window.location.pathname.split("/").pop(); 

    links.forEach(link => {
        if (link.getAttribute("href") === currentUrl) {
            link.classList.add("active");
        }
    });
});

function downloadFile() {
    const link = document.createElement('a');
    link.href = 'home.png';  // A fájl elérési útvonala
    link.download = 'home.png';  // A fájl neve, amit letöltenek
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
