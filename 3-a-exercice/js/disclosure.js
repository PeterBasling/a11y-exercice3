/**Toggle button*/

'use strict';

var toggleBtn = document.getElementsByClassName('onoff');

function showhide(){

	for (var i=0;i<toggleBtn.length;i++){
		var container = toggleBtn[i].querySelector("div");
		container.classList.add("is-closed");
			var btntoggle = toggleBtn[i].querySelector("button");

			btntoggle.onclick = function(){
				if((this.getAttribute('aria-expanded'))=='true'){
					this.parentNode.classList.toggle('is-active');
				}else{
					this.parentNode.classList.toggle('is-active');
				}
				
				for (var i=0;i<toggleBtn.length;i++){
					if(this.parentNode!=toggleBtn[i]){
						toggleBtn[i].querySelector("div").classList.add("is-closed");
						toggleBtn[i].classList.remove("is-active");
					}
				}
				
				this.nextElementSibling.classList.toggle("is-closed");
		};

	}
};

showhide();
