
/* JavaScript content from js/viewsinglenotice.js in folder common */
var click2=0;
$(document).on("pageshow","#page5_single_notice",function()	//add viewsinglefile page id here in viewsiglefile page
{
	//alert(noticeID)
	var script = document.createElement('script');
	script.src = viewsinglenoticeurl + noticeID;
	document.getElementsByTagName('head')[0].appendChild(script);
	
	
	
	
});

function view_single_notice(single_notice_data)
{
	
	var single_notice_jsonObject=single_notice_data;
	sn_obj = JSON.parse(single_notice_jsonObject);
	
	for(i=0;i<((sn_obj.viewnotice2.length));i++)
	{
		document.getElementById("single_notice").innerHTML= '<font size="4" color="#FFA500">'+sn_obj.viewnotice2[i].subject+'</font></br></br>'+  sn_obj.viewnotice2[i].notice+'</br>';
			if(sn_obj.viewnotice2[i].attachment=='true')
			{
				for(j=0;j<((sn_obj.viewnotice2[i].fileurl.length)-1);j++)
				{
					document.getElementById("single_notice").innerHTML +='<a href="'+serverAddress+sn_obj.viewnotice2[i].fileurl[j].url+'"><br/><font size="2" color="#00008B">'+sn_obj.viewnotice2[i].fileurl[j].filename+'</font></a><br/><br/>';
				}
			}
			
			document.getElementById("single_notice").innerHTML +='<font size="2" color="#3CB371">'+sn_obj.viewnotice2[i].timestamp+'</font></br><b><font size="2" color="#00CED1">Posted By: '+sn_obj.viewnotice2[i].author+'</font></b>';
	}
	
	
}



