// import { loadAnimation } from "lottie-web";
// import { defineLordIconElement } from "lord-icon-element";

// const { Hover } = require("lord-icon-element/build/triggers/hover");

// // register lottie and define custom element
// defineLordIconElement(loadAnimation);

// let animatedItems = document.getElementsByClassName('anim');
// for (let animatedItem of animatedItems) {
//     let animation = bodymovin.loadAnimation({
//         container: animatedItem,
//         render:'svg',
//         loop: true,
//         autoplay: true,
//         path:'../12-layers-outline.json'
//     })
// }

// animatedItem.addEventListener('mousemove', ()=> {

//     animation = bodymovin.loadAnimation({
//         autoplay: true,
//     })
//      bodymovin.autoplay = true;
// })


function addIcon(cl, iconPath) {
    let containers = document.getElementsByClassName(cl);
    
    for (let container of containers) {
        let animation = bodymovin.loadAnimation({
            container: container,
            render:'svg',
            loop: true,
            autoplay: true,
            path: iconPath
        })
    }
}


addIcon('anim', '../12-layers-outline.json')
addIcon('new-icon', '../1103-confetti-outline-edited.json')
addIcon('second-icon', '../243-glasses-eye-blink-outline-edited.json')



let cards = document.querySelectorAll('.price .card');
let stable = document.querySelector('.gold-card')
for(let card of cards) {
        card.addEventListener('mouseenter',function(){
            card.classList.add('big-card')
            stable.classList.remove('gold-card')
           })       

    card.addEventListener('mouseleave',()=>{
        card.classList.remove('big-card')
        stable.classList.add('gold-card')   
    })

}


