import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "@mui/material/Slider";

import "./Filters.css";

export default function Filters() {
  const productCategoriesItems = [
    { label: "Accessories", count: 1 },
    { label: "Dresses", count: 12 },
    { label: "Outerwear", count: 1 },
    { label: "Shirts", count: 3 },
    { label: "Tops", count: 3 },
  ];

  const productCategoriesRender = productCategoriesItems.map((item, index) => (
    <li
      key={index}
      className="d-flex justify-content-between align-items-center px-2 border-bottom"
    >
      <span>
        {item.label} ({item.count})
      </span>
    </li>
  ));

  const filterByPriceDefault = [0, 120];

  const sizes = ["XS", "S", "M", "L", "XL", "2XL", "3XL", "Free Size"];

  // Each color also carries the class used for its small color dot
  const colorsList = [
    ["Beige", "color-beige", 3],
    ["Blue", "color-blue", 5],
    ["Brown", "color-brown", 6],
    ["Dark Blue", "color-darkblue", 1],
    ["Light", "color-light", 1],
    ["Pink", "color-pink", 1],
    ["Various", "color-various", 33],
    ["Warm Brown", "color-warmbrown", 1],
    ["White", "color-white", 1],
  ];

  const colorsRender = colorsList.map(([label, colorClass, count]) => (
    <li key={label} className="d-flex justify-content-between align-items-center py-2 border-bottom">
      <span className="d-flex align-items-center gap-2">
        <span className={`color-dot ${colorClass}`} />
        {label}
      </span>
      <span className="item-count text-muted">{count}</span>
    </li>
  ));

  const brands = [
    ["Adidas", 6],
    ["Gucci", 7],
    ["Hermes", 6],
    ["Louis Vuitton", 6],
    ["Nike", 6],
    ["Zalando", 5],
    ["Zara", 5],
  ];

  const brandsRender = brands.map(([name, count]) => (
    <li key={name} className="d-flex justify-content-between align-items-center py-2">
      <label className="form-check-label d-flex align-items-center gap-2 mb-0">
        <input type="checkbox" className="form-check-input" />
        {name}
      </label>
      <span className="item-count text-muted">{count}</span>
    </li>
  ));

  return (
    <div className="filters-panel">
      <div className="filters-header">
        <h2 className="mb-3">Filters</h2>
      </div>

        {/* Categories are open by default so the main filters are visible immediately */}
      <Accordion className="filter-accordion" defaultExpanded disableGutters elevation={0} square>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" className="filter-title">
            Product Categories
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="list-unstyled filter-list mb-0">{productCategoriesRender}</ul>
        </AccordionDetails>
      </Accordion>

      <Accordion className="filter-accordion" defaultExpanded disableGutters elevation={0} square>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" className="filter-title">
            Filter By Price
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="filter-details">
          <div className="price-slider-wrapper">
            <Slider defaultValue={filterByPriceDefault} className="price-slider" />
          </div>
          <div className="row g-2 price-inputs">
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Min</label>
                <input type="text" className="form-control" defaultValue="0" />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Max</label>
                <input type="text" className="form-control" defaultValue="120" />
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion className="filter-accordion" disableGutters elevation={0} square>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" className="filter-title">
            Size
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="size-options d-flex flex-wrap gap-2">
            {sizes.map((size) => (
              <button key={size} type="button" className="btn size-chip">
                {size}
              </button>
            ))}
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion className="filter-accordion" disableGutters elevation={0} square>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" className="filter-title">
            Colors
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="list-unstyled color-list mb-0">{colorsRender}</ul>
        </AccordionDetails>
      </Accordion>

      <Accordion className="filter-accordion" disableGutters elevation={0} square>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" className="filter-title">
            Availability
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="list-unstyled availability-list mb-0">
            <li className="d-flex justify-content-between align-items-center py-2 border-bottom">
              <label className="form-check-label d-flex align-items-center gap-2 mb-0">
                <input type="checkbox" className="form-check-input" />
                In stock
              </label>
              <span className="item-count text-muted">37</span>
            </li>
            <li className="d-flex justify-content-between align-items-center py-2">
              <label className="form-check-label d-flex align-items-center gap-2 mb-0">
                <input type="checkbox" className="form-check-input" />
                Out of stock
              </label>
              <span className="item-count text-muted">4</span>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>

      <Accordion className="filter-accordion" disableGutters elevation={0} square>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" className="filter-title">
            Brands
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="list-unstyled brands-list">{brandsRender}</ul>
        </AccordionDetails>
      </Accordion>

      <button type="button" className="btn btn-dark btn-lg w-100 mt-3 rounded-5">
        Clear all filters
      </button>
    </div>
  );
}