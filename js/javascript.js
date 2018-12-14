/* Source: https://www.w3schools.com/w3css/w3css_slideshow.asp */

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("anbefaling");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

/* ---- Start function twentytwenty */


/*
$(function () {
    $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({
        default_offset_pct: 0.7
    });
});
*/
/* -------- plus/minus sko ---- */



/* --------- Beregner ----- */

// eventlistener: wait for a clik
btn.addEventListener('click', beregner);

// perform calculations
function beregner() {

  pris = parseFloat(standard-rens.value) + // parsefloat: convert form-string to number
    parseFloat(god-rens.value) +
    parseFloat(perfekt-rens.value);

  // hvis der er x i checkboxe
  if (tjek-damp.checked == true) {
  	pris += parseFloat( tjek-damp.value );
  }
  
  if (tjek-impregnering.checked == true) {
  	pris += parseFloat( tjek-impregnering.value );
  }
 
	// viser resultatet i en alertbox 
  document.write(pris());
}