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
function myBrightness() {
    if (flag == 1)
    {
    var y = document.getElementById("brightness").value;
    prdiv.style.filter = "brightness("+y+"%)";
    }
}
function myContrast() {
    if (flag == 1)
    {
    var y = document.getElementById("contrast").value;
    prdiv.style.filter = "contrast("+y+"%)";
    }
}
function mySepia() {
    if (flag == 1)
    {
    var y = document.getElementById("sepia").value;
    prdiv.style.filter = "sepia("+y+"%)";
    }
}
function myHuerotate() {
    if (flag == 1)
    {
    var y = document.getElementById("huerotate").value;
    prdiv.style.filter = "hue-rotate("+y+"deg)";
    }
}
function myDropshadow() {
    if (flag == 1)
    {
    var y = document.getElementById("dropshadow").value;
    y *= 0.05;
    prdiv.style.filter = `drop-shadow(${y}px ${y}px)`;
    }
}

function download(file, input) { 
              
    //creating an invisible element 
    var element = document.createElement('a'); 
    element.setAttribute('href',  
    'data:text/plain;charset=utf-8, ' 
    + encodeURIComponent(input)); 
    element.setAttribute('download', file); 
  
    // Above code is equivalent to 
    // <a href="path of file" download="file name"> 
  
    document.body.appendChild(element); 
  
    //onClick property 
    element.click(); 
  
    document.body.removeChild(element); 
} 
  
// Start file download. 
document.getElementById("dn") 
.addEventListener("click", function() { 
    // Generate download of hello.txt  
    // file with some content 
    var _img = document.getElementById("up-img").files[0]; 
    var filename = "GFG.jpg"; 
  
    download(filename, input); 
}, false); 