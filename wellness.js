const nav_parent = document.querySelector("#nav-parent");

const updateNavbar = () => {
        if (window.scrollY > 1) {
                nav_parent.classList.remove("bg-[#fee358]");
                nav_parent.classList.add("bg-[#f1e9dc]");
        } else {
                nav_parent.classList.remove("bg-[#f1e9dc]");
                nav_parent.classList.add("bg-[#fee358]");
        }
};

window.addEventListener("scroll", updateNavbar);
updateNavbar();