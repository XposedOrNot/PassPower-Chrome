var XON_PASSPOWER_CHECK_URI = "https://www.xposedornot.com/api/v1/pass/anon/";

/*
  All password input fields will be making use of this function to check for feedback.
 */
function checkPass() {
  var inputs = document.getElementsByTagName("input");

  for (var i = 0; i < inputs.length; i++) {
	if (inputs[i].type =="password")
		{	
          inputs[i].addEventListener("change", protectPasswordInput);
       }
	}

}

/*
 Securely hash the password prior to checking 
*/
function getPassHash(password) {
	return (keccak_512(password)).slice(0, 10) ; 
}

function protectPasswordInput(event) {
  var inputValue = event.currentTarget.value;
  var hash = getPassHash(inputValue);
  var hashPrefix = hash.slice(0, 10);
  var shortHash = hash.slice(10);
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
      var resp = xmlHttp.responseText.split("\n");
      for (var i = 0; i < resp.length; i++) {
        var data = resp[i].split(":");
		if (data[0].indexOf(shortHash) === 0) {
			msg = "The password you just entered has been found in previously exposed data breach(s). \n\n It is highly recommended to change this password and avoid using this for any of your accounts or transactions.\n\n" ;
			swal("Password Alert!", msg, "error", 
		{
			dangerMode: true	  
		},
		);	
		}
      }
    }
  };
  xmlHttp.open("GET", XON_PASSPOWER_CHECK_URI + hashPrefix, true);
  xmlHttp.send(null);
}

if (window.attachEvent) 
{
	window.attachEvent("onload", checkPass);
} 
else 
{
	if (window.onload) {
		var currentOnLoad = window.onload;
		var newOnLoad = function(event) {
		currentOnLoad(event);
		checkPass(event);
};
    window.onload = newOnLoad;
  } else {
    window.onload = checkPass;
  }
}