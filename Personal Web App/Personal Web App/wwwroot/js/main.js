var theThing = document.querySelector('#logo');

theThing.addEventListener('dragend', grabEnd);

function grabEnd(e) {
    
    var xPosition = e.clientX - 210;
    var yPosition = e.clientY - 100;

    var translate3DValue = "translate3d(" + xPosition + "px," + yPosition + "px, 0)";
    theThing.style.transform = translate3DValue;

}

//-----------------------cursor-----------------------------//



