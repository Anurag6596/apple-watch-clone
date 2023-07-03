// IDENTIFIERS

const oBtn=document.getElementById("openbtn");
const cBtn=document.getElementById("closebtn");
const topScroll=document.getElementsByClassName('scrolltotop')
let elementsArray = document.querySelectorAll(".tile");
let moreArray = document.querySelectorAll(".more");
let plusArray = document.querySelectorAll(".show-more");
let plus = document.querySelectorAll(".plus");



function run(){
  for(let i=0;i<6;i++){
    plusArray[i].addEventListener("click",function(){
      plus[i].classList.toggle("rotateplus")
      moreArray[i].classList.toggle("d-none")
      moreArray[i].classList.toggle("animate__animated")
      moreArray[i].classList.toggle("animate__fadeInUp")
      return
    })
  }
}
// EVENT LISTENERS  START

window.addEventListener('scroll', fadeIn ); 
oBtn.addEventListener("click",opennav);
cBtn.addEventListener("click",closenav);
topScroll[0].addEventListener('click',scrolltop)
window.addEventListener("touchstart",showscroll)
window.addEventListener("mousewheel",showscroll)

// END OF EVENT LISTENERS


//  USER-DEFINED FUNCTIONS START

function fadeIn() {
    for (var i = 0; i < elementsArray.length; i++) {
        var elem = elementsArray[i]
        var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
        if (distInView < 0) {
           fadeinup(elem)
        } else {
            elem.classList.remove("inView");
        }
    }
}

function fadeinup(elem){
  elem.classList.add("animate__animated");
  elem.classList.add("animate__fadeInUp");
}

function fadeinright(elem){
  elem.classList.add("animate__animated");
  elem.classList.add("animate__rotateIn");
}

function opennav(){
  oBtn.classList.add("d-none")
  cBtn.classList.remove("d-none")
  fadeinright(cBtn)
  fadeinright(oBtn)
  
}

function closenav(){
  oBtn.classList.remove("d-none")
  cBtn.classList.add("d-none");
  oBtn.classList.toggle("animate__animated");
  oBtn.classList.toggle("animate__fadeInRight");
  cBtn.classList.toggle("animate__animated");
  cBtn.classList.toggle("animate__fadeInRight");
}


function scrollWin() {
    window.scrollBy(0, 900);
  }

function scrolltop() {
    window.scroll(0, 0)
    topScroll[0].classList.toggle("d-none")

  }

  function showtop(){
    topScroll[0].classList.remove('d-none')
  }

  function showscroll(){
    topScroll[0].classList.remove('d-none')
  }
 
  // FUNCTIONS END
  
  run()