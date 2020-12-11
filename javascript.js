window.onscroll = function() {
    scrollFunction();
};

function scrollFunction(){
    var a = document.getElementsByClassName("tablink");
    if(document.documentElement.scrollTop > 80){
        document.getElementById("header").style.height = "50px";
        for(var i = 0; i < a.length; i++){
            a[i].style.fontSize = "26px";
        }
    }
    else{
        document.getElementById("header").style.height = "120px";
        for(var i = 0; i < a.length; i++){
            a[i].style.fontSize = "32px";
        }
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
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
  
    // Show the specific tab content
    document.getElementById(pageName).style.display = "block";
  
    // Add the specific color to the button used to open the tab content
    elmnt.style.backgroundColor = color;
    headerBackground = document.getElementsByClassName("header-background");
    headerBackground[0].style.backgroundColor = color;
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();