
//      Boton Menu
addEventListener('DOMContentLoaded', ()=>{
    const btn_menu = document.querySelector('.btn-menu')
    if(btn_menu){
        btn_menu.addEventListener('click',()=>{
            const menu_items = document.querySelector('.menu-items')
            menu_items.classList.toggle('show')
        })
    }
})

//      SLIDER
const slider = document.querySelector("#slider")
let slider_section = document.querySelectorAll(".slider_section")

// seleccionar la ultima imagen
let slider_sectionLast = slider_section[slider_section.length -1]

const btn_Right = document.querySelector("#btn_right")
const btn_Left = document.querySelector("#btn_left")

// obtener el ultimo elemento y colocarlo en el slider
slider.insertAdjacentElement("afterbegin", slider_sectionLast)

function moveRight(){
    // seleccionar la primera imagen
    let sliderSection_First = document.querySelectorAll(".slider_section")[0];

    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 1s"

    setTimeout(() => {
        slider.style.transition = "none"
        slider.insertAdjacentElement("beforeend",sliderSection_First)
        slider.style.marginLeft = "-100%"
    }, 900);
}

btn_Right.addEventListener("click",function(){
    moveRight();
})


function moveLeft(){
    let slider_section = document.querySelectorAll(".slider_section")

    // seleccionar la ultima imagen
    let slider_sectionLast = slider_section[slider_section.length -1]

    slider.style.marginLeft = "0";
    slider.style.transition = "all 1s"

    setTimeout(() => {
        slider.style.transition = "none"
        slider.insertAdjacentElement("afterbegin",slider_sectionLast)
        slider.style.marginLeft = "-100%"
    }, 900);
}

btn_Left.addEventListener("click",function(){
    moveLeft();
})

setInterval(function() {
    moveRight();
},4000);
