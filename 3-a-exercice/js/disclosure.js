/**Toggle button*/

'use strict';

var toggleBtn = document.getElementsByClassName('onoff');

function showhide(){

	for (var i=0;i<toggleBtn.length;i++){
		var mydiv = toggleBtn[i].querySelector("div");
		mydiv.classList.add("is-closed");
			var btntoggle = toggleBtn[i].querySelector("button");
			// Exercice 4 : on force l'ajout de la propriété aria-expanded avec la valeur false au chargement de la page
			btntoggle.setAttribute('aria-expanded','false');

			// Exercice 4 : changement dynamique de la valeur false/true au clic
			btntoggle.onclick = function(){
				if((this.getAttribute('aria-expanded'))=='true'){
					this.setAttribute('aria-expanded','false');
					this.parentNode.classList.toggle('is-active');
				}else{
					this.setAttribute('aria-expanded','true');
					this.parentNode.classList.toggle('is-active');
				}

				// Exercice 4 : changement dynamique de la visibilité du contenu associé au clic
				for (var i=0;i<toggleBtn.length;i++){
					if(this.parentNode!=toggleBtn[i]){
						toggleBtn[i].querySelector("div").classList.add("is-closed");
						toggleBtn[i].querySelector("button").setAttribute('aria-expanded','false');
						toggleBtn[i].classList.remove("is-active");
					}
				}
				
				this.nextElementSibling.classList.toggle("is-closed");
		};

	}
};

showhide();
