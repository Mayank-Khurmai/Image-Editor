function preview(){
    var freader = new FileReader();
    console.log(input);
    // freader.readAsDataURL(input.files[0]);
    
    // freader.onloadend = function(event){
    //         prdiv.innerHTML="hello";
            
    //     }
}

function upload(){
    var input = document.getElementById("up-img");
    input.click();

    var prdiv = document.getElementById("preview-div");
    prdiv.innerHTML="";
    preview();
}