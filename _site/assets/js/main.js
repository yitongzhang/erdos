document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.nav-modal-open').addEventListener('click', event => {
      injectAnimationParams('in')
      openModal('nav',isMobile)
    })
})
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.footer-modal-open').addEventListener('click', event => {
    if(event.target != document.getElementById("footer-button")){
      injectAnimationParams('in')
      openModal('footer',isMobile)
    }
  })
})

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.modal-close').addEventListener('click', event => {
    injectAnimationParams('out')
    closeModal()
  })
})

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.modal-close-from-icon').addEventListener('click', event => {
    injectAnimationParams('out')
    closeModal()
  })
})

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.close-modal-logo').addEventListener('click', event => {
    injectAnimationParams('out')
    closeModal()
  })
})

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    injectAnimationParams('out')
    closeModal()
  }
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.dealTerms-open').addEventListener('click', event => {
    window.scrollTo(0, document.getElementsByClassName('deal')[0].offsetTop)
  })
})

var isMobile = isMobile(screen.width)
console.log(isMobile)
var modal = document.getElementsByClassName("modal")[0];
var overlay = document.getElementsByClassName("overlay")[0];
var html = document.documentElement;
var footer = document.querySelector('footer');
var footerInside = document.getElementsByClassName("footer-inside")[0];
var footerHeight = footer.offsetHeight;
var modalHeight = modal.offsetHeight;
var currentModalOpenedFromFooter = false;

function injectAnimationParams(direction) {
  if(direction == 'in'){
    modal.style.transition = "top cubic-bezier(0.190, -0.005, 0.000, 1.000)  600ms, opacity cubic-bezier(0.190, -0.005, 0.000, 1.000)  300ms 300ms";
    overlay.style.transition = "all cubic-bezier(0.190, -0.005, 0.000, 1.000) 600ms";
    footer.style.transition = "all cubic-bezier(0.190, -0.005, 0.000, 1.000) 600ms";
    footerInside.style.transition = "all cubic-bezier(0.190, -0.005, 0.000, 1.000) 400ms";
  }
  else{
    modal.style.transition = "top cubic-bezier(0.190, -0.005, 0.000, 1.000)  1200ms, opacity cubic-bezier(0.190, -0.005, 0.000, 1.000)  200ms";
    overlay.style.transition = "all  cubic-bezier(0.190, -0.005, 0.000, 1.000) 600ms";
    footer.style.transition = "all  cubic-bezier(0.190, -0.005, 0.000, 1.000) 600ms";
    footerInside.style.transition = "all cubic-bezier(0.190, -0.005, 0.000, 1.000) 400ms 200ms";
  }

}

function openModal (location,isMobile) {

    if(isMobile){
      modal.style.top = "0px";
      modal.style.left = "0px";
      modal.style.overflow ="auto"
      modal.style.height ="100%"
    }
    else{
      modal.style.top = "calc( 100vh - " + modalHeight + "px )"
    }
    
    modal.style.opacity="1"
    
    overlay.style.opacity = 1;
    overlay.style.pointerEvents = "auto";

    if(location == "footer" && !isMobile){
      footer.style.height = modalHeight + "px";
      footer.style.bottom = (modalHeight-footerHeight) + "px";
      footerInside.style.opacity = '0'
      currentModalOpenedFromFooter = true;
    }
    else{
      currentModalOpenedFromFooter = false;
    }
    // html.style.overflow ="hidden";
}

function closeModal () {
  console.log('close')
  modal.style.top = "100vh"
  modal.style.opacity="0"
  
  overlay.style.opacity = 0;
  overlay.style.pointerEvents = "none";

  if(currentModalOpenedFromFooter == true){
    footer.style.height = footerHeight + "px";
    footer.style.bottom = "0px";
    footerInside.style.opacity = '1'
  }

  html.style.overflow ="visible";
}

function isMobile(screenWidth){
  if(screenWidth < 1200){
    return true
  }
  return false
}