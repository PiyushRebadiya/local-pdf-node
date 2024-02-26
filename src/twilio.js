const twilio = require('twilio');

const accountSid = 'ACd7bc42d2902ea0481fbc73dba4ea2167';
const authToken = '994c25a5708eda265812bfa84f8c5740';
const client = twilio(accountSid, authToken);

async function sendOTP(mobileNumber, otp) {
    try {
        const message = await client.messages.create({
            body: `Your OTP for verification is: ${otp}`,
            from: '+16073576606',
            to: mobileNumber
        });
        console.log('message:', message);
        console.log('OTP sent successfully:', message.sid);
        return true; // OTP sent successfully
    } catch (error) {
        console.error('Error sending OTP:', error);
        return false; // Error sending OTP
    }
}

module.exports = {
    sendOTP
};
