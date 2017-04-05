$(function(){
	$('#btnUpldImg').click(function(){
	console.log("Entering AJAX Request");	
		$.ajax({
			url: '/uploadImage',
			data: $('form').serialize(),
			type: 'POST',
			success: function(response){
				console.log(response);
			},
			error: function(error){
				console.log(error);
			}
		});
	});
});
