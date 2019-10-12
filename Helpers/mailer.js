const nodemailer = require('nodemailer');


async function sendEmail(to, subject, text) {
	let transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'smileagainproj@gmail.com',
			pass: process.env.EMPASSWORD
		}
	});
	
	var mailOptions = {
		from: '"Team Smile Again" <smileagainproj@gmail.com>',
		to: to,
		subject: subject,
		html: text
	};
	
	await transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			return false
		} else {
			return true
		}
	});
}

module.exports.sendEmail = sendEmail;