var counter = 0;
$(document).ready(function () {
    //au clic sur le bouton,
    $('button').click(function() { 
        //j'incrément ma variable counter
        counter++
        //on affiche dans l'input le nombre de clic
       $('input').val(counter);
    });
});
