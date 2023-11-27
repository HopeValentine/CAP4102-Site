import instagram from "../../images/instagram.png";
import facebook from "../../images/facebook.png";
import "./contact.css"

export default function ContactUs() {
  return (
    <div className="page-container">
      <div className="contact-container">
        <header className="contact-header">
          <h1 className="contact-header-text">Contact Us</h1>
        </header>

        <body className="contact-body">
            <p className="contact-body-title">
                Phone: (850) 356-4410
            </p>
            <p className="contact-body-title">
                Email: didafoodtruck@gmail.com
            </p>
            <div>
                <a href="https://www.instagram.com/didafoodtruck" target="_blank" rel="noopener noreferrer">
                    <img src={instagram} className="img-social-media"></img>
                </a>
                <a href="https://www.facebook.com/didafoodtruck" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} className="img-social-media"></img>
                </a>
            </div>
        </body>
      </div>
    </div>
  );
}