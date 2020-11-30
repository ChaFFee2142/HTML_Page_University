window.onscroll = function() {
    scrollFunction();
};

function scrollFunction(){
    if(document.documentElement.scrollTop > 80){
        document.getElementById("header").style.height = "50px";
    }
    else{
        document.getElementById("header").style.height = "120px";
    }

}