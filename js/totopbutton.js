document.addEventListener("DOMContentLoaded", () => {
    
    const totopbutton = document.getElementById("totopbutton");
    
    window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        totopbutton.classList.add("show");
    }else{
        totopbutton.classList.remove("show");
    }
});

totopbutton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    });
});