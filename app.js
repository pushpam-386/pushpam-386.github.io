const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

let resume = document.getElementById("resume");
resume.onclick= function(){
    window.open(
          "https://drive.google.com/file/d/1L92bc8r1tuYHO7YdHXQGi-uHnPE4z3Xv/view?usp=sharing", "_blank");
}
let linkedin = document.getElementById("linkedin");
linkedin.onclick= function(){
    window.open(
          "https://www.linkedin.com/in/pushpamtfs/", "_blank");
}
let github = document.getElementById("github");
github.onclick= function(){
    window.open(
          "https://github.com/pushpam-386", "_blank");
}
let SkinCarelive = document.getElementById("SkinCarelive");
SkinCarelive.onclick= function(){
    window.open(
          "https://exquisite-hotteok-e396d1.netlify.app/", "_blank");
}
let SkinCarecode = document.getElementById("SkinCarecode");
SkinCarecode.onclick= function(){
    window.open(
          "https://github.com/pratiksontakke/construct_week01", "_blank");
}
let TripManagementcode = document.getElementById("TripManagementcode");
TripManagementcode.onclick= function(){
    window.open(
          "https://github.com/mrFarooque/rightful-order-9279", "_blank");
}


let linkedin1 = document.getElementById("linkedin1");
linkedin1.onclick= function(){
    window.open(
          "https://www.linkedin.com/in/pushpamtfs/", "_blank");
}

