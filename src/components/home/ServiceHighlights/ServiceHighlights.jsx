import "./ServiceHighlights.css";
import services from "../../../data/services.json";

export default function ServiceHighlights() {
  return (
    <section className="service-highlights">
      <div className="container">
        <div className="row">
          {services.map((service) => (
            <div
              key={service.id}
              className="col-12 col-sm-6 col-lg-3 text-center"
            >
              <div className="service-item">
                <i className={`bi ${service.icon} service-icon`}></i>

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}