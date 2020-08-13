function preview(){
    var input = document.getElementById("up-img");
    var freader = new FileReader();
    freader.readAsDataURL(input.files[0]);
    freader.onloadend = function(event){
               var prdiv = document.getElementById("preview-div");
               prdiv.innerHTML="";
               prdiv.style.background = "url("+event.target.result+")";
               prdiv.style.backgroundSize = "cover";
           }
}

function upload(){
    document.getElementById("up-img").click();
}

document.getElementById("reset").onclick= function(){
    location.reload();
}