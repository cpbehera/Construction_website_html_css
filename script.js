let search = document.getElementById('search');
let searchForm = document.getElementById('searchform');
let menuBar = document.getElementById('menu-bar');
let navbar = document.getElementsByTagName('nav');

search.onclick = ()=>{
    searchForm.classList.toggle('active');
    navbar[0].classList.remove('active');
}

menuBar.onclick = ()=>{
    menuBar.classList.toggle('fa-times');
    navbar[0].classList.toggle('active');
    searchForm.classList.remove('active');
}
