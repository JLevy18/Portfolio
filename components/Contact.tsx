import React, { useRef, useState, useEffect } from 'react';
import HCaptcha from "@hcaptcha/react-hcaptcha";
import emailjs from '@emailjs/browser';

const Contact = () => {

    const HCAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_HCAPTCHA_SITEKEY;

    const form = useRef<HTMLFormElement>();
    const captchaRef = useRef(null);

    const [token, setToken] = useState(null);
    const [formResponseState, setResponseState] = useState('default');
    const [formResponseSuccess, setResponseSuccess] = useState(false);
    const [formResponseWarning, setResponseWarning] = useState(false);
    const [formResponseError, setResponseError] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();

        if (!token) {
            setResponseState('warning');
            setResponseWarning(true);
            return;
        }

        emailjs.sendForm('default_service', 'template_a5241f9', form.current, {
            publicKey: 'LTIffhk-Ivb9OAt8r'
        })
            .then((result) => {
                setResponseState('success');
                setResponseSuccess(true);

                captchaRef.current.resetCaptcha();
                form.current.reset();
                setToken(null);
            }, (error) => {
                setResponseState('error');
                setResponseError(true);

                captchaRef.current.resetCaptcha();
                form.current.reset();
                setToken(null);
            });
        e.target.reset();
    }

    useEffect(() => {

        console.log(HCAPTCHA_SITE_KEY)

        if (formResponseState == 'success') {

            setTimeout(() => {
                setResponseSuccess(false);
                setResponseState('default');
            }, 4000)

        } else if (formResponseState == 'warning') {
            setTimeout(() => {
                setResponseWarning(false);
                setResponseState('default');
            }, 4000)
        } else if (formResponseState == 'error') {
            setTimeout(() => {
                setResponseError(false);
                setResponseState('default');
            }, 4000)
        }

    }, [formResponseState]);

    return (
        <div className="contact-wrapper">

            <div id="response" className={formResponseState}>
                <div className={formResponseSuccess ? 'success active' : 'success'}>
                    <p>Your message was sent successfully, we will be in touch soon!</p>
                </div>
                <div className={formResponseWarning ? 'warning active' : 'warning'}>
                    <p><b>Warning: </b> Human verification is required to send a message!</p>
                </div>
                <div className={formResponseError ? 'error active' : 'error'}>
                    <p><b>Error: </b> Something went wrong and your message wasn't sent. Please try again in a few minutes.</p>
                </div>
            </div>


            <div className="contact-message-container">
                <h1><text>Lets</text><span>work together!</span></h1>
                <p>Have a project in mind? I'd love to hear about it.</p>
                <p>Feel free to reach out to me using the form.</p>
                <p>I'll get back to you as soon as possible.</p>
            </div>
            <div className="contact-form-container">
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <h1>Get in touch</h1>
                    <input type="text" name="user_name" placeholder="Name" required />
                    <input type="email" name="user_email" placeholder="Email" required />
                    <textarea className="h-32" name="message" placeholder="Message" required></textarea>
                    <div>
                        <HCaptcha
                            sitekey={HCAPTCHA_SITE_KEY}
                            onVerify={setToken}
                            ref={captchaRef}
                        />
                    </div>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}
export default Contact;