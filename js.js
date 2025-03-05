document.addEventListener("DOMContentLoaded", function () { 
    const links = document.querySelectorAll(".navList a");
    const currentUrl = window.location.pathname.split("/").pop(); 
    
    links.forEach(link => {
        if (link.getAttribute("href") === currentUrl) {
            link.classList.add("active");
        }
    });
});
