import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:Atharvhengne123@gmail.com" data-cursor="disable">
                atharvhengne123@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+917066055688" data-cursor="disable">
                +91 7066055688
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/e25b001397-arch"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github @e25b001397-arch
            </a>

            <a
              href="https://www.instagram.com/atharv_hengne?igsh=MW51eTM5OXFwdm4wZg=="
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram @Atharv_hengne
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Atharv Hengne</span>
            </h2>
            <h5>Copyright 2026</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;