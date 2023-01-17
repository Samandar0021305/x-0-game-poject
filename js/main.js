let elBox = document.querySelector(".box")

let isX = true

elBox.addEventListener("click",(e)=>{
    let elid = e.target.id
    elid = elid.slice(1)
    elid = parseInt(elid,10)
    console.log(elid);
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