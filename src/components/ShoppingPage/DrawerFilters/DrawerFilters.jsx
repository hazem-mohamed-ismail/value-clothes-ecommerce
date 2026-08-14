import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Filters from "../Filters/Filters";
import "./DrawerFilters.css";

export default function DrawerFilters({
  filterByPrice,
  productCategory,
  sortByPrice,
  rating,
  search,
  setFilterByPrice,
  setProductCategory,
  setRating,
  setSortByPrice,
  setSearch
}) {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setShow(true)}
        className="show-all-filters-btn ms-3"
      >
        Show All Filters
      </button>

      <Offcanvas
        show={show}
        onHide={() => setShow(false)}
        placement="start"
        className="filters-offcanvas"
      >
        <Offcanvas.Header closeButton className="border-bottom">
          <Offcanvas.Title className="fw-bold fs-4">Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="p-3">
          <Filters
            filterByPrice={filterByPrice}
            productCategory={productCategory}
            sortByPrice={sortByPrice}
            rating={rating}
            search={search}
            setFilterByPrice={setFilterByPrice}
            setProductCategory={setProductCategory}
            setRating={setRating}
            setSortByPrice={setSortByPrice}
            setSearch={setSearch}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
