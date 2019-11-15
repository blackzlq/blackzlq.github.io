$(function(){
	
	var note = $('#note'),
		ts = new Date(2019, 4, 13),
		newYear = true;
		
	$('#countdown').countdown({
		timestamp	: ts,
		callback	: function(days, hours, minutes, seconds){
			
			var message = "";
			message += "hanqi 心动后已经 ";
			message += days + " day" + ( days==1 ? '':'s' ) + ", ";
			message += hours + " hour" + ( hours==1 ? '':'s' ) + ", ";
			message += minutes + " minute" + ( minutes==1 ? '':'s' ) + " and ";
			message += seconds + " second" + ( seconds==1 ? '':'s' ) 
			message += " 没有take action了";
			message += " <br />";

			note.html(message);
		}
	});
	
});
