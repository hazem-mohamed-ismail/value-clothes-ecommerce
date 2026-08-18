import PageHeader from "../../components/common/PageHeader/PageHeader";
import "./About.css";
import WhyChooseUs from "../../components/About/WhyChooseUs/WhyChooseUs.jsx";
import ReviewCard from '../../components/home/ReviewCard/ReviewCard.jsx'
import MeetOurTeam from '../../components/About/MeetOurTeam/MeetOurTeam.jsx'

export default function About() {
  return (
    <>
      <PageHeader
        title={"About Us"}
        description={
          "With over 15 years of experience, we craft timeless collections that transcend trends and inspire lasting elegance."
        }
      />

      <div className="container pb-4 pt-2">
        <img
          src="/assets/about-us/s-contact-1.jpg"
          className="img-fluid rounded-4 planning-img"
          alt=""
        />

        <div className="about-stats-section py-5">
          <div className="container">
            <div className="row align-items-center mb-5 pb-4">
              <div className="col-md-6">
                <h2 className="text-dark main-title">
                  Design, Attention To Detail & Efficiency To Delight The World
                </h2>
              </div>
              <div className="col-md-6">
                <p className="text-muted lead-text fs-5 ps-md-4">
                  From the moment it is conceived to the moment it is worn,
                  every one of our garments follows this path. We could do it at
                  a fast pace. However, at Mango, we choose to take care of all
                  those who are walking this path with us.
                </p>
              </div>
            </div>

            <hr className="my-5 text-muted opacity-25" />

            <div className="row text-center mt-5">
              <div className="col-md-3 col-sm-6 mb-4">
                <h3 className="stat-number">8.2k</h3>
                <h4 className="stat-title">Products Available</h4>
                <p className="stat-desc">
                  We offer a wide selection of high-quality products to meet
                  every need.
                </p>
              </div>

              <div className="col-md-3 col-sm-6 mb-4">
                <h3 className="stat-number">10k</h3>
                <h4 className="stat-title">Happy Customers</h4>
                <p className="stat-desc">
                  Serving over 10,000 delighted customers who trust us for
                  quality and service.
                </p>
              </div>

              <div className="col-md-3 col-sm-6 mb-4">
                <h3 className="stat-number">96</h3>
                <h4 className="stat-title">Partner Brand</h4>
                <p className="stat-desc">
                  Our top-brand partnerships bring a trusted collection for your
                  kitchen and home.
                </p>
              </div>

              <div className="col-md-3 col-sm-6 mb-4">
                <h3 className="stat-number">16k</h3>
                <h4 className="stat-title">Products For Sale</h4>
                <p className="stat-desc">
                  That's why we strive to offer a diverse range of products that
                  cater to all styles.
                </p>
              </div>
            </div>
          </div>
        </div>

        <WhyChooseUs />

        <ReviewCard />

        <MeetOurTeam/>
      </div>
    </>
  );
}
