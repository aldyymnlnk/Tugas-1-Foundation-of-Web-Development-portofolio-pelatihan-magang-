document.addEventListener("DOMContentLoaded", function(){

    const cards = document.querySelectorAll(".card");

    cards.forEach(function(card){
        card.addEventListener("mouseover", function(){
            card.style.transform = "scale(1.03)";
        });

        card.addEventListener("mouseout", function(){
            card.style.transform = "scale(1)";
        });
    });

});