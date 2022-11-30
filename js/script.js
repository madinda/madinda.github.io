// bagian scroll
window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// scroll reveal
const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
});

sr.reveal(".home", { delay: 100 });
sr.reveal(".about", { delay: 100 });
sr.reveal(".products", { delay: 100 });
sr.reveal(".review", { delay: 100 });
sr.reveal(".contacts", { delay: 100 });

