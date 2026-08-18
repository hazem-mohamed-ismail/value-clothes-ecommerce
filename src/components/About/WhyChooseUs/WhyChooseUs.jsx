import { useId } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import accordionData from "../../../data/accordions.json";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  const id = useId();

  return (
    <div className="container why-us-container py-4 px-4 rounded-4">
      <div className="row align-items-center">
        <div className="col-lg-6 mb-4 mb-lg-0">
          <img
            src="/assets/about-us/s-contact-2.jpg"
            className="img-fluid rounded-4 w-100"
            alt="Offering Rare And Beautiful Items"
          />
        </div>

        <div className="col-lg-6 ps-lg-5">
          <h2 className="text-dark mb-4">
            Offering Rare And Beautiful Items Worldwide
          </h2>

          <div className="about-accordions">
            {accordionData.map((item) => (
              <Accordion
                key={item.id}
                elevation={0}
                className="custom-accordion"
                defaultExpanded={item.expand}
              >
                <AccordionSummary
                  expandIcon={<AddIcon className="accordion-icon" />}
                  aria-controls={`${id}-panel${item.id}-content`}
                  id={`${id}-panel${item.id}-header`}
                >
                  <Typography component="span">{item.title}</Typography>
                </AccordionSummary>

                <AccordionDetails className="custom-accordion-details">
                  {item.content}
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

