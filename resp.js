burger = document.querySelector('.burger');
navbar = document.querySelector('.navbar');
rightnav = document.querySelector('.rightNav');
navList = document.querySelector('.nav-list');


burger.addEventListener('click' , ()=>{
    rightnav.classList.toggle('.v-class-res');
    navList.classList.toggle('.v-class-res');
    navbar.classList.toggle('h-nav-res'); 
})