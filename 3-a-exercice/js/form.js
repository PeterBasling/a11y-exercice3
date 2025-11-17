"use strict";

	var sendBtn = document.getElementById( 'sendBtn' );
	var form = document.getElementById( 'form' );
	var errormsg;
	
	sendBtn.addEventListener( 'click', function( event ) {
	
		var nom = document.querySelector( '[name=\'user-name\']' ) ;
		var email = document.querySelector( '[name=\'user-email\']' ) ;		
		var successmessage = document.getElementById( 'msg-ok');	
		var arrayInput = [nom, email];
		deleteErrors();

		if( !nom.value || !isEmail( email.value) ){

			var msg = 'Ce champ est obligatoire';
			if( !nom.value ){
				errormsg = nom;
				errors( nom, 'error-nom', msg );
			}
			else if( nom.value ){
				var node = document.getElementById('error-nom');
				if( node ) {
					errormsg = '';
					node.parentNode.removeChild( node );}
					
			}
			if( !isEmail( email.value) ){
				if( !errormsg ) errormsg = email;
				var node = document.getElementById('error-email');
				if( node ) {
					node.parentNode.removeChild( node );}

				if( email.value ) {
					errors( email, 'error-email', 'Saisissez un email valide' );
				}
				else{
					errors( email, 'error-email', msg );
				}
				errormsg.focus();
			}
		}
		else{
			var success = document.createElement( 'p' );
			var successText = document.createTextNode( 'Votre vote a été envoyé ! Merci pour votre temps.' );
			success.appendChild( successText );
			success.setAttribute( 'class','send-ok' );
			success.classList.add('a42-bgcolor-c5');
			success.setAttribute( 'id','p-msg-ok' );
			successmessage.appendChild( success );
			form.remove();
			nom.value = '';
			email.value = '';
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
			obj.classList.add('required');
		}	
		
		// 
		function deleteErrors(){
			for( var i = 0, len = arrayInput.length; i < len; i++ ){
				var node = document.getElementById( 'error-'+arrayInput[i].getAttribute( 'id') );
				console.log(node);
				if( node ) {
					node.parentNode.removeChild( node );
				}
			}
			var node = document.getElementById( 'msg-success' );
			if( node ) node.parentNode.removeChild( node );
		}
		function isEmail( mail ){
			var regMail = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
			return regMail.test( mail );
		}
		event.preventDefault();
	}, false );
