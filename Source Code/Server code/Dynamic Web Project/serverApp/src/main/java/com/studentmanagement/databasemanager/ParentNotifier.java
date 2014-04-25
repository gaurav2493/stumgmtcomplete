package com.studentmanagement.databasemanager;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Properties;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.mail.Message;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpSession;
import javax.sql.DataSource;

public class ParentNotifier {
	
	private HttpSession session;
	private DataSource dataSource;
	private Connection connect;
	private PreparedStatement statement;
	private ResultSet res;
	private static final String EMAIL_PATTERN = 
			"^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
			+ "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
	
	
	public ParentNotifier(DataSource dataSource,HttpSession session)
	{
		this.session=session;
		this.dataSource=dataSource;
	}	

	public void emailAll(Map<String, String> allRequestParams) {
		
		@SuppressWarnings("unchecked")
		Map<String,String> allRequestParamsFromPreviousPage=(Map<String, String>)session.getAttribute("examparams");
		int total_marks=Integer.parseInt(allRequestParamsFromPreviousPage.get("total"));
		String subject=allRequestParamsFromPreviousPage.get("subject");
		String branch=allRequestParamsFromPreviousPage.get("branch");
		String year=allRequestParamsFromPreviousPage.get("year");
		String acadSession=allRequestParamsFromPreviousPage.get("session");
		Pattern pattern;
		Matcher matcher;
		StringBuffer message=new StringBuffer("The Folowing result have been declared<br/><br/><br/><b>Subject</b> : "+subject+"<br/><b>Session</b> : "+acadSession+"<br/><b>year</b> : "+year+"<br/><b>Branch</b> : "+branch+"<br/><b>total marks</b> : "+total_marks);
		message.append("<br/><br/><table border='1'><tr><th>Rollno</th><th>Marks</th></tr>");
		for(Entry<String, String> e : allRequestParams.entrySet()) {
			message.append("<tr><td>"+e.getKey()+"</td><td>"+e.getValue()+"</td></tr>");			
	    }
		message.append("</table>");
		StringBuffer sql=new StringBuffer("SELECT parent_email FROM student_info WHERE true AND");
		
		for(int i=0;i<allRequestParams.size();i++) {
			sql.append(" rollno = ? OR");		
	    }
		sql.append(" false");
		
		try{
			
			connect=dataSource.getConnection();
			statement=connect.prepareStatement(sql.toString());
			int i=0;
			for(Entry<String, String> e : allRequestParams.entrySet()) {
				
				statement.setLong(++i, Integer.parseInt(e.getKey()));	
		    }
			
			res=statement.executeQuery();
			List<String> parentEmailList=new ArrayList<String>();
			pattern = Pattern.compile(EMAIL_PATTERN);
			
			i=0;
			while(res.next())
			{
				matcher = pattern.matcher(res.getString("parent_email"));
				if(matcher.matches())
				{
					parentEmailList.add(res.getString("parent_email"));
					i++;
				}
			}
			sendEmails(parentEmailList.toArray(new String[i]),message.toString());
		}catch(Exception ex)
		{
			ex.printStackTrace();
		}
		finally{
			close();
		}
		
	}
	private void sendEmails(String[] to,String bodytext) throws Exception
	{
		String host = "smtp.gmail.com";
	      String from = "webmaster.aaag@gmail.com"; //Edit this line
	      String passw = "weareaaagians";      //Edit This line
	      String subject="Marks Declaration";    //Email Subject EDIT

	      for (int i = 0; i < to.length; i++) {
			System.out.println(to[i]);
		}
	       
	      Properties props = System.getProperties();
	      props.put("mail.smtp.starttls.enable", "true"); // added this line
	      props.put("mail.smtp.host", host);
	      props.put("mail.smtp.user", from);
	      props.put("mail.smtp.password", passw);
	      props.put("mail.smtp.port", "587");
	      props.put("mail.smtp.auth", "true");
	    
	      Session session1 = Session.getDefaultInstance(props, null);
	      MimeMessage message = new MimeMessage(session1);
	      message.setFrom(new InternetAddress(from));
	    
	      InternetAddress[] toAddress = new InternetAddress[to.length];
	    
	      // To get the array of addresses
	      for( int i=0; i < to.length; i++ ) { // changed from a while loop
	    	  try{
	    toAddress[i] = new InternetAddress(to[i]);
	    	  }catch(Exception ex)
	    	  {
	    		  i--;
	    	  }
	      }
	      for( int i=0; i < toAddress.length; i++) { // changed from a while loop
	    message.addRecipient(Message.RecipientType.TO, toAddress[i]);
	      }
	      message.setSubject(subject);
	      message.setContent(bodytext, "text/html; charset=utf-8");
	      Transport transport = session1.getTransport("smtp");
	      transport.connect(host, from, passw);
	      transport.sendMessage(message, message.getAllRecipients());
	      transport.close();
	      System.out.println("Message sent");
	}
	
	private void close() {
		try {
			if(res!=null){
				res.close();
			}
			if (statement != null) {
				statement.close();
			}
			if (connect != null) {
				connect.close();
			}
		} catch (Exception e) {

		}
	}

}
