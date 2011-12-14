$(function(){
	$('#punto5').hover(function(){
		$('#aguja').animate({rotate: '-45deg'}, 200);
	});
	$('#punto7').hover(function(){
		$('#aguja').animate({rotate: '0deg'}, 200);
	});
	$('#punto8').hover(function(){
		$('#aguja').animate({rotate: '45deg'}, 200);
	});
	
	$('#punto4').hover(function(){
		$('#aguja').animate({rotate: '-90deg'}, 200);
	});
	$('#punto6').hover(function(){
		$('#aguja').animate({rotate: '90deg'}, 200);
	});
	
	$('#punto1').hover(function(){
		$('#aguja').animate({rotate: '-135deg'}, 200);
	});
	$('#punto2').hover(function(){
		$('#aguja').animate({rotate: '180deg'}, 200);
	});
	$('#punto3').hover(function(){
		$('#aguja').animate({rotate: '135deg'}, 200);
	});
	
	/* ** ** ** */
	//Summer
	$('#punto1').click(function(){
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
	});
	//Xtreme
	$('#punto2').click(function(){
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
	});
	//Snow Mountain
	$('#punto3').click(function(){
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
	});
	//Predicadores
	$('#punto4').click(function(){
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
	});
	//Fishing
	$('#punto5').click(function(){
		$('#contenido').html('<div id="loader"><img src="images/icon_fishing.png" border="0"/></div>');
			$('#worldmap').animate(
			{
				marginLeft:'0px',
				marginTop:'0px'
			},1500,
			function(){
				$('#contenido').load('area6.html');
			}
		);
	});
	//Inscripciones
	$('#punto6').click(function(){
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
	});
	//Harmony
	$('#punto7').click(function(){
		$('#contenido').html('<div id="loader"><img src="images/icon_harmony.png" border="0"/></div>');
			$('#worldmap').animate(
			{
				marginLeft:'-1560px',
				marginTop:'0px'
			},1500,
			function(){
				$('#contenido').load('area8.html');
					}
			);
	});
	//Mall
	$('#punto8').click(function(){
		$('#contenido').html('<div id="loader"><img src="images/icon_mall.png" border="0"/></div>');
			$('#worldmap').animate(
			{
				marginLeft:'-3120px',
				marginTop:'0px'
			},1500,
			function(){
				$('#contenido').load('area9.html');
			}
			);
	});
});