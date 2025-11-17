"use strict";

	var sendBtn = document.getElementById( 'sendBtn' );
	var myForm = document.getElementById( 'myForm' );
	var errormsg;
	
	sendBtn.addEventListener( 'click', function( event ) {

		console.log( "formulaire");
		var nom = document.querySelector( '[name=\'user-name\']' ) || document.getElementById( 'nom' );
		var email = document.querySelector( '[name=\'user-email\']' ) || document.getElementById( 'email' );
		
		var successmessage = document.getElementById( 'msg-ok');
		
		var arrayInput = [nom, email];
		//Utilisé pour le remise à zéro des messages et les affichages sur focus
		//On efface les messages d'erreur : opération nécessaire car il n'y a pas de rechargement de page,  sinon lors des tests les messages s'accumulent.
		deleteErrors();

		if( !nom.value || !isEmail( email.value) ){
			var msg = 'Ce champ est obligatoire';
			if( !nom.value ){
				errormsg = nom;
				errors( nom, 'required-name', msg );
			}else if( nom.value ){
				var node = document.getElementById('required-name');
				if( node ) {
					node.parentNode.removeChild( node );
					errormsg = '';
				}
			}
			if( !isEmail( email.value) ){
				if( !errormsg ) errormsg = email;
				var node = document.getElementById('required-email');
				if( node ) {
					node.parentNode.removeChild( node );}
				if( email.value ) {
					//Exercice 3 : Modification du message d'erreur pour ajouter un exemple réel de saisie
					errors( email, 'required-email', 'Saisissez un email valide, par exemple jean@dupont.fr' );
				}
				else{
					errors( email, 'required-email', msg );
				}
				errormsg.focus();
			}
		}
		//Envois avec succès
		else{
			var success = document.createElement( 'p' );
			var successText = document.createTextNode( 'Votre vote a été envoyé ! Merci pour votre temps.' );
			success.appendChild( successText );
			success.setAttribute( 'class','success' );
			success.classList.add('a42-bgcolor-c5');
			//Exercice 4 : pour que la reprise de focus sur le message de succès définie ci-après soit fonctionnelle, on ajoute la propriété tabindex="-1" au conteneur cible
			success.setAttribute( 'tabindex','-1' );
			success.setAttribute( 'role','alert' );
			success.setAttribute( 'id','msg-success' );
			successmessage.appendChild( success );
			myForm.remove();
			//reset
			nom.value = '';
			email.value = '';
			//Exercice 4 : reprise de focus sur le message de succès lorsque le formulaire est envoyé avec succès
			success.focus();
		}
		function errors( obj, label, text ){
			var text = document.createTextNode( text );
			var required = document.createElement( 'span' );
			var span = document.createElement( 'span' );			
			var parent = obj.parentNode;
			required.appendChild( span );
			span.appendChild( text );
			required.classList.add('required' );
			required.classList.add('a42-error-msg' );
			parent.insertBefore( required, obj );
			required.setAttribute( 'id', label );
			obj.classList.add('required' );
			//Exercice 4 : Ajout d'une propriété aria-describedby aux champs qui affichent des erreurs
			obj.setAttribute( 'aria-describedby', label );
		}	
		
		// 
		function deleteErrors(){
			for( var i = 0, len = arrayInput.length; i < len; i++ ){
				var node = document.getElementById( arrayInput[i].getAttribute( 'aria-describedby' ) );
				if( node ) {
					node.parentNode.removeChild( node );
				}
			}
			//reset
			nom.removeAttribute('aria-required');
			nom.classList.remove('required');
			email.removeAttribute('aria-required');
			email.classList.remove('required');
			//efface le message de succès
			var node = document.getElementById( 'msg-success' );
			if( node ) node.parentNode.removeChild( node );
		}
		// vérification de l'adresse email
		function isEmail( mail ){
			var regMail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
			return regMail.test( mail );
		}
		event.preventDefault();
	}, false );
