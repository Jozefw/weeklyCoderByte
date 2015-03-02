function loadData() {

	var $body = $("body");
	var $greeting = $("#greeting");
	var streetStr = $("#street").val();
	var cityStr = $("#city").val();
	
	var address = streetStr + ", " + cityStr;
	var streetViewUrl = "https://maps.googleapis.com/maps/api/streetview?size=600x400&location=" + address + " ";
	
$greeting.text("So you want to live at " + address +'?');

$body.append('<img class="bgimg" src="'+streetViewUrl+'">');

};

$('#form-container').submit(loadData);