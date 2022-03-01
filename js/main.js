// array of images
const drPics = [
  "./img/dw-1.jpg",
  "./img/dw-2.jpg",
  "./img/dw-3.jpg",
  "./img/dw-4.jpg",
  "./img/dw-5.jpg",
  "./img/dw-6.jpg",
  "./img/dw-7.jpg",
  "./img/dw-8.jpg",
  "./img/dw-war.jpg",
  "./img/dw-9.jpg",
  "./img/dw-10.jpg",
  "./img/dw-11.jpg",
  "./img/dw-12.jpg",
  "./img/dw-13.jpg",
];

// array of to all the 'buttons'
const doctors = document.querySelectorAll(".doctor");

// loop through array of 'buttons', add eventListeners and funct call
Array.from(doctors).forEach((element) =>
  element.addEventListener("click", changeBkgd)
);

// declare function w/ click param
function changeBkgd(click) {
  // loop through buttons, from 1 - 14
  for (let i = 0; i <= 14; i++) {
    // if clicked, change body bg img
    if (click.target.classList.contains("dr" + i)) {
      document.querySelector("body").style.background =
        "url('" + drPics[i] + "') no-repeat";
      document.querySelector("body").style.backgroundSize = "cover";
      playSound();
      
    }
  }
}

function playSound(){
  if(click.target.classList.contains("dr9")){
    document.querySelector(".fantastic").play();
  }else if(click.target.classList.contains("dr10")){
    document.querySelector(".allons-y").play();
  }else if(click.target.classList.contains("dr11")){
    document.querySelector(".geronimo").play();
  }else{
    document.querySelector(".tardis").play();
  } 
  
}