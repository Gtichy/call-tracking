/*
Last Updated: 11/7/2012
By: Garrett Tichy
*/

//google ORGANIC phone number
var gorganicnum = '';

//yahoo ORGANIC phone number
var yorganicnum = '';

//bing ORGANIC phone number
var borganicnum = '';

//google PPC phone number
var gppcnum = '';

//yahoo PPC phone number
var yppcnum = '';

//bing PPC phone number
var bppcnum = '';

//referral phone number
var refnum = '';

//your 'real' phone number
var defaultNum = '';

//list of your 'branded' search terms separated by commas only
var brandedTerms = 'positivekwplaceholderDontDeleteThis';

//name of the class containing your phone number in your HTML
var phoneClassName = 'calltrack';

//create an array out of the branded terms list
var brandedTermsArray = brandedTerms.split(',');

//Read Cookie Function
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

// Get the __utmz cookie value. This is the cookies that 
// stores all campaign information. 

var utmz = readCookie('__utmz'); //using the cookie reading function
var vals = (function() {

        var pairs = utmz.split('.').slice(4).join('.').split('|');
        var ga = {};
        for (var i = 0; i < pairs.length; i++) {
            var temp = pairs[i].split('=');
                ga[temp[0]] = temp[1];
        }
        return ga;
    })();// 


var source  = vals.utmcsr; 
var medium  = vals.utmcmd;
var term    = vals.utmctr; 
var content = vals.utmcct; 
var campaign = vals.utmccn; 
var gclid   = vals.utmgclid; 

// 
// The gclid is ONLY present when auto tagging has been enabled. 
// All other variables, except the term variable, will be '(not set)'. 
// Because the gclid is only present for Google AdWords we can 
// populate some other variables that would normally 
// be left blank. 
// 
if (gclid !="-") { 
      source = 'google'; 
      medium = 'cpc'; 
} 

function isNotBrandedTerm(){

	for (i=0;i<brandedTermsArray.length;i++)
	{
		if (term.toLowerCase().indexOf(brandedTermsArray[i]) != -1){ // Made case insensitive
		//if(term == brandedTermsArray[i]){
			return false;
		}
	} 
	
	return true;
}

//return the proper phone number based on the rules
function getPhoneNumber(){
	
	if(source == 'google' && (medium == "organic" || medium =="localpack")){
		return gorganicnum;
	} else if(source == 'yahoo' && medium == "organic"){
		return yorganicnum;
	} else if(source == 'bing' && medium == "organic"){
		return borganicnum;
	} else if(source == 'google' && medium == "cpc"){
		return gppcnum;
	} else if(source == 'yahoo' && medium == "cpc"){
		return yppcnum;
	} else if(source == 'bing' && medium == "cpc"){
		return bppcnum;
	} else if(medium == "referral"){
		return refnum;
	} else {
		return defaultNum;
	}

}

function displayTextNumber(){
	
	if(isNotBrandedTerm()){
		var NumberSpans = document.getElementsByTagName('span');
		for(var i=0; i < NumberSpans.length; i++) {
				if(NumberSpans[i].className== phoneClassName) {
						NumberSpans[i].innerHTML=getPhoneNumber();
				}//CLOSE IF
		} //CLOSE FOR
	}//close isNotBrandedTerm

}//CLOSE FUNCTION
	
	
