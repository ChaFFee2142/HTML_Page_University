window.onscroll = function() {
    scrollFunction();
};

function scrollFunction(){
    var a = document.getElementsByClassName("tablink");
    var b = document.getElementById("backPhoto")
    if(document.documentElement.scrollTop > 80){
        document.getElementById("header").style.height = "50px";
        for(var i = 0; i < a.length; i++){
            a[i].style.fontSize = "20px";
        }
    }
    else{
        document.getElementById("header").style.height = "80px";
        for(var i = 0; i < a.length; i++){
            a[i].style.fontSize = "24px";
        }
    }

    if(document.documentElement.scrollTop < 600){
        b.setAttribute("src", "Images/1.jpg")
        b.style.top = "80px";
        b.style.height = "750px";
    }
    else{
        b.setAttribute("src", "Images/5.jpg")
        b.style.top = "50px";
        b.style.height = "960px";
    }

}



function openPage(pageName, elmnt, color) {
    // Hide all elements with class="tabcontent" by default */
    var i, tabcontent, tablinks, headerBackground;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    // Remove the background color of all tablinks/buttons
    tablinks = document.getElementsByClassName("tablink");
    for (var i = 0; i < tablinks.length; i++){
        tablinks[i].style.background = 'none';
        tablinks[i].style.color = "white";
    }
    
    
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
    
    // Add the specific color to the button used to open the tab content
    elmnt.style.background = color;
    elmnt.style.color = "black";
    headerBackground = document.getElementsByClassName("header-background");
    //headerBackground[0].style.backgroundColor = color;
    
    scrollFunction();
}
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("default-open").click();
