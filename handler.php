<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Untitled Document</title>
</head>

<body>



<?php


 $callsrc = $_GET['callsource'];
  $phone_num = $_POST[Caller];   
  $url = "/calls/" . $callsrc ."/" . $phone_num;
  $title = "Call From " . $callsrc;
  
 include('Galvanize.php');
 //replace the XXX with your Google Analytics Account Number
 $GA = new Galvanize('GOOGLE ANALYTICS ACCOUNT HERE');
 $GA->trackPageView($url,$title);
   
  
//replace with your email address
$to = "EMAILS YOU WOULD LIKE";
$subject = "CLIENT NAME: Call Received From " . strtoupper($callsrc) . " Search.";
$body = "Congrats, the audio recording of the call is available at\n\n$_POST[RecordingUrl]\n\n***Caller Information***\nCity: $_POST[FromCity]\nState: $_POST[CallerState]\nPhone: $_POST[Caller]\nCall Duration: $_POST[DialCallDuration] (seconds)";

if (mail($to, $subject, $body)) {
  echo("<p>Message successfully sent!</p>");
 } else {
  echo("<p>Message delivery failed...</p>");
 }



?>





</body>
</html>
