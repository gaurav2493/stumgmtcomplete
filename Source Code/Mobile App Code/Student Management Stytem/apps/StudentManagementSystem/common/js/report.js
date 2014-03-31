
var count_report=0;
var count_exam=0;

function showDrop()
{
if(document.getElementById("select_exam").value =="selectses_report")//select_exam_first
	{
		document.getElementById("select_exam_first").innerHTML="*Please select any exam"
		document.getElementById("display_select_year").style.visibility="hidden";
	}
	else
	{
		document.getElementById("display_select_year").style.visibility="visible";
	}
}

function takeExam_report()
{
	document.getElementById("loadImg_report").width="40";
	document.getElementById("loadImg_report").height="40";
	
	var script = document.createElement('script');
	script.src = examType;		
	document.getElementsByTagName('head')[0].appendChild(script);
	
}


function examTypesFunction(examdata)
{
	var jsonObjectExam=examdata;
	var objexam = JSON.parse(jsonObjectExam);
	document.getElementById("loadImg_report").width="";
	document.getElementById("loadImg_report").height="";
	var dropdown = document.getElementById("select_exam");
	var exam_id=select_exam.options[select_exam.selectedIndex].text;
	if(document.getElementById("select_exam").value =="selectses_report")//select_exam_first
	{
		document.getElementById("select_exam_first").innerHTML="*Please select any exam"
		
	}
	else
	{
		document.getElementById("display_select_year").style.visibility="visible";
	}
	//alert(exam_id);
	//var x = document.getElementById("select_exam");
	if(count_exam==0)
	{
		for(i=0;i<((objexam.examList.length)-1);i++)	
		{
			var d="option"+i;
			var d = document.createElement("option"); 
			d.text = objexam.examList[i].exam_name;
			d.value = objexam.examList[i].exam_id;
			dropdown.options.add(d);
			
		}
		count_exam++;
	}
	else
	{
		for(i=0;i<((objexam.examList.length)-1);i++)	
		{
			dropdown.remove(1);
			
		}
		for(i=0;i<((objexam.examList.length)-1);i++)	
		{
			var d="option"+i;
			var d = document.createElement("option"); 
			d.text = objexam.examList[i].exam_name;
			d.value = objexam.examList[i].exam_id;
			dropdown.options.add(d);
			
		}
		
	}
	
}

function takeYear_report()
{
	
	
	document.getElementById("loadImg_report").width="40";
	document.getElementById("loadImg_report").height="40";
	var a=document.getElementById("yearselect_report").value;
	var b=document.getElementById("select_exam").value;
	var script = document.createElement('script');
	script.src = marksSubject+"session="+a+"&exam_id="+b;		//session=2013&exam_id=1
	document.getElementsByTagName('head')[0].appendChild(script);
	

}

function marksFunction(data)
{
	document.getElementById("myTable_report").style.visibility="visible";
	var jsonObject=data;
	var obj = JSON.parse(jsonObject);
	document.getElementById("loadImg_report").width="";
	document.getElementById("loadImg_report").height="";
	var table = document.getElementById("myTable_report");
	var r=document.getElementById("yearselect_report").value;
	var a=select_exam.options[select_exam.selectedIndex].text;
	
	
	var res = parseInt((r.substring(2))) +1 ;
	document.getElementById("rt_heading").innerHTML="<center><h3>------ "+a+" - ("+r+" - "+res+") ------</h3></center>";
	if(count_report==0)
	{
		for(i=0;i<((obj.report.length)-1);i++)
		{
			var row = table.insertRow(i+1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			cell1.innerHTML = obj.report[i].subject_name;
			cell2.innerHTML = obj.report[i].marks_obtained;
			cell3.innerHTML = obj.report[i].max_marks;
			cell4.innerHTML = Math.round((((obj.report[i].marks_obtained)/(obj.report[i].max_marks))*100)*100)/100+" %";
		}
		count_report++;
	}
	else
	{
		count_report++;
		for(i=(obj.report.length);i>0;i--)
		{
			document.getElementById("myTable_report").deleteRow(i);
		}
		for(i=0;i<((obj.report.length)-1);i++)
		{
			var row = table.insertRow(i+1);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);
			var cell4 = row.insertCell(3);
			cell1.innerHTML = obj.report[i].subject_name;
			cell2.innerHTML = obj.report[i].marks_obtained;
			cell3.innerHTML = obj.report[i].max_marks;
			cell4.innerHTML = Math.round((((obj.report[i].marks_obtained)/(obj.report[i].max_marks))*100)*100)/100+" %";
		}
	}
	
}




