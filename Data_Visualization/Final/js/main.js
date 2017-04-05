jQuery(function(){
    // initialize of labels
    $('.labels a#label1').fadeIn(100).effect('bounce', { times:3 }, 300, function() {
        $('.labels a#label2').fadeIn(100).effect('bounce', { times:3 }, 300, function() {
            $('.labels a#label3').fadeIn(100).effect('bounce', { times:3 }, 300, function() {
                $('.labels a#label4').fadeIn(100).effect('bounce', { times:3 }, 300, function() {
                    $('.labels a#label5').fadeIn(100).effect('bounce', { times:3 }, 300, function() {
                        $('.labels a#label6').fadeIn(100).effect('bounce', { times:3 }, 300);
                    });
                });
            });
        });
    });

    // description close
    $('.close').click(function() {
        $(this).parent().fadeOut(500);
        return false;
    });
    // display description on click by labels
    $('.labels a').click(function() {
		var id="#"+ $(this).find('p').html();
        $('.description').fadeIn(500);
		$(id).show("slow");
		
		
        return false;
    });

    // close dialog on click outside
    $('.close').click(function() {
		var name_list=["#label_1","#label_2","#label_3","#label_4","#label_5"];
		var i;
		for(i=0;i<name_list.length;i++)
		{
			$(name_list[i]).css({'display':'none'}); ;
		}
        $('.description').fadeOut(500);
    });
	});
	
	
	
	
	
