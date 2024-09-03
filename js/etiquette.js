
// <!-- PHP
// $toto->sdfgsg
// $a = "retert" . $b;

// JS
// $toto.sdfgsg
// $a = "retert" + $b; -->


let decalageYAscenceur = 0;

// détecte le mouvement de l'ascenceur.
window.onscroll = function (event) {
    //console.log(event);
    decalageYAscenceur = window.scrollY;

}

// let sUsrAg = navigator.userAgent;
// console.log("Navigator %o", 1);

// console.log("Voici l'agent utilisateur du navigateur courant", sUsrAg);

//
// récupérer l'etiquette.
//let etiquette = document.getElementById('etiquette');
let etiquette = document.querySelector('#etiquette');

// récupérer la liste des éléments interractifs
let listeElemInterractifs = document.querySelectorAll('.balise.chope');

console.log(listeElemInterractifs);


    // De l'évènement onmouseover sur .balise.chope, 
listeElemInterractifs.forEach(chope => {
    //console.log(chope);

    chope.addEventListener("mouseover", function (event) {
        //console.log(event);

        // Afficher l'étiquette
        etiquette.style.display = "block";

        // Récupérer la position de la souris
        let mouseX = event.clientX;
        let mouseY = event.clientY;

        // L'appliqer ~ à l'étiquette.
        let etiquetteX = mouseX - 30;
        let etiquetteY = mouseY + 10 + decalageYAscenceur;
        etiquette.style.left = etiquetteX + "px";
        etiquette.style.top = etiquetteY + "px";

        //  récupérer le texte qui dans la div qui à la class définition.
        console.log("Parent ", this.parentNode.parentNode);
        
        /* <article>
            <div class='definition'>La balise <b>&lt;p&gt;</b> permet de créer un paragraphe.</div>
            <div class='code html'>
                <span class='balise chope'>&lt;p&gt;</span ....*/


        let txt = this.parentNode.parentNode.querySelector('.definition').innerHTML;

        // et l'écrire dans l'étiquette
        etiquette.innerHTML = txt;

    });


    // De l'évènement onmouseout sur .balise.chope, 
    chope.addEventListener("mouseout", function (event) {
        //      Masquer l'étiquette
        etiquette.style.display = "none";
        etiquette.innerHTML = "";
    });
});


function posSouris(event, leSpan) {
    
    // Afficher l'étiquette
    etiquette.style.display = "block";

    // Récupérer la position de la souris
    let mouseX = event.clientX;
    let mouseY = event.clientY;

    // L'appliqer ~ à l'étiquette.
    let etiquetteX = mouseX - 30;
    let etiquetteY = mouseY + 10 + decalageYAscenceur;
    etiquette.style.left = etiquetteX + "px";
    etiquette.style.top = etiquetteY + "px";

    //  récupérer le texte qui dans la div qui à la class définition.
    let txt = leSpan.parentNode.parentNode.querySelector('.definition').innerHTML;

    // et l'écrire dans l'étiquette
    etiquette.innerHTML = txt;
}
