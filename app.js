// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const links = document.querySelector(".links");
const navTgl = document.querySelector(".nav-toggle");



navTgl.addEventListener('click', function(){
    links.classList.toggle("show-links");
});