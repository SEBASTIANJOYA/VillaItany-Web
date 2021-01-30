window.addEventListener('load', () => {


    // initial slide
    let slide = 1;

    // total slides
    let slides = document.querySelectorAll(".slider ul li");
    total = slides.length;

    // show first side
    showSlide(1);

    next = document.querySelector(".next");
    prev = document.querySelector(".prev")

    /**
     * event next button
     */
    next.addEventListener('click', (evt) => {
        evt.preventDefault();
        slide++;
        if (slide > total) { slide = 1; }
        showSlide(slide);
    })

    /** 
     * event prev button
     */
    prev.addEventListener("click", (evt) => {
        evt.preventDefault();
        slide--;
        if (slide < 1) { slide = total; }
        showSlide(slide);
    })

    /**
     * show slides
     * 
     * @param {number} n 
     * @return {null}
     * 
     */
    function showSlide(n) {
        n--; // decrement 1
        for (i = 0; i < slides.length; i++) {
            (i == n) ? slides[n].style.display = "block" : slides[i].style.display = "none";
        }
    }

})   ;

//CALCULA LA EDAD DE EL QUE ESTA RESERVANDO.

var age = function( dateBegin, dateEnd ){
    var years = dateEnd.getFullYear() - dateBegin.getFullYear();
    const months = dateEnd.getMonth() - dateBegin.getMonth();
    const days = dateEnd.getDate() - dateBegin.getDate();

    if( months < 0 || ( months == 0 && days < 0 ) ){
        years--;
    }

    return( years)
}

//ALMACENA LA CANTIDAD DE LA EDAD EN EL INPUT DE LA EDAD.

function calcAge(){
    const dateNow = new Date();
    const dateAux = new Date(document.getElementById('dateBirthday').value );

    document.getElementById('edad').value = age( dateAux, dateNow )
}

//Funcion Calcula Monto a Pagar
var precio = function( dateBegin, dateEnd ){

    //Calculo diferencia en dias de las dos fechas.
    var diferencias = dateEnd.getTime() - dateBegin.getTime();
    var contdias = Math.round(diferencias/(1000*60*60*24));

    var totalpagar = contdias * 38000;
    return(totalpagar);
}

//ALMACENA CANTIDAD A PAGAR EN EL INPUT CORRESPONDIENTE
function calcMontoPagar(){

    const dateinicio = new Date(document.getElementById('dateingreso').value);
    const datefin = new Date(document.getElementById('datesalida').value);

    
    
    document.getElementById('total').value = precio(dateinicio,datefin);
}

function idReserva(){

    
}

//BLOQUEA EL TECLADO, SOLO ADMITE NUMEROS.
function onlyNums(e){
    const code = window.event ? e.which : e.keyCode;

    return !( code < 48 || code > 57 );
}


$(document).ready(function(){
	var altura = $('.menu').offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() >altura) {
            $('.menu').addClass('menu-fixed');
            
		} else {
			$('.menu').removeClass('menu-fixed');
		}
	});
 
});

//VALIDAR SI ESTA OCUPADO EN ESAS FECHAS.