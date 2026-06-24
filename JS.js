var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var  abstract = this.nextElementSibling;
    if ( abstract.style.maxHeight){
       abstract.style.maxHeight = null;
    } else {
       abstract.style.maxHeight =  abstract.scrollHeight + "px";
    }
  });
}



/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("navbar-links");
  var y = document.getElementById("line-hamburger-menu");
  if ( x.style.maxHeight){
       x.style.maxHeight = null;
       y.style.display = "none";

    } else {
       x.style.maxHeight =  x.scrollHeight + "px";
       y.style.display = "block";
    }
}