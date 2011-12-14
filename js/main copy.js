function jumpToMap(areamapa){
	
	switch(areamapa){
		//Fishing
		case 'fishing':
				$('#contenido').html('<div id="loader"><img src="images/icon_fishing.png" border="0"/></div>');
				$('#worldmap').animate(
					{
					marginLeft:'0px',
					marginTop:'0px'
					},1500,
					function(){
						$('#contenido').load('area6.html?v=0.0.0.1');
					}
				);
				$.query.set('p','fishing');
		break;
		//Harmony
		case 'harmony':
				$('#contenido').html('<div id="loader"><img src="images/icon_harmony.png" border="0"/></div>');
				$('#worldmap').animate(
					{
					marginLeft:'-1560px',
					marginTop:'0px'
					},1500,
					function(){
						$('#contenido').load('area8.html?v=0.0.0.1');
					}
				);
		break;
		//Mall
		case 'mall':
				$('#contenido').html('<div id="loader"><img src="images/icon_mall.png" border="0"/></div>');
				$('#worldmap').animate(
					{
					marginLeft:'-3120px',
					marginTop:'0px'
					},1500,
					function(){
						$('#contenido').load('area9.html?v=0.0.0.1');
					}
				);
		break;
		//Predicadores
		case 'preachers':
				$('#contenido').html('<div id="loader"><img src="images/icon_inscripciones.png" border="0"/></div>');
				$('#worldmap').animate(
					{
					marginLeft:'0px',
					marginTop:'-1560px'
					},1500,
					function(){
						$('#contenido').load('area5.html');
					}
				);
		break;
		//HOME
		case 'home':
				$('#contenido').html('<div id="loader"><img src="images/loader.gif" border="0"/></div>');
				$('#worldmap').animate(
					{
					marginLeft:'-1560px',
					marginTop:'-1560px'
					},1500,
					function(){
						$('#contenido').load('area1.html');
					}
				);
		break;
		//Inscripciones
		case 'tickets':
				$('#contenido').html('<div id="loader"><img src="images/icon_predicadores.png" border="0"/></div>');
				$('#worldmap').animate(
					{
					marginLeft:'-3120px',
					marginTop:'-1560px'
					},1500,
					function(){
						$('#contenido').load('area7.html');
					}
				);
		break;
		//Summer
		case 'summer':
				$('#contenido').html('<div id="loader"><img src="images/icon_summer.png" border="0"/></div>');
				$('#worldmap').animate(
					{
					marginLeft:'-0px',
					marginTop:'-3120px'
					},1500,
					function(){
						$('#contenido').load('area2.html');
					}
				);
		break;
		//Xtreme
		case 'xtreme':
				$('#contenido').html('<div id="loader"><img src="images/icon_xtreme.png" border="0"/></div>');
				$('#worldmap').animate(
					{
					marginLeft:'-1560px',
					marginTop:'-3120px'
					},1500,
					function(){
						$('#contenido').load('area3.html');
					}
				);
		break;
		//Snow
		case 'snow':
				$('#contenido').html('<div id="loader"><img src="images/icon_snow.png" border="0"/></div>');
				$('#worldmap').animate(
					{
					marginLeft:'-3120px',
					marginTop:'-3120px'
					},1500,
					function(){
						$('#contenido').load('area4.html');
					}
				);
		break;
		//HOME	
		default:
				$('#contenido').html('<div id="loader"><img src="images/loader.gif" border="0"/></div>');
				$('#worldmap').animate(
					{
					marginLeft:'-1560px',
					marginTop:'-1560px'
					},1500,
					function(){
						$('#contenido').load('area1.html');
					}
				);
		break;
	}
}

$(function(){
// ********************************************************
// CUENTA REGRESIVA
// ********************************************************			
	$('#cuentaregresiva').countdown({until: new Date(2011, 6 - 1, 2)});

// ********************************************************
// BOTONES PARA MENU DESPLEGABLE
// ********************************************************			
	//Fishing
	$('#mapaarea1').click(function(){ jumpToMap('fishing'); });
	//Harmony
	$('#mapaarea2').click(function(){ jumpToMap('harmony'); });
	//Mall
	$('#mapaarea3').click(function(){ jumpToMap('mall'); });
	//Predicadores
	$('#mapaarea4').click(function(){ jumpToMap('preachers'); });
	//HOME
	$('#mapaarea5').click(function(){ jumpToMap('home'); });
	//Inscripciones
	$('#mapaarea6').click(function(){ jumpToMap('tickets'); });
	//Summer
	$('#mapaarea7').click(function(){ jumpToMap('summer'); });
	//Xtreme
	$('#mapaarea8').click(function(){ jumpToMap('xtreme'); });
	//Snow
	$('#mapaarea9').click(function(){ jumpToMap('snow'); });

// ********************************************************
// CLICK DEL LOGO, ESTO REGRESA AL PUNTO CENTRAL
// ********************************************************			
	$('#home').click(function(){
		jumpToMap('home');
	});

// ********************************************************
// BOTON PARA DESPLEGAR EL MINIMAPA
// ********************************************************			
	$('#mapa').click(function(){
		$('#mapasitio').animate({
			top: '21px'
		},1000);
	});

	$('#cerrarmapa').click(function(){
		$('#mapasitio').animate({
			top: '-501px'
		},1000);
	});


	$('#facebookopen').click(function(){
		$('#fbsocial').animate({
			top: '35px'
		},1000);
	});
	$('#fbcerrarlink').click(function(){
		$('#fbsocial').animate({
			top: '-620px'
		},1000);
	});
	
});