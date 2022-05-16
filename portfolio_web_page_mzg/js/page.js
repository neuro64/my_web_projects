let resultOfTopNav=false;
let resultOfMenu=false;
document.querySelector(".hamburger").addEventListener("click",function(e)
{
  resultOfMenu=document.querySelector(".hamburger").classList.toggle("open")
    resultOfTopNav= document.querySelector(".openNav").classList.toggle("open")
     
})


document.querySelectorAll(".nav-linkMobile").forEach(e=>{
  e.addEventListener("click",function(){
    
       resultOfTopNav = document.querySelector(".openNav").classList.toggle("open")
       resultOfMenu=document.querySelector(".hamburger").classList.toggle("open")
     
   
  })
})



// document.querySelector(".showMore").addEventListener("click",function(e){
//   let allImages = document.querySelectorAll(".portfolio .profile-img a:nth-child(n+4)")
//   const buttonInfo = document.querySelector(".showMore");
//   allImages.forEach(img =>{
//     let result=img.classList.toggle("long")
//     if (result == true) {
//       buttonInfo.innerHTML = "Show Less";
//     } else {
//       buttonInfo.innerHTML = "Show More";
//       document.querySelector(".portfolio").scrollIntoView();
//     }  
//   })
  
// })

// const scrollElements = document.querySelectorAll("section");

// const elementInView = (el, dividend = 1) => {
//   const elementTop = el.getBoundingClientRect().top;

//   return (
//     elementTop <=
//     (window.innerHeight || document.documentElement.clientHeight) / dividend
//   );
// };

// const elementOutofView = (el) => {
//   const elementTop = el.getBoundingClientRect().top;

//   return (
//     elementTop > (window.innerHeight || document.documentElement.clientHeight)
//   );
// };

// const displayScrollElement = (element) => {
//   element.classList.add("scrolled");
// };


// const hideScrollElement = (element) => {
//   element.classList.remove("scrolled");
// };

// const handleScrollAnimation = () => {
//   scrollElements.forEach((el) => {
//     if (elementInView(el, 1.25)) {
//        displayScrollElement(el);
       
//     } else if (elementOutofView(el)) {
//        hideScrollElement(el)
      
//     }
//   })
// }


// window.addEventListener("scroll", () => { 
  
//     let header=document.querySelector('header');
//     let windowsPosition=window.scrollY > 0;
//     header.classList.toggle('scrolling-active',windowsPosition)

//    handleScrollAnimation();
// });
