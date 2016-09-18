$(document).ready(function() {
$('#toggleButton').click( function() {
  $('#content').toggle('5000');
  $('#footer').toggle('5000', function(){
	if ($('#content').is(':visible')) {
	 $('#toggleButton').val('Admire Photo')
	} else {
		$('#toggleButton').val('See Resume')
	  }
    });
  });
});
