import "./ContactFormStyles.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('Codexsuvro_travelo', 'template_4n4q4m7', form.current, 'GzNR0Q0KxhyQ02uB7')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className="form-container">
            <h1>Send a message to us!</h1>
            <form ref={form} onSubmit={sendEmail}>
                <input placeholder="Name" name="to_name" type="text" />
                <input placeholder="Email" type="email" name="from_name" />
                <textarea placeholder="Message" rows="4" name="message"></textarea>
                <button type="submit" value="Send">Send Message</button>
            </form>
        </div>
    );
};

export default ContactForm;