  AOS.init({
    duration: 1000,
    once: true, 
  });    
  const navToggle = document.getElementById("nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  navToggle.addEventListener("click", () => {

    navMenu.classList.toggle("show-menu");

    navToggle.classList.toggle("show-icon");
  });
  const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  if(window.scrollY > 300){
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});


let github=document.querySelector('.github');
let linkedin=document.querySelector('.linkedin');
github.addEventListener('click',()=>{
  window.open('https://github.com/abdullahaqeeldev`','_blank');
});

linkedin.addEventListener('click',()=>{
  window.open('https://www.linkedin.com/in/abdullahaqeelahmed/','_blank');
});



let btn=document.querySelector('.btn-outline').addEventListener('click',()=>{
  window.open('https://github.com/abdullahaqeeldev','_blank');
});

let mywork=document.querySelector('.animated-button').addEventListener('click',()=>{
  window.open('https://abdullahaqeeldev.github.io/myportfolio/','_blank');
}); 