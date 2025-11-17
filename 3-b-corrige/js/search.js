/**Affichage des résultats de recerche**/

'use strict';

var btnsearch = document.getElementById('btn-search');
var resultssearch = document.getElementById('results-search');
var resultssearchtotal = document.getElementById('results-search-total');


var textbox = document.createElement('p');

btnsearch.addEventListener( 'click', function(){
	
	if(document.getElementById('ulcontainer')){
		document.getElementById('ulcontainer').remove();
	}

	var nbresults = Math.round(Math.random() * 10);

	textbox.textContent = nbresults + " résultats trouvés";

	var ulcontainer = document.createElement('ol');
	ulcontainer.setAttribute('id','ulcontainer');

	for ( var i = 0; i < nbresults; i++ ) {
      
      var listitem = document.createElement('li');
      listitem.textContent = Math.random().toString(36).substring(7)+' ' ;
      ulcontainer.appendChild(listitem);
   }

	resultssearchtotal.appendChild(textbox);
	resultssearch.appendChild(ulcontainer);

}, false );

