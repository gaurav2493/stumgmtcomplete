
/* JavaScript content from js/viewfiles.js in folder common */
var clickf=0;
pageIdf=1;


$(document).on("pageshow","#page6",function()
{
	var script=document.createElement('script');
	script.src=viewfileurl;
	document.getElementsByTagName('head')[0].appendChild(script);
	
});

function viewFiles(view_files_data)
{
	var jsonObject_files=view_files_data;
	vf_obj = JSON.parse(jsonObject_files);
	
	if(clickf==0)
	{
		for(i=0;i<((vf_obj.viewnotice1.length)-1);i++)
		{
		
			if(vf_obj.viewnotice1[i].attachment=='true')
			{
				$('.listview_viewfiles').append('<li><a href="#page5_single_notice" data-transition="slide" onclick="viewNoticeID('+vf_obj.viewnotice1[i].notice_id+')"><font size="4" color="#FFA500">'+vf_obj.viewnotice1[i].subject+'</font>&nbsp;&nbsp;<span class="glyphicon glyphicon-paperclip"></span></br><font size="2" color="#3CB371">'+vf_obj.viewnotice1[i].timestamp+'</font></br><font size="2" color="#00CED1"><b>Posted By: </b>'+vf_obj.viewnotice1[i].author+'</font></a></li>');
				$('.listview_viewfiles').listview('refresh');
			}
			/*
			else
			{
				$('.listview_viewfiles').append('<li><a href="#page5_single_notice" data-transition="slide" ><font size="4" color="#FFA500">'+vf_obj.viewnotice1[i].subject+'</font></br><font size="2" color="#3CB371">'+vf_obj.viewnotice1[i].timestamp+'</font></br><font size="2" color="#00CED1"><b>Posted By: </b>'+vf_obj.viewnotice1[i].author+'</font></a></li>');
				$('.listview_viewfiles').listview('refresh');
			}*/
		}
		clickf++;
		//window.location.href = '#page5';listview_viewfiles
	}
	else
	{
		$(".listview_viewfiles").empty();
		for(i=0;i<((vf_obj.viewnotice1.length)-1);i++)
		{
		
			if(vf_obj.viewnotice1[i].attachment=='true')
			{
				//<span class="glyphicon glyphicon-paperclip"></span>
				$('.listview_viewfiles').append('<li><a href="#page5_single_notice" data-transition="slide" onclick="viewNoticeID('+vf_obj.viewnotice1[i].notice_id+')"><font size="4" color="#FFA500">'+vf_obj.viewnotice1[i].subject+'</font>&nbsp;&nbsp;<span class="glyphicon glyphicon-paperclip"></span></br><font size="2" color="#3CB371">'+vf_obj.viewnotice1[i].timestamp+'</font></br><font size="2" color="#00CED1"><b>Posted By: </b>'+vf_obj.viewnotice1[i].author+'</font></a></li>');
				$('.listview_viewfiles').listview('refresh');
			}
			else
			{
				$('.listview_viewfiles').append('<li><a href="#page5_single_notice" data-transition="slide" onclick="viewNoticeID('+vf_obj.viewnotice1[i].notice_id+')"><font size="4" color="#FFA500">'+vf_obj.viewnotice1[i].subject+'</font></br><font size="2" color="#3CB371">'+vf_obj.viewnotice1[i].timestamp+'</font></br><font size="2" color="#00CED1"><b>Posted By: </b>'+vf_obj.viewnotice1[i].author+'</font></a></li>');
				$('.listview_viewfiles').listview('refresh');
			}
		}
	}
	
}

function showMore()
{
	pageIdf++;
	var script=document.createElement('script');
	//pageno=1&callback=showMoreNotice
	script.src=showmorebuttonurl+'pageno='+ pageIdf+'&callback=viewNotice';
	document.getElementsByTagName('head')[0].appendChild(script);
	
	//alert("hello");
}
/*
function showMoreNotice(showmoredata)
{
	
}
*/
