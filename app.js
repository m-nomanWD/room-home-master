const infoArray = [{
    title:'Discover innovative ways to decorate',
    text: ` We provide unmatched quality, comfort, and style for property owners across the country. 
    Our experts combine form and function in bringing your vision to life. Create a room in your 
    own style with our collection and make your property a reflection of you and what you love.`
},
{
    title:' We are available all across the globe',
    text: ` With stores all over the world, it's easy for you to find furniture for your home or place of business. 
    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
    store locator. Any questions? Don't hesitate to contact us today.`
},
{
    title:'Manufactured with the best materials',
    text: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
    experience in this industry, we understand what customers want for their home and office.`
}]
const slids = document.querySelectorAll('.slide-img')
const infos = document.querySelectorAll('.info-raper')
const btnLeft = document.querySelector('.btn-left')
const btnRight = document.querySelector('.btn-right')
const info = document.querySelector('.info-container')
const hamburger = document.querySelector('.hamburger')
const closer = document.querySelector('.closer')
const linksContainer = document.querySelector('ul')
const navBar = document.querySelector('nav')
let counter = 0
textCurser()
btnRight.addEventListener('click', ()=>{
    counter++
    if(counter >= 3){
        counter = 0
    }
    curser()
   textCurser()
        
})
btnLeft.addEventListener('click', ()=>{
    counter--
 
    if(counter < 0 ){
        counter = 2

    }
    curser()
    textCurser()
        
})

function curser(){
    slids.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`
             })
}
function textCurser(){
    info.innerHTML = `<h1> ${infoArray[counter].title} </h1>
    <p>${infoArray[counter].text} </p>`
}
hamburger.addEventListener('click', ()=>{
    linksContainer.classList.add('show-links')

})
closer.addEventListener('click', ()=>{
    linksContainer.classList.remove('show-links')

})
window.addEventListener('scroll', ()=>{
    let windowScroll = window.pageYOffset

const navHight = navBar.getBoundingClientRect().height
if(windowScroll > navHight ){
   navBar.classList.add('fixed-nav')
}
else{
    navBar.classList.remove('fixed-nav')
}

})
window.addEventListener('resize', ()=>{
    let width = window.innerWidth
  
    // console.log(width);
    if(width > 720  ){
       navBar.classList.add('t')
    }
    else{
        navBar.classList.remove('t')
    }
})
