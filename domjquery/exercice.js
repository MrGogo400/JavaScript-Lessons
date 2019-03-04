'use strict';

$('#js-search-form')[0].addEventListener('submit', function(e) {
    e.preventDefault();

    let input = $('#js-search');

    if (input.val() == "Chat") {
        $('#js-search-result').text("Miaou !");
    } else {
        $('#js-search-result').html('<p>Pas de resultats pour la recherche : <strong>' + input.val() + '</strong></p>');
    }

});