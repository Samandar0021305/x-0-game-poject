let btn = document.querySelector('.wrapper-btn')
let wrapper = document.querySelector(".wrapper")
let header = document.querySelector(".header")
btn.addEventListener('click',()=>{
 wrapper.classList.add("isWrapper")
 header.classList.add("isHeader")
})


let elBox = document.querySelector(".box")

let isX = true

let arrX = []
let arr0 = []

let message = ""

let gameOur = false
elBox.addEventListener("click",(e)=>{
    if(gameOur){
        return
    }
    let elid = e.target.id
    elid = elid.slice(1)
    elid = parseInt(elid,10)
    console.log(elid);
    if(isX){
        if(e.target.textContent === ""){
            e.target.textContent = "X"
            isX = !isX
            arrX.push(elid)
         }
    }else{
        if(e.target.textContent === ""){
            e.target.textContent = '0'
            isX = !isX
            arr0.push(elid)
        }
    }


    if(
        (arrX.includes(1) && arrX.includes(2) && arrX.includes(3)) ||
        (arrX.includes(4) && arrX.includes(5) && arrX.includes(6)) ||
        (arrX.includes(7) && arrX.includes(8) && arrX.includes(9)) ||
        (arrX.includes(1) && arrX.includes(4) && arrX.includes(7)) ||
        (arrX.includes(2) && arrX.includes(5) && arrX.includes(8)) ||
        (arrX.includes(3) && arrX.includes(6) && arrX.includes(9)) ||
        (arrX.includes(1) && arrX.includes(5) && arrX.includes(9)) ||
        (arrX.includes(3) && arrX.includes(5) && arrX.includes(7))      
    ){
      message = "x win"
      gameOur = true
    }


    if(  (arr0.includes(1) && arr0.includes(2) && arr0.includes(3)) ||
    (arr0.includes(4) && arr0.includes(5) && arr0.includes(6)) ||
    (arr0.includes(7) && arr0.includes(8) && arr0.includes(9)) ||
    (arr0.includes(1) && arr0.includes(4) && arr0.includes(7)) ||
    (arr0.includes(2) && arr0.includes(5) && arr0.includes(8)) ||
    (arr0.includes(3) && arr0.includes(6) && arr0.includes(9)) ||
    (arr0.includes(1) && arr0.includes(5) && arr0.includes(9)) ||
    (arr0.includes(3) && arr0.includes(5) && arr0.includes(7)) ){
        message = "0 win"
        gameOur = true
    }
})