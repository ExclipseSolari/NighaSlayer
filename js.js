let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if(document.documentElement.scrollTop > 20){
    nav.classList.add("sticky");
    scrollBtn.style.display = "block";
  }else{
    nav.classList.remove("sticky");
    scrollBtn.style.display = "none";
  }

}

let body = document.querySelector("body");
let navBar = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = function(){
  navBar.classList.add("active");
  menuBtn.style.opacity = "0";
  menuBtn.style.pointerEvents = "none";
  body.style.overflow = "hidden";
  scrollBtn.style.pointerEvents = "none";
}
cancelBtn.onclick = function(){
  navBar.classList.remove("active");
  menuBtn.style.opacity = "1";
  menuBtn.style.pointerEvents = "auto";
  body.style.overflow = "auto";
  scrollBtn.style.pointerEvents = "auto";
}

let navLinks = document.querySelectorAll(".menu li a");
for (var i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener("click" , function() {
    navBar.classList.remove("active");
    menuBtn.style.opacity = "1";
    menuBtn.style.pointerEvents = "auto";
  });
}
function redirectToCollege(collegeName) {
  let redirectTo = '';

  switch (collegeName) {
    case 'Bachelor of Science in Information System':
      redirectTo = 'https://www.facebook.com/ACLCCOLLEGEOFTAYTAYSHS/';
      break;
    case 'Smart Acheiver Academy in Subic Incorporated':
      redirectTo = 'https://www.facebook.com/SAASIans/';
      break;
    case 'Sergia Soryano Esteban Integrated 2, Olongapo City':
      redirectTo = 'https://www.facebook.com/DepedTayoSergiaSorianoEstebanISIICoral/';
      break;
    case 'San Miguel, Bani Pangasinan':
      redirectTo = 'https://www.facebook.com/people/San-Miguel-National-High-School-Bani-Pangasinan/100064379091449/';
      break;
    default:
      redirectTo = 'https://example.com';
      break;
  }


  window.open(redirectTo, '_blank');
}
function redirectToFacebook() {
  document.querySelector('.contact-btn').setAttribute('disabled', true);
  document.querySelector('.contact-btn').classList.add('loading');
  setTimeout(function() {
    window.location.href = 'https://www.facebook.com/profile.php?id=61560670725863';
  }, 1500);
}
function downloadCV() {
  window.location.href = 'https://drive.google.com/file/d/1Lwhhwj_PQbvxT7OPNjNWv5qWIoHkwHaC/view?usp=sharing'; 
}
