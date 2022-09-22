function changenav() {
    var header = document.getElementById('header')
    var scrollvalue = window.scrollY
    if(scrollvalue > 40) {
        header.classList.add('header-scrolled')
    } 
    else {
        header.classList.remove('header-scrolled')
    }
}

window.addEventListener('scroll',changenav)