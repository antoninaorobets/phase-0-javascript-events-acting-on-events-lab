// Your code here

const dodger = document.getElementById("dodger")

document.addEventListener("keydown", function (event) {

    if (event.key === "ArrowLeft") {
        moveDodgerLeft();
    };
    if (event.key === "ArrowRight") {
        moveDodgerRight();
    };
  });

  
function moveDodgerLeft() {
        const leftPosition = dodger.style.left.replace("px","");
        const left = parseInt(leftPosition);
        if (left > 0) {  
            dodger.style.left = `${left -1}px`;
        };  
}

function moveDodgerRight() {
  
    const check = dodger.style.left
    const rightPosition =dodger.style.left.replace("px","");
    const rigt = parseInt(rightPosition);

     if (rigt < 360) {
        dodger.style.left = `${rigt+1}px`;
     }
}
