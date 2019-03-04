'use strict';

// Créez un bouton. Si ce bouton est cliqué, logguez dans la console 'Clicked!'. Si ce bouton est cliqué plus de 5 fois, enlevez son écouteur d'événement 'click'.

let counter = 0;

$('#js-btn').click(() =>{
    console.log('Clicked!');
    counter++;
    if (counter > 5) {
        $('#js-btn').off('click');
    }
    console.log('counter', counter);
})

// Créez un div bleu. Si on le survole, il passe en vert. Si on sort le curseur du div, il redevient bleu. Utilisez les méthodes mouseenter, mouseleave ou hover.

$('#js-hovered').mouseenter(() => {
    $('#js-hovered').css('background-color', 'green');
});
$('#js-hovered').mouseleave(() => {
    $('#js-hovered').css('background-color', 'blue');
});

// Desactivez le comportement par defaut du click du bouton droit de la souris sur toute la page. Si le bouton a été cliqué, vérifiez si le comportement par defaut est desactivé. Dans ce cas-là, logguez dans la console 'You shall not pass'

$(document).ready(function(){
    $(document).bind("contextmenu",function(e){
       return false;
    });
 });

// tooltip span

 $('#js-tooltip-wrapper')[0].addEventListener('mouseenter', function() {

    $('#js-tooltip').css('display', 'block');

});

$('#js-tooltip-wrapper')[0].addEventListener('mouseleave', function() {

    $('#js-tooltip').css('display', 'none');

});

// Utilisez le HTML ci-dessus. Affichez l'alerte si le bouton #js-show-alert est cliqué. Cachez-la si le bouton #js-hide-alert est cliqué.

$('#js-show-alert').click(() => {
    $('#js-alert').show(); //afficher
});

$('#js-hide-alert').click(() => {
    $('#js-alert').hide(); //cacher
});

// Utilisez les méthodes slideUp, slideDown ou slideToggle pour afficher/cacher la bannière .js-slide-example-links sous le paragraphe #js-slide-example-1 si celui-ci est cliqué.

// SLIDE

// $('#js-slide-example-address').click(() => {
//     $('#js-slide-example-links').slideToggle();
// })

// FADE Utilisez les méthodes fadeIn, fadeOut, FadeToggle et le principe de callback.

// $('#js-slide-example-address').click(() => {
//     $('#js-slide-example-links').fadeToggle();
// })

// Au clique sur le bouton avec l'id js-btn-fade-in faites apparaître le div avec l'animation fondu (fade in). Au clique sur le bouton avec l'id js-btn-fade-out faites disparaître le div avec l'animation fondu (fade out).

$('#js-btn-fade-in').click(() => {
    $('#js-div-fade-in-out').fadeIn();
})


$('#js-btn-fade-out').click(() => {
         $('#js-div-fade-in-out').fadeOut();
     })

// ANIMATE

$('#js-animation-1')
.delay(3000)
.animate({
    left : '300px',
    width : '200px'
}, 700)
.animate({
    height: '400px'
});