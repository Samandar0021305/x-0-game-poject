let elBox = document.querySelector(".box")

let isX = true

elBox.addEventListener("click",(e)=>{
    if(isX){
        if(e.target.textContent === ""){
            e.target.textContent = "X"
            isX = !isX
        }
    }else{
        if(e.target.textContent === ""){
            e.target.textContent = '0'
            isX = !isX
 
        }
    }

})