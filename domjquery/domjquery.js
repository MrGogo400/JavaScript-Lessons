'use strict';

// Utilisez les méthodes text, html, val, attr pour travailler avec le HTML suivant.



// Récupérez et logguez dans la console le contenu du titre de la page.

const h1text = $('h1').text();
console.log('')

// Changez le contenu du titre de la page à 'My page title'.



// Récupérez et logguez dans la console le HTML de l'article.

const articleHTML = $('#js-article').html();

// Changer le contenue de l'article

$('#js-article').html(<h2>This is my article.</h2>
<p>This is my article's content.</p>


const inputValue = $('#js-search').val();

// Récupérez et logguez dans la console la valeur du champ de saisie avec l'id js-search.

// Changez la valeur du champ de saisie à 'Beagles'

// Récupérez et logguez dans la console la valeur du placeholder du champ de saisie.

// Changez la valeur du placeholder du champ de saisie à 'Search'