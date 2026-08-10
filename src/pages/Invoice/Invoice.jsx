import "./Invoice.css";

export default function Invoice() {
  const invoiceData = {
    number: "#8191410",
    invoiceDate: "December 18, 2022",
    dueDate: "December 2, 2022",
    supplier: {
      name: "Themesflat LLC",
      address: "8500 Lorem Street Chicago, IL 55030 Dolor sit amet",
    },
    buyer: {
      name: "Brooklyn Simmons",
      address: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    },
    items: [
      { price: 20.0, vat: 10.0, total: 60.0 },
      { price: 20.0, vat: 10.0, total: 60.0 },
    ],
    totalDue: 60.0,
  };

  return (
    <div className="invoice-page-container d-flex justify-content-center align-items-center py-5">
      <div className="invoice-wrapper bg-white p-5">
        <div className="text-center invoice-header-section">
          <h1 className="invoice-logo m-0">Amerce. Invoice</h1>
        </div>

        <div className="d-flex justify-content-between align-items-end invoice-sub-header">
          <h2 className="invoice-number m-0">Number {invoiceData.number}</h2>
          <button className="download-btn btn btn-dark btn-download px-4 py-2 rounded-pill">
            Download
          </button>
        </div>

        <div className="row meta-section g-0">
          <div className="col-md-3 col-sm-6 meta-col">
            <span className="meta-title d-block">Invoice date:</span>
            <span className="meta-value">{invoiceData.invoiceDate}</span>
          </div>
          <div className="col-md-3 col-sm-6 meta-col">
            <span className="meta-title d-block">Due date:</span>
            <span className="meta-value">{invoiceData.dueDate}</span>
          </div>
          <div className="col-md-3 col-sm-6 meta-col">
            <span className="meta-title d-block">Supplier:</span>
            <span className="meta-value fw-bold d-block mb-1">
              {invoiceData.supplier.name}
            </span>
            <span className="meta-value text-muted address-text">
              {invoiceData.supplier.address}
            </span>
          </div>
          <div className="col-md-3 col-sm-6 meta-col border-0">
            <span className="meta-title d-block">Invoice date:</span>
            <span className="meta-value fw-bold d-block mb-1">
              {invoiceData.buyer.name}
            </span>
            <span className="meta-value text-muted address-text">
              {invoiceData.buyer.address}
            </span>
          </div>
        </div>

        <div className="table-responsive table-container">
          <table className="table align-middle invoice-table m-0">
            <thead>
              <tr>
                <th scope="col" className="ps-4">
                  Description
                </th>
                <th scope="col">Price</th>
                <th scope="col">VAT (20%)</th>
                <th scope="col" className="pe-4 text-end">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="ps-4">Standard Plan</td>
                <td>{"$" + invoiceData.items[0].price.toFixed(2)}</td>
                <td>{"$" + invoiceData.items[0].vat.toFixed(2)}</td>
                <td className="pe-4 text-end">{"$" + invoiceData.items[0].total.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="ps-4">Extra Plan</td>
                <td>{"$" + invoiceData.items[1].price.toFixed(2)}</td>
                <td>{"$" + invoiceData.items[1].vat.toFixed(2)}</td>
                <td className="pe-4 text-end">{"$" + invoiceData.items[1].total.toFixed(2)}</td>
              </tr>
              <tr className="total-due-row">
                <td colSpan="3" className="ps-4 fw-bold text-dark">
                  Total Due
                </td>
                <td className="pe-4 text-end fw-bold text-danger">
                  {"$" + invoiceData.totalDue.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="invoice-footer d-flex justify-content-center gap-5">
          <a href="https://www.amerce.com" target="_blank" rel="noreferrer">
            www.amerce.com
          </a>
          <span>+8(800) 123 4567</span>
          <a href="mailto:themesflat@support.com">themesflat@support.com</a>
        </div>
      </div>
    </div>
  );
}