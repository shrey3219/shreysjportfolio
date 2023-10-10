 /*-------------------------TOGGLING HAMBURGER-----------------------------------------*/
 let menuIcon= document.querySelector('#menu-icon');
 let navbar= document.querySelector('.navbar');
 
 menuIcon.onclick = () => { 
     navbar.classList.toggle('active');
 }
 
  /*-------------------------CLICKING ON NAV LINKS FOR SCROLLING-----------------------------------------*/
 let sections= document.querySelectorAll('section');
 let navLinks= document.querySelectorAll('header nav a');
 
 window.onscroll = () =>{
     sections.forEach(sec =>{
         let top= window.scrollY;
         let offset= sec.offsetTop - 150;
         let height= sec.offsetHeight;
         let id=sec.getAttribute('id');
 
         if(top >= offset && top < offset + height){
             navLinks.forEach(links=>{
                 links.classList.remove('active');
                 document.querySelector('header nav a[href*=' +id+ ']').classList.add('active');
              });
         };
     });
 
  /*-------------------------REMOVE TOGGLING WHEN CLICK ON HUMBURGER-----------------------------------------*/
     navbar.classList.remove('active');
 };
 
 // let header=document.querySelector('header');
 // header.classList.toggle('sticky', window.scrollY >100);
 
  /*-------------------------ANIMATION THROUGH SCROLL REVEAL-----------------------------------------*/
 ScrollReveal({
     // reset:true,
     distance: '80px',
     duration: 2000,
     delay: 200
 });
 
 ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
 ScrollReveal().reveal('.home-img,.servcontainer,.portbox,.contact form',{origin:'bottom'});
 ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
 ScrollReveal().reveal('.home-content p,.about-more',{origin:'right'});
 
  /*-------------------------TYPED FROM CDN LINK -----------------------------------------*/  
 const typed= new Typed('.mutiple-text',{
     strings:['Frontend Developer','Frontend Developer','Frontend Developer'],
     typeSpeed: 100,
     backSpeed: 100,
     backDelay: 100,
     loop: true
 });