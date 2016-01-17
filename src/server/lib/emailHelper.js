var nodemailer = require('nodemailer');

module.exports=function(credentials){
    console.log(credentials);
	var mailTransport = nodemailer.createTransport("SMTP",{
			host: "smtp.163.com", // 主机
			secureConnection: true, // 使用 SSL
			port: 465, // SMTP 端口
			auth:{
				user:credentials.gmail.user,
				pass:credentials.gmail.password
			}
		});

	var from = credentials.gmail.user;
	var errorRecipient = credentials.gmail.user;

	return {
		send:function(to,title,txt){
			mailTransport.sendMail({
				from:from,
				to:to,
				subject:title,
				html:txt,
				generateTextFromHtml:true
			},function(err){
				if(err) console.error('Unable to email: '+err)
			})

		 },
		emailError:function(msg,file,exception){
			var body ='<h1>site error</h1>'+
					  'message:<br><pre>'+message+'</pre><br>';
			// if(file) body +=;
			// if(exception) body+=;
			mailTransport.sendMail({
				from:from,
				to:errorRecipient,
				subject:'site error',
				html:body,
				generateTextFromHtml:true
			},function(err){
				if(err) console.error('Unable to email: '+err)
			})
		}
	}


}
