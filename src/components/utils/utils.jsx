import emailjs from 'emailjs-com';
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

const validatePassword = (password) => {
const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
return re.test(password);
};

const service_id = import.meta.env.VITE_SERVICE_ID
const template_id = import.meta.env.VITE_TEMPLATE_ID;
const public_key = import.meta.env.VITE_PUBLIC_KEY

const sendEmail = async(email, token) => {
  
  const templateParams = {
    email:email,
    subject: 'Verify Your Email Address',
    message: 
                  `<p>Dear user, thanks for signing up on our platform. 
                    Click on the link below to verify your account!</p>
                    <i><a href="${token}">${token}</a></i>
                        <br><br><h5>Or click on the button below</h5>
                        <a href="${token}" style="underline:unset;color:unset;background:unset;text-decoration:unset;">
                        <button style="border: unset;background:black;color:white;width: 100px; height: 35px; border-radius: 8px; font-weight:600;">
                        Verify</button></a>
                        <p>Best wishes,<br>Junetech Team</p> <br><br>
                    `
  };
  
  emailjs.send(service_id, template_id, templateParams, public_key)
    .then((response) => {
      return true;
    }, (err) => {
      return false;
    });
    
}
export { validateEmail, validatePassword, sendEmail}