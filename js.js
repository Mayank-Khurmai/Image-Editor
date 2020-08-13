var prdiv = document.getElementById("preview-div");

function preview(){
    var input = document.getElementById("up-img");
    var freader = new FileReader();
    freader.readAsDataURL(input.files[0]);
    freader.onloadend = function(event){
               prdiv.innerHTML="";
               prdiv.style.background = "url("+event.target.result+")";
               prdiv.style.backgroundSize = "cover";
           }
}

function upload(){
    document.getElementById("up-img").click();
}

function opacity(){
    var x = document.getElementById("opacity").value;
    prdiv.style.filter = "opacity("+x+"%)";
}

function grayscale(){
    var x = document.getElementById("grayscale").value;
    prdiv.style.filter = "grayscale("+x+"%)";
}

document.getElementById("reset").onclick= function(){
    location.reload();
}