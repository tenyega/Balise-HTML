let images = ["cuirRouge.png", "foret.jpg", "herbe.jpg", "zariko.jpg", "SouffleBleu1024768.jpg"]
let nbImages = images.length;
let lesImages;
let html = "";

let numRadioActif = 0;
let posY_range;
let div_X;
let lesDivs;

//lesImages.style.backgroundImage = "url(img/mer_1024.jpg)";

//------------------------------------------------------------
// générer dans #lesImages des div => 
//      <div class='div_1'><img src='img/cuirRouge.png' /></div>
//------------------------------------------------------------
// let html = "";
// for (let i = 0; i < nbImages; i++) {
//     html += "<div class='div_" + i + "'><img src='img/"+images[i]+"' alt='' /></div>";
// }
// lesImages.innerHTML= html;

// Generation des div.

function init() {
    lesImages = document.querySelector('#lesImages');
    posY_range = document.querySelector("input[name='rangePosY']");

    affDivsImages(); //here in this case we are actually showing the div with just numbers 
    div_X = document.querySelector(".div_" + numRadioActif);

    generationDesImagesEnBG();

    cacheDivs();

    eventRange();

    affLabelInput();
    radioBoutons();


    affHome();
}


//------------------------------------------------



function generationDesImagesEnBG() {
    //selection des div
    lesDivs = document.querySelectorAll("div[class^='div_']");
    //console.log(lesDivs);
    //modification de la arriere plan
    for (let i = 0; i < lesDivs.length; i++) {
        lesDivs[i].style.backgroundImage = "url(img/" + images[i] + ")";
    }
}

/**
 * fonction ajoute des écouteurs aux range posY
 */
function eventRange() {
    posY_range.addEventListener('change', function() {
        posY_fx(this);
    });
    posY_range.addEventListener('mousemove', function() {
        posY_fx(this);
    });
}

//---------------------------------------------------  EVENT
function posY_fx(range) {

    //we have put a <span></span> just after the input type=range. so with nextSibling we will get the span tag
    range.nextSibling.innerHTML = range.value;
    // range.value va de 0 à 100 ==> -100 à +100
    let newVal = range.value * 5 - 250; // 0...100 *5 -250 here 250 is the size of div and 5 is to make it comptelely get out of the frame from top to bottom
    div_X.style.backgroundPositionY = newVal + "px";

}

//----------------------------------- RANGE X
let msDown_posX_b = false;

function msDown_posX(bool) {
    msDown_posX_b = bool;
}

function posXMove_fx(range) {
    if (msDown_posX_b) {
        posX_fx(range);
    }
}

function posX_fx(range) {
    range.nextSibling.innerHTML = range.value;
    div_X.style.backgroundPositionX = (range.value * 5 - 250) + "px"; // here it is to get out of the frame from left to write 
}


// ------------------------------------Echelle
function posEchelle(range) {
    range.nextSibling.innerHTML = range.value;
    div_X.style.backgroundSize = range.value + "%";

}

//------------------------------------------------

// Générer les radios button, value = 0 ... images.length du tableau images
function affLabelInput() {
    html = "";

    for (let i = 0; i < images.length; i++) {
        html += "<label for='R_" + i + "'><img src='img/" + images[i] + "' alt='' width='50' /></label>";
        html += '<input type="radio" id="R_' + i + '" name="img" value="' + i + '" />';
    }

    // let lesRadiosDeSelection = 
    document.querySelector('.lesRadiosDeSelection').innerHTML = html;
}


function radioBoutons() {

    // écouteur sur les radios pour 
    //  let lesRadios = document.querySelectorAll('.lesRadiosDeSelection input[name="img"]')
    let lesRadios = document.querySelectorAll('.lesRadiosDeSelection input')

    //     récupérer le numéro de celui qui checked
    lesRadios.forEach(leRadio => {

        //     lier les radios button a notre image : 
        //     c'est à dire : avoir une variable globale (numRadioActif) qui connait le numéro actif.
        leRadio.addEventListener('click', function() {
            // Remettre la bordure par défaut pour toutes les bordures
            let imagesANePasBordurer = document.querySelectorAll('.lesRadiosDeSelection label img');
            console.log(imagesANePasBordurer);
            imagesANePasBordurer.forEach(image => {
                image.style.border = "2px #fff solid";
            });

            // mise à jour de l'image à modifier
            numRadioActif = this.value;
            //     modifier la valeur de div_X
            div_X = document.querySelector(".div_" + numRadioActif);

            cacheDivs();

            affHome();

        });
    });
}

/* Here in this case the affDivImage the string is created and finally the value of the string is 
 * converted to html tag by putting it in innerHTML of lesImages. 
 */
function affDivsImages() {
    for (let i = 0; i < nbImages; i++) {
        html += "<div class='div_" + i + "'>" + i + "</div>"; //<div class='div_0'>0</div>
    }
    lesImages.innerHTML = html;
}

function cacheDivs() {

    lesDivs.forEach(lediv => {
        lediv.style.display = 'none';
    });

    // for (let i = 0; i < lesDivs.length; i++) {
    //     lesDivs[i].style.display = 'none';
    // }
}


function affHome() {
    // afficher l'image correspondant au n° du radio bouton sélectionné.
    let lediv = document.querySelector('div[class="div_' + numRadioActif + '"]');
    lediv.style.display = 'block';

    // bordurer l'image aui est avec le radio bouton
    let imageABordurer = document.querySelector('label[for="R_' + numRadioActif + '"] img');
    //alert(this.id);
    imageABordurer.style.border = "2px #f00 solid";
}