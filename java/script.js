/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var d = 0; d < dropdowns.length; d++) {
      var openDropdown = dropdowns[d];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show'); 
      }
    }
  }
}


					
				/*Side Nav*/

function openNav() {
    document.getElementById("mySidenav").style.width = '200px';
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}



//flip card// 
function flip(){
  document.getElementById('card').classList.toggle('flip');
}

function flip2(){
  document.getElementById('card2').classList.toggle('flip');
}

function flip3(){
  document.getElementById('card3').classList.toggle('flip');
}


