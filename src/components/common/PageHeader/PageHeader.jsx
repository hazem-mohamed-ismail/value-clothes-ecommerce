import './PageHeader.css'

export default function PageHeader({ title, description }) {
  return (
    <div className="pageHeader-header">
      <nav className="breadcrumbs">
        <a href="/" className="breadcrumb-link">
          Home
        </a>
        <span className="breadcrumb-separator">&gt;</span>
        <span className="breadcrumb-current">{title}</span>
      </nav>

      <h1 className="pageHeader-title">{title}</h1>

      <p className="description">
        {description}
      </p>
    </div>
  );
}
