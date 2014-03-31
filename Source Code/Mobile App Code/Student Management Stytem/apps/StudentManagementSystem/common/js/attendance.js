
var count=0;

$(document).ready(function(){
  $("#option1").click(function(){
   alert("The pappu was clicked.");
   
   
  });
});

function takeYear()
{
	
	document.getElementById("loadImg").width="40";
	document.getElementById("loadImg").height="40";
	var a=document.getElementById("yearselect").value;
	var script = document.createElement('script');
	script.src = attendance+a;		
	document.getElementsByTagName('head')[0].appendChild(script);

}

function JSONRetrive(data)
{
	document.getElementById("myTable").style.visibility="visible";
	var jsonObject=data;
	obj = JSON.parse(jsonObject);
	document.getElementById("loadImg").width="";
	document.getElementById("loadImg").height="";
	var table = document.getElementById("myTable");
	if(count==0)
	{
		for(i=0;i<((obj.subject.length)-1);i++)
		{
			var row = table.insertRow(i+1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			cell1.innerHTML = obj.subject[i].name;
			cell2.innerHTML = obj.subject[i].total;
			cell3.innerHTML = obj.subject[i].count;
			cell4.innerHTML = Math.round((((obj.subject[i].count)/(obj.subject[i].total))*100)*100)/100+" %";
		}
		count++;
	}
	else
	{
		count++;
		for(i=(obj.subject.length);i>0;i--)
		{
			document.getElementById("myTable").deleteRow(i);
		}
		for(i=0;i<((obj.subject.length)-1);i++)
		{
			var row = table.insertRow(i+1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			cell1.innerHTML = obj.subject[i].name;
			cell2.innerHTML = obj.subject[i].total;
			cell3.innerHTML = obj.subject[i].count;
			cell4.innerHTML = Math.round((((obj.subject[i].count)/(obj.subject[i].total))*100)*100)/100+" %";
		}
	}
}
