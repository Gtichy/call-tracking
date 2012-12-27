<?php
   
	$num = 0;
	
	if (isset($_GET['callsource']) && $_GET['callsource'] != "") {

		$num = $_GET['callsource'];
	
	}
	
	
	header("content-type: text/xml");
	echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
	

	
	
?>


<Response>
	<Dial record="true" action="http://****/calls/handler.php?callsource=<?php echo($num); ?>">INSERT CALL NUMBER HERE</Dial>
</Response>

