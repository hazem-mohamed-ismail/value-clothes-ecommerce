import "./BlogHeader.css";
import { useParams, Link, useNavigate } from "react-router-dom";
import Posts from "../../../data/blogPosts.json";

const BlogHeader = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Converts the id to a number and finds the matching post
  const currentId = Number(id);
  const totalPosts = Posts.length;
  const post = Posts.find((p) => p.id == currentId);

  // Sets the navigation state at the first and last post
  const isFirstPost = currentId <= 1;
  const isLastPost = currentId >= totalPosts;

  return (
    <div className="blog-header-container">
      <div className="row gx-0">
        <div className="col-12 d-flex flex-row justify-content-between align-items-center">
          <div className="breadcrumb-nav my-auto">
            <Link to="/" className="breadcrumb-link">
              Home
            </Link>
            <span className="breadcrumb-separator">&gt;</span>
            <Link to="/blog" className="breadcrumb-link">
              Blog
            </Link>
            <span className="breadcrumb-separator">&gt;</span>
            <span className="breadcrumb-current">{post?.title}</span>
          </div>

          <div className="blogs-pagination">
            <button
              className="pagination-btn"
              disabled={isFirstPost}
              onClick={() => !isFirstPost && navigate(`/blog-single/${currentId - 1}`)}
              aria-label="Previous"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            <Link to="/blog" className="pagination-btn" aria-label="All Blogs">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.5 11h5c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-5C3.67 3 3 3.67 3 4.5v5c0 .83.67 1.5 1.5 1.5M5 5h4v4H5zM19.5 3h-5c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5M19 9h-4V5h4zM4.5 21h5c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5h-5c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5m.5-6h4v4H5zM19.5 13h-5c-.83 0-1.5.67-1.5 1.5v5c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-5c0-.83-.67-1.5-1.5-1.5m-.5 6h-4v-4h4z" />
              </svg>
            </Link>

            <button
              className="pagination-btn"
              disabled={isLastPost}
              onClick={() => !isLastPost && navigate(`/blog-single/${currentId + 1}`)}
              aria-label="Next"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>

        <div className="col-12 mt-4">
          <div className="blog-image-wrapper">
            <img src={post?.image} alt={post?.title} className="blog-main-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;