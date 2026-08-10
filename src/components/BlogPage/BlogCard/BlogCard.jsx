import { Link } from 'react-router-dom';
import './BlogCard.css';

const BlogCard = ({ id,image, date, title, description }) => {
  return (
    <div className="blog-card">
      <div className="blog-card-image-wrapper">
        <Link to={`/blog-single/${id}`} className="blog-card-image-link">
          <img src={image} alt={title} className="blog-card-img" />
        </Link>
      </div>
      <div className="blog-card-content">
        <span className="blog-card-date">{date}</span>
        <Link to={`/blog-single/${id}`} className="blog-card-title">
          {title}
        </Link>
        <p className="blog-card-desc">{description}</p>
      </div>
    </div>
  );
};

export default BlogCard;
