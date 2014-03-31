var click=0;
pageId=1;
var noticeID=9;


$(document).on("pageshow","#page5",function()
{
	var script=document.createElement('script');
	script.src=viewnoticeurl;
	document.getElementsByTagName('head')[0].appendChild(script);
	
});

function viewNotice(view_notice_data)
{
	var jsonObject_viewnotice=view_notice_data;
	vn_obj = JSON.parse(jsonObject_viewnotice);
	
	if(click==0)
	{
		for(i=0;i<((vn_obj.viewnotice1.length)-1);i++)
		{
		
			if(vn_obj.viewnotice1[i].attachment=='true')
			{
				$('.listview_viewnotice').append('<li><a href="#page5_single_notice" data-transition="slide" onclick="viewNoticeID('+vn_obj.viewnotice1[i].notice_id+')"><font size="4" color="#FFA500">'+vn_obj.viewnotice1[i].subject+'</font>&nbsp;&nbsp;<span class="glyphicon glyphicon-paperclip"></span></br><font size="2" color="#3CB371">'+vn_obj.viewnotice1[i].timestamp+'</font></br><font size="2" color="#00CED1"><b>Posted By: </b>'+vn_obj.viewnotice1[i].author+'</font></a></li>');
				$('.listview_viewnotice').listview('refresh');
			}
			else
			{
				$('.listview_viewnotice').append('<li><a onclick="viewNoticeID('+vn_obj.viewnotice1[i].notice_id+')" href="#page5_single_notice" data-transition="slide" ><font size="4" color="#FFA500">'+vn_obj.viewnotice1[i].subject+'</font></br><font size="2" color="#3CB371">'+vn_obj.viewnotice1[i].timestamp+'</font></br><font size="2" color="#00CED1"><b>Posted By: </b>'+vn_obj.viewnotice1[i].author+'</font></a></li>');
				$('.listview_viewnotice').listview('refresh');
			}
		}
		click++;
		//window.location.href = '#page5';
	}
	else
	{
		$(".listview_viewnotice").empty();
		for(i=0;i<((vn_obj.viewnotice1.length)-1);i++)
		{
		
			if(vn_obj.viewnotice1[i].attachment=='true')
			{
				
				$('.listview_viewnotice').append('<li><a onclick="viewNoticeID('+vn_obj.viewnotice1[i].notice_id+')" href="#page5_single_notice" data-transition="slide" ><font size="4" color="#FFA500">'+vn_obj.viewnotice1[i].subject+'</font>&nbsp;&nbsp;<span class="glyphicon glyphicon-paperclip"></span></br><font size="2" color="#3CB371">'+vn_obj.viewnotice1[i].timestamp+'</font></br><font size="2" color="#00CED1"><b>Posted By: </b>'+vn_obj.viewnotice1[i].author+'</font></a></li>');
				$('.listview_viewnotice').listview('refresh');
			}
			else
			{
				$('.listview_viewnotice').append('<li><a onclick="viewNoticeID('+vn_obj.viewnotice1[i].notice_id+')" href="#page5_single_notice" data-transition="slide" ><font size="4" color="#FFA500">'+vn_obj.viewnotice1[i].subject+'</font></br><font size="2" color="#3CB371">'+vn_obj.viewnotice1[i].timestamp+'</font></br><font size="2" color="#00CED1"><b>Posted By: </b>'+vn_obj.viewnotice1[i].author+'</font></a></li>');
				$('.listview_viewnotice').listview('refresh');
			}
		}
	}
	
}

function showMore()
{
	pageId++;
	var script=document.createElement('script');
	//pageno=1&callback=showMoreNotice
	script.src=showmorebuttonurl+'pageno='+ pageId+'&callback=viewNotice';
	document.getElementsByTagName('head')[0].appendChild(script);
	
	//alert("hello");
}

function viewNoticeID(notice_number)
{
	noticeID=notice_number;
}
