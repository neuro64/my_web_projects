

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