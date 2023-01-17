let elBox = document.querySelector(".box")

let isX = true

elBox.addEventListener("click",(e)=>{
    if(isX){
        e.target.textContent = "X"
    }else{
        e.target.textContent = '0'
    }

    isX = !isX
})