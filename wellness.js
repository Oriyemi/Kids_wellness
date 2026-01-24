const nav_parent = document.getElementById('nav-parent');


const updateNavbar = () => {
        if (window.scrollY < 1) {
    
                nav_parent.classList.add('shadow-lg', 'bg-[#f1e9dc]');
                nav_parent.classList.remove('bg-[#ccd0ef]');
        } else {
       
                nav_parent.classList.remove('shadow-lg', 'bg-[#f1e9dc]');
                nav_parent.classList.add('bg-[#ccd0ef]');
        }
};


window.addEventListener('scroll', updateNavbar);


updateNavbar();