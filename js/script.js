
const contactPopup = document.querySelector(".contact-popup");
const close = document.querySelector(".close"); 

window.addEventListener("load",function(){
    // showPopup();
    setTimeout(function(){
        contactPopup.classList.add("show");
    },2000)
})

// function showPopup(){
//     const timeLimit = 5;
//     let i=0;
//     const timer = setInterval(function(){
//         i++;
//         if(i == timeLimit){
//             clearInterval(timer);
//             contactPopup.classList.add("show");
//         }
//         console.log(i)
//     },1000);
// }

close.addEventListener("click",function(){
    contactPopup.classList.remove("show");
})