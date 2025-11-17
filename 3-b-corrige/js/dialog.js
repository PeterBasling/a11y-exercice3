"use strict";

	var btnClose = document.getElementById( 'btn-close-modal' );
	var underDialog = document.getElementById( 'screen' );
	var block = document.getElementById( 'modal-content' );
	var btnOpen = document.getElementById( 'modal-btn' );
	var focusPrevious = focusPrev( block );

	btnOpen.addEventListener( 'click', function(){	
		block.classList.add( 'is-visible' );
		underDialog.setAttribute( 'aria-hidden', 'true' );
		//Exercice 4 : à l'ouverture de la modale, on force la reprise de focus sur btnClose (#btn-close-modal : le bouton de fermeture de la fenêtre modale)
		btnClose.focus();
		document.addEventListener( 'focus', focusIn, true );
		document.addEventListener( 'click', clikIn, true );
		document.addEventListener( 'keyup', function( event) {		
			var curEle = document.activeElement;
			if( curEle === block ){
				if( event.shiftKey && event.keyCode === 9 )	{ focusPrevious.focus(); }
				event.stopPropagation();
			}
		}, false);
		document.addEventListener( 'keydown', function( event) {
			if ( event.keyCode === 27) endFunction();
		}, false);
		btnClose.addEventListener( 'click', endFunction	, false );
	}, false );

	function focusPrev( dialogModal ){
		var elementActive = dialogModal.getElementsByTagName( '*' );
		for( var i = 0, len = elementActive.length; i < len; i++ ){
			if( elementActive[i].tabIndex >= '0' ){
				focusPrevious = elementActive[i];
			}
		};
		return focusPrevious;
	}

	function focusIn( event ) {
		if( !block.contains( event.target ) ) {
			block.focus();		
		}
	};

	function clikIn( event ){
		if( !block.contains( event.target ) ) {
			event.stopPropagation();
			event.preventDefault();
		}	
	};

	function endFunction(){		
		block.classList.remove( 'is-visible' );
		underDialog.removeAttribute( 'aria-hidden' );
		//Exercice 4 : à la fermeture de la modale, on force la reprise de focus sur btnOpen (#modal-btn : le bouton d'ouverture dans la page "La loi de Moore en 2 secondes")
		btnOpen.focus();
		document.removeEventListener( 'focus', focusIn, true );
		document.removeEventListener( 'click', clikIn, true );
	};