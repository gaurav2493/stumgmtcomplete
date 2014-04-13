var serverAddress="http://gaura.ng.bluemix.net";//Replace this url by the server url for example 192.168.1.4:8080 or leave it as it is if you want to use the cloud server
/*
Alternate URL
http://gaura.ng.bluemix.net  //for this, username=1109113019,pass=1109113019 for mobile app, server address = gaurav, pass=ankit
http://student-cut.rhcloud.com
*/

var authentication=serverAddress+"/login?user=";
var attendance=serverAddress+"/jsonp/getjsonattendance?callback=JSONRetrive&session=";
var examType=serverAddress+"/jsonp/getexamtypes?callback=examTypesFunction";
var marksSubject=serverAddress+"/jsonp/getmarks?callback=marksFunction&";
var viewnoticeurl=serverAddress+"/jsonp/viewnotices?pageno=1&callback=viewNotice";
var viewsinglenoticeurl=serverAddress+"/jsonp/viewnotice?callback=view_single_notice&notice_id=";
var examscheduleurl="";
var showmorebuttonurl=serverAddress+"/jsonp/viewnotices?";
var viewfileurl=serverAddress+"/jsonp/viewnotices?pageno=1&callback=viewFiles";
var viewsinglefileeurl=serverAddress+"/jsonp/viewnotice?notice_id=20&callback=view_single_notice";