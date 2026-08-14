import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Slider from "@mui/material/Slider";

import "./Filters.css";

export default function Filters({
  filterByPrice,
  productCategory,
  sortByPrice,
  rating,
  search,
  setFilterByPrice,
  setProductCategory,
  setRating,
  setSortByPrice,
  setSearch,
  handleResetFilters,
}) {
  const isNumber = /^\d+$/;

  

  return (
    <div className="filters-panel">
      <div className="filters-header">
        <h2 className="mb-3">Filters</h2>
      </div>

      {/* Search */}
      <Accordion
        className="filter-accordion"
        defaultExpanded
        disableGutters
        elevation={0}
        square
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" className="filter-title">
            Search
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="filter-details">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </AccordionDetails>
      </Accordion>

      {/* Categories */}
      <Accordion
        className="filter-accordion"
        defaultExpanded
        disableGutters
        elevation={0}
        square
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" className="filter-title">
            Product Categories
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="list-unstyled filter-list mb-0">
            <li className="d-flex justify-content-between align-items-center px-2 border-bottom">
              <label
                className="d-flex align-items-center gap-2"
                style={{ cursor: "pointer" }}
              >
                <input
                  type="checkbox"
                  className="form-check-input my-auto"
                  checked={productCategory.includes("electronics")}
                  onChange={() => {
                    setProductCategory((prev) =>
                      prev.includes("electronics")
                        ? prev.filter((c) => c !== "electronics")
                        : [...prev, "electronics"],
                    );
                  }}
                />
                electronics
              </label>
              <span className="item-count text-muted">6</span>
            </li>
            <li className="d-flex justify-content-between align-items-center px-2 border-bottom">
              <label
                className="d-flex align-items-center gap-2"
                style={{ cursor: "pointer" }}
              >
                <input
                  type="checkbox"
                  className="form-check-input my-auto"
                  checked={productCategory.includes("jewelery")}
                  onChange={() => {
                    setProductCategory((prev) =>
                      prev.includes("jewelery")
                        ? prev.filter((c) => c !== "jewelery")
                        : [...prev, "jewelery"],
                    );
                  }}
                />
                jewelery
              </label>
              <span className="item-count text-muted">4</span>
            </li>
            <li className="d-flex justify-content-between align-items-center px-2 border-bottom">
              <label
                className="d-flex align-items-center gap-2"
                style={{ cursor: "pointer" }}
              >
                <input
                  type="checkbox"
                  className="form-check-input my-auto"
                  checked={productCategory.includes("men's clothing")}
                  onChange={() => {
                    setProductCategory((prev) =>
                      prev.includes("men's clothing")
                        ? prev.filter((c) => c !== "men's clothing")
                        : [...prev, "men's clothing"],
                    );
                  }}
                />
                men's clothing
              </label>
              <span className="item-count text-muted">4</span>
            </li>
            <li className="d-flex justify-content-between align-items-center px-2 border-bottom">
              <label
                className="d-flex align-items-center gap-2"
                style={{ cursor: "pointer" }}
              >
                <input
                  type="checkbox"
                  className="form-check-input my-auto"
                  checked={productCategory.includes("women's clothing")}
                  onChange={() => {
                    setProductCategory((prev) =>
                      prev.includes("women's clothing")
                        ? prev.filter((c) => c !== "women's clothing")
                        : [...prev, "women's clothing"],
                    );
                  }}
                />
                women's clothing
              </label>
              <span className="item-count text-muted">6</span>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>

      {/* Price */}
      <Accordion
        className="filter-accordion"
        defaultExpanded
        disableGutters
        elevation={0}
        square
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" className="filter-title">
            Filter By Price
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="filter-details">
          <div className="price-slider-wrapper">
            <Slider
              className="price-slider"
              min={0}
              max={1000}
              value={[
                Number(filterByPrice.minPrice),
                Number(filterByPrice.maxPrice),
              ]}
              onChange={(e, newValue) => {
                setFilterByPrice({
                  ...filterByPrice,
                  minPrice: newValue[0],
                  maxPrice: newValue[1],
                });
              }}
              sx={{
                "& .MuiSlider-thumb": {
                  boxShadow: "none",
                  "&:hover": {
                    boxShadow: "none",
                  },
                  "&.Mui-focusVisible": {
                    boxShadow: "none",
                  },
                  "&.Mui-active": {
                    boxShadow: "none",
                  },
                },
              }}
            />
          </div>
          <div className="row g-2 price-inputs">
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Min</label>
                <input
                  type="text"
                  className="form-control"
                  value={filterByPrice.minPrice}
                  onChange={(e) => {
                    if (
                      isNumber.test(e.target.value) ||
                      e.target.value === ""
                    ) {
                      setFilterByPrice({
                        ...filterByPrice,
                        minPrice: e.target.value,
                      });
                    } else {
                      setFilterByPrice({
                        ...filterByPrice,
                        minPrice: filterByPrice.minPrice,
                      });
                    }
                  }}
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label className="form-label">Max</label>
                <input
                  type="text"
                  className="form-control"
                  value={filterByPrice.maxPrice}
                  onChange={(e) => {
                    if (
                      isNumber.test(e.target.value) ||
                      e.target.value === ""
                    ) {
                      setFilterByPrice({
                        ...filterByPrice,
                        maxPrice: e.target.value,
                      });
                    } else {
                      setFilterByPrice({
                        ...filterByPrice,
                        maxPrice: filterByPrice.maxPrice,
                      });
                    }
                  }}
                />
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      {/* Rating */}
      <Accordion
        className="filter-accordion"
        disableGutters
        elevation={0}
        square
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" className="filter-title">
            Rating
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ul className="list-unstyled filter-list mb-0">
            <li className="d-flex justify-content-between align-items-center px-2 border-bottom">
              <label
                className="d-flex align-items-center gap-2 mb-0"
                style={{ cursor: "pointer" }}
              >
                {/* 4 Stars AND up */}
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={rating.includes(4)}
                  onChange={() => {
                    setRating((prev) =>
                      prev.includes(4)
                        ? prev.filter((r) => r !== 4)
                        : [...prev, 4],
                    );
                  }}
                />

                <span>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i> & up
                </span>
              </label>
            </li>
            <li className="d-flex justify-content-between align-items-center px-2 border-bottom">
              <label
                className="d-flex align-items-center gap-2 mb-0"
                style={{ cursor: "pointer" }}
              >
                {/* 3 Stars AND up */}
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={rating.includes(3)}
                  onChange={() => {
                    setRating((prev) =>
                      prev.includes(3)
                        ? prev.filter((r) => r !== 3)
                        : [...prev, 3],
                    );
                  }}
                />
                <span>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i> & up
                </span>
              </label>
            </li>
            <li className="d-flex justify-content-between align-items-center px-2 border-bottom">
              <label
                className="d-flex align-items-center gap-2 mb-0"
                style={{ cursor: "pointer" }}
              >
                {/* 2 Stars AND up */}
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={rating.includes(2)}
                  onChange={() => {
                    setRating((prev) =>
                      prev.includes(2)
                        ? prev.filter((r) => r !== 2)
                        : [...prev, 2],
                    );
                  }}
                />
                <span>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i> & up
                </span>
              </label>
            </li>
            <li className="d-flex justify-content-between align-items-center px-2 border-bottom">
              <label
                className="d-flex align-items-center gap-2 mb-0"
                style={{ cursor: "pointer" }}
              >
                {/* 1 Star AND up */}
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={rating.includes(1)}
                  onChange={() => {
                    setRating((prev) =>
                      prev.includes(1)
                        ? prev.filter((r) => r !== 1)
                        : [...prev, 1],
                    );
                  }}
                />

                <span>
                  <i className="fa-solid fa-star"></i> & up
                </span>
              </label>
            </li>
          </ul>
        </AccordionDetails>
      </Accordion>

      {/* Sort */}
      <Accordion
        className="filter-accordion"
        disableGutters
        elevation={0}
        square
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography variant="subtitle1" className="filter-title">
            Sort By
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <select
            className="form-control"
            value={sortByPrice}
            onChange={(e) => {
              setSortByPrice(e.target.value);
            }}
          >
            <option value="default">Default</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating-desc">Rating: High to Low</option>
          </select>
        </AccordionDetails>
      </Accordion>

      <button
        type="button"
        className="btn btn-dark btn-lg w-100 mt-3 rounded-5"
        onClick={handleResetFilters}
      >
        Clear all filters
      </button>
    </div>
  );
}
