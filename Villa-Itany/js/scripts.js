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

})

let numrandom = 0;
let computador = {

    nombre:"TOSHIBA",
    procesador:"INTEL-CORE",
    ram: "16GB"

};
 
arrayone = ["Sebas","Jorge","Carlos"];
arraytwo = ["Mario","Karla",arrayone];

for(let array in arraytwo){

    if(array == 2){
        for(let array of arrayone){
          document.write(array);
        }
    }else{

        document.write(arraytwo[array]);
    }
}

document.write("<br>");

let nombre = computador["nombre"];
let procesador = computador["procesador"];
let ram = computador["ram"];

frase = " NOMBRE : " + nombre + " PROCESADOR : " + procesador + " RAM : " + ram + "  <br>  ";

document.write(frase);

while(numrandom < 100){

    numrandom = numrandom + 1;
    document.write(numrandom);
    document.write("<br>");

    if(numrandom == 8){

        break;

    }
}

for(let i = 0; i < 10; i++){

    if(i == 3 || i == 6 || i == 9){
        continue;
    }

    document.write(i);
}