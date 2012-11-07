<?php
   
	$num = 0;
	
	if (isset($_GET['callsource']) && $_GET['callsource'] != "") {

		$num = $_GET['callsource'];
	
	}
	
	
	header("content-type: text/xml");
	echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
	

	
	
?>


<Response>
	<Dial record="true" action="WEBSITE GOES HERE/calls/handler.php?callsource=<?php echo($num); ?>">PHONE NUMBER HERE</Dial>
</Response>

