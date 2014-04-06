var click3=0;

$(document).on("pageshow","#page8",function()
{

	

	var examschedule = [ 
					{ "exam_id": "1","exam_name":"second sessional schedule","timestamp":"12:00","postedby":"ankir chaurasia","file_url":"http://www.w3.org/2011/web-apps-ws/papers/Nitobi.pdf"  },
					{ "exam_id": "2","exam_name":"Third sessional schedule","timestamp":"12:00","postedby":"ankir chaurasia" ,"file_url":"http://www.w3.org/2011/web-apps-ws/papers/Nitobi.pdf" },
					{ "exam_id": "3","exam_name":"PUT schedule","timestamp":"12:00","postedby":"ankir chaurasia","file_url":"http://www.w3.org/2011/web-apps-ws/papers/Nitobi.pdf"}
					 ];
	
	if(click3==0)
	{
		for(i=0;i<examschedule.length;i++)
		{
		
			$('.listview_examschedule').append('<li><a href="'+examschedule[i].file_url+'" target="_blank" data-transition="slide" id="exam_id"><font size="4" color="#FFA500">'+examschedule[i].exam_name+'</font></br><font size="2" color="#3CB371">'+examschedule[i].timestamp+'</font></br><font size="2" color="#00CED1"><b>Posted By: </b>'+examschedule[i].postedby+'</font></a></li>');
			$('.listview_examschedule').listview('refresh');
		}
		click3++;
	}
	else
	{
		$(".listview_viewnotice").empty();
		for(i=0;i<examschedule.length;i++)
		{
		
			$('.listview_examschedule').append('<li><a href="http://www.w3.org/2011/web-apps-ws/papers/Nitobi.pdf" target="_blank" data-transition="slide" id="exam_id"><font size="4" color="#FFA500">'+examschedule[i].exam_name+'</font></br><font size="2" color="#3CB371">'+examschedule[i].timestamp+'</font></br><font size="2" color="#00CED1"><b>Posted By: </b>'+examschedule[i].postedby+'</font></a></li>');
			$('.listview_examschedule').listview('refresh');
		}
	}

});

$('a#exam_id').attr({target: '_blank', 
                    href  : 'http://www.w3.org/2011/web-apps-ws/papers/Nitobi.pdf'});

