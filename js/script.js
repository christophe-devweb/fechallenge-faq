'use strict';

var derquest = 0;
var derrep;
var derfle; 

function affichreponse(){

    if ((derquest != this) && (derquest != 0)) {
        derrep.classList.toggle('cache');
        derquest.classList.toggle('gras');
        derfle.classList.toggle('turn'); 
    }

    var rep = this.nextElementSibling;
    var fleche = this.lastChild;
    rep.classList.toggle('cache');
    this.classList.toggle('gras');
    fleche.classList.toggle('turn'); 

    if (this != derquest){
        derquest = this;
        derrep = rep;
        derfle = fleche;
    }
    else {
        derquest = 0;
    }
    
}


document.addEventListener('DOMContentLoaded',function(){

    var questions=document.querySelectorAll(".question");

    for(var i=0;i<questions.length;i++){
        questions[i].addEventListener('click',affichreponse);   
    }
    
});