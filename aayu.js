var prdiv = document.getElementById("preview-div");
var flag = 0;

function preview(){
    flag = 1;
    var input = document.getElementById("up-img");
    var freader = new FileReader();
    freader.readAsDataURL(input.files[0]);
    freader.onloadend = function(event){
               prdiv.innerHTML="";
               prdiv.style.background = "url("+event.target.result+")";
               prdiv.style.backgroundSize = "contain";
               prdiv.style.backgroundRepeat = "no-repeat";
               prdiv.style.backgroundPosition = "center center";
               prdiv.style.backgroundColor = "white";
           }
}

function upload(){
    document.getElementById("up-img").click();
}
function load() {
    window.location.reload();
}

function myOpacity() {
    if (flag == 1)
    {
    var y = document.getElementById("opacity").value;
    prdiv.style.filter = "opacity("+y+"%)";
    }
}
function myGreyscale() {
    if (flag == 1)
    {
    var y = document.getElementById("greyscale").value;
    prdiv.style.filter = "grayscale("+y+"%)";
    }
}
function myInvert() {
    if (flag == 1)
    {
    var y = document.getElementById("invert").value;
    prdiv.style.filter = "invert("+y+"%)";
    }
}
function mySaturate() {
    if (flag == 1)
    {
    var y = document.getElementById("saturate").value;
    prdiv.style.filter = "saturate("+y+"%)";
    }
}
function myBlur() {
    if (flag == 1)
    {
    var y = document.getElementById("blur").value;
    prdiv.style.filter = "blur("+y+"px)";
    }
}