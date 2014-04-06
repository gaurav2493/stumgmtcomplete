
/* JavaScript content from serverside.js in folder common */
function callme()
{
	document.getElementById("loadImg").width="20";
	document.getElementById("loadImg").height="20";
	var rollno=document.getElementById("id").value;
	alert(rollno);
	
	$("#id").change(function(){
		$.ajax({url:"http://120.59.131.40:9080/serverApp/ajax/getrollno?start=11&count=10",success:function(result){
			//$("#div1").html(result);
			
			alert(result);
			
			
 }});
});

	if(rollno==1109113019)
	{
		document.getElementById("loadImg").src="images/tick.png";
	}
	else
	{
		document.getElementById("loadImg").src="images/cross.png";
	}
}