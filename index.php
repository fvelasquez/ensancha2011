<html>
	<head>
		<title>Ensancha :: 2011</title>
		<!--[if !IE]><!-->
			<link href="css/default.css" rel="stylesheet" type="text/css" />
		<![endif]-->
		<!--[if gt IE 6]>
			<link href="css/ie.css" rel="stylesheet" type="text/css" />
		<![endif]-->
		<link href="js/jquery.countdown.css" rel="stylesheet" type="text/css" />
		<script src="js/jquery-1.5.2.min.js"></script>
		<script src="js/jquery.query-2.1.7.js"></script>
		<script src="js/jquery-animate-css-rotate-scale.js"></script>
		<script src="js/jquery-css-transform.js"></script>
		<script src="js/jquery.countdown.pack.js"></script>
		<script src="js/jquery.countdown-es.js"></script>
		<script src="js/main.js"></script>
		<?php
			$p = $_GET['p'];
			switch($p){
				case 'fishing':
					echo "<script>$(function(){ jumpToMap('fishing'); });</script>";
				break;
				case 'harmony':
					echo "<script>$(function(){ jumpToMap('harmony'); });</script>";
				break;
				case 'mall':
					echo "<script>$(function(){ jumpToMap('mall'); });</script>";
				break;
				case 'preachers':
					echo "<script>$(function(){ jumpToMap('preachers'); });</script>";
				break;
				case 'tickets':
					echo "<script>$(function(){ jumpToMap('tickets'); });</script>";
				break;
				case 'summer':
					echo "<script>$(function(){ jumpToMap('summer'); });</script>";
				break;
				case 'xtreme':
					echo "<script>$(function(){ jumpToMap('xtreme'); });</script>";
				break;
				case 'snow':
					echo "<script>$(function(){ jumpToMap('snow'); });</script>";
				break;
				default:
					echo "
				<script>
					$(function(){ 
					$('#worldmap').animate(
					{
					marginLeft:'-1560px',
					marginTop:'-1560px'
					},100,
					function(){
						$('#contenido').load('area1.html');
						}
					);
				});
				</script>
					";
				break;
				
			}
		?>
	</head>
	<body>
		<div id="contenedor">
			<div id="mapasitio">
				<div id="mapabg">
					<span><a href="#" id="mapaarea1">&nbsp;</a></span>
					<span><a href="#" id="mapaarea2">&nbsp;</a></span>
					<span><a href="#" id="mapaarea3">&nbsp;</a></span><br><br>
					<span><a href="#" id="mapaarea4">&nbsp;</a></span>
					<span><a href="#" id="mapaarea5">&nbsp;</a></span>
					<span><a href="#" id="mapaarea6">&nbsp;</a></span><br><br>
					<span><a href="#" id="mapaarea7">&nbsp;</a></span>
					<span><a href="#" id="mapaarea8">&nbsp;</a></span>
					<span><a href="#" id="mapaarea9">&nbsp;</a></span>
				</div>
				<a href="#" id="cerrarmapa"><img src="images/map_cerrar_btn.png" border="0" /></a>
			</div>
			<div id="navbar">
				<div id="logo">
					<a href="#" id="home"><img src="images/nav_logo.png" alt="" border="0" /></a>
				</div>
				<div id="cuentaregresiva">00:00:00</div>
				<div id="facebook">
					<a href="#" id="facebookopen"><img src="images/facebook_icon.png" alt="Facebook" border="0" /></a>
					<iframe src="http://www.facebook.com/plugins/like.php?href=http%3A%2F%2Fensancha.org&amp;send=true&amp;layout=button_count&amp;width=400&amp;show_faces=true&amp;action=like&amp;colorscheme=light&amp;font=arial&amp;height=30" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:400px; height:30px;" allowTransparency="true"></iframe>
					<div id="fbsocial">
						<div id="fbcerrar"><a href="#" id="fbcerrarlink">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></div>
						<div id="fb-root"></div>
						<script src="http://connect.facebook.net/en_US/all.js#appId=110996608948893&amp;xfbml=1"></script>
						<fb:live-stream event_app_id="110996608948893" width="350" height="500" xid="" always_post_to_friends="false"></fb:live-stream>
					</div>
				</div>
				<div id="mapbtn"><a href="#" id="mapa"><img src="images/map_btn.png" alt="Mapa Mundial" border="0" /></a></div>
			</div>
			<div id="contenido"></div>
			<div id="worldmap"></div>
			<div id="footer"></div>			
		</div>
		

	</body>
</html>