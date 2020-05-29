
	function contentCount(){
		var textinput = document.getElementById('textinput').value;
		document.getElementById('count').innerHTML = "Characters left: " + (textinput.length + " / 2000");
		if (textinput.length >= 2001) {
			$("#confirmation-modal").modal();
			document.getElementById("errorTxt").innerHTML = "Content allow upto 2000 Characters. Please Try Again...";
			return false;
		}
	}
	function textClear(){
		location.reload();
	}
function sendBtn(){
	document.getElementsByClassName('output-session')[0].style.display='block';
	document.getElementsByClassName('input-text')[0].style.display='none';
	document.getElementsByClassName('edit-text')[0].style.display='block';

}