const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector("nav");
const navLinks = document.querySelector('.nav_links');
const links = document.querySelectorAll('.nav_links li');


// *** add the shadow to nav bar
document.addEventListener("scroll", ()=>{
    nav.classList.toggle("shadow", window.scrollY > 0);

})


// **** hamburger click event
function toggle(){
    navLinks.classList.toggle("open");
    links.forEach(link =>{
        link.classList.toggle("fade");
    })
}
hamburger.addEventListener('click', () =>{
    toggle()
})
links.forEach(link=>{
    link.addEventListener("click",()=>{
        toggle()
    })
})


// **** text animation
const text = document.querySelector("#text");
const strContent = text.textContent;
const splitText = strContent.split("");

text.innerHTML = "";
for(let i=0; i < splitText.length; i++){
    if(i === 22){
        text.innerHTML+= "<br>"
    }
    text.innerHTML += "<span>"+ splitText[i] +"</span>"
}
let char = 0;
let timer = setInterval(onWriting, 70);
const span = text.querySelectorAll("span");
function onWriting(){    
    span[char].classList.toggle("fade");
    char++;
    if(char === splitText.length){
        clearInterval(timer);
        timer = null;
    }
}


