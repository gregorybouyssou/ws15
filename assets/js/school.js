function pourcentage(pourcentage, var2,){
    return var2 * (pourcentage/100)
}
  
  
  //sticky navbar//////////////////////////////////////////////////////////////
  
  window.onscroll = function() {myFunction()};
  
  var navbar = document.getElementById("nav");
  var sticky = navbar.offsetTop;
  var windowWidth = window.innerWidth
  
  
  function myFunction() {
    if(windowWidth > 1140){
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky", "is-sticky")
      } else {
        navbar.classList.remove("sticky","is-sticky");
      }
    } else {
        navbar.classList.add("sticky", "is-sticky") 
    }
   
  }