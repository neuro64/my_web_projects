

document.querySelectorAll(".link").forEach(el=>{
    el.addEventListener("click",()=>{
        document.querySelectorAll(".contents").forEach(el=>{
            if(el.classList.contains("active")) 
                el.classList.remove("active")
            }
        )
        document.querySelector(`[data-section=${el.id}]`).classList.add("active")
    })
})

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
       document.querySelectorAll(".contents").forEach(el=>{
        if(el.classList.contains("active")) 
            el.classList.remove("active")
        }
    )
    document.querySelector(`[data-section=${e.id}]`).classList.add("active")
    
  })
})