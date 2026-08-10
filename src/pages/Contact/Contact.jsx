import "./Contact.css";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import MessageForm from "../../components/common/MessageForm/MessageForm";

export default function Contact() {
  return (
    <div className="container py-2">

      <PageHeader title={"Contact Us"} description={"Get in touch with us for inquiries, support, or collaboration we’re here to help you."} />

      <div className="map w-100">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d998.3376426637769!2d31.242869194332368!3d29.968194180020618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583809b8f551e3%3A0x6265c5febb8ab4a3!2z2YLYs9mFINin2YTZhdi52KfYr9mK2Iwg2YXYrdin2YHYuNipINin2YTZgtin2YfYsdip4oCs!5e0!3m2!1sar!2seg!4v1781315923614!5m2!1sar!2seg"
          width="600"
          height="450"
          style={{ border: 0 }}
          className="w-100 shadow-md rounded-4 h-100"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
        <div className="container my-5 py-5">
          <div className="row g-5">
            <div className="col-md-5">
              <h2 className="fw-semibold mb-3">Information</h2>
              <p className="text-muted mb-5 contact-text-max">
                Have a question? Please contact us using the customer support channels below.
              </p>

              <div className="row mb-4">
                <div className="col-6">
                  <h5 className="fw-semibold mb-2">Phone:</h5>
                  <p className="text-muted">+1 666 234 8888</p>
                </div>
                <div className="col-6">
                  <h5 className="fw-semibold mb-2">Email:</h5>
                  <p className="text-muted">hi.amere@gmail.com</p>
                </div>
              </div>

              <div className="mb-4">
                <h5 className="fw-semibold mb-2">Address:</h5>
                <p className="text-muted mb-0 contact-address-max">
                  2163 Phillips Gap Rd, West Jefferson, North Carolina, United States
                </p>
              </div>

              <div>
                <h5 className="fw-semibold mb-3">Open Time:</h5>
                <div className="d-flex mb-2">
                  <span className="text-muted time-label-width">Mon - Sat:</span>
                  <span className="text-muted">7:30am - 8:00pm PST</span>
                </div>
                <div className="d-flex">
                  <span className="text-muted time-label-width">Sunday:</span>
                  <span className="text-muted">9:00am - 5:00pm PST</span>
                </div>
              </div>
            </div>

            <div className="col-md-7">
              <MessageForm
                title="Get In Touch"
                subtitle="Use the form below to get in touch with the sales team"
                buttonText="Send message"
              />
            </div>
          </div>
        </div>
    </div>
  );
}
