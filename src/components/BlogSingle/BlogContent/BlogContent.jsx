import "./BlogContent.css";
import { useParams } from "react-router-dom";
import Posts from "../../../data/blogPosts.json";

const BlogContent = () => {
  const { id } = useParams();

  const post = Posts.find((p) => p.id == id);
  return (
    <div className="blog-content-container">
      <header className="blog-header-section">
        <span className="blog-badge">Fashion Trends</span>
        <h1 className="blog-main-title">
          {post?.title}
        </h1>
        <div className="blog-meta">
          <span className="meta-item">
            <i className="far fa-calendar-alt meta-icon"></i> {post?.date}
          </span>
          <span className="meta-item">
            <i className="far fa-user meta-icon"></i> by {post?.author || 'Unknown Author'}
          </span>
        </div>
      </header>

      <p className="blog-paragraph">
        {post?.description || 'No content available.'}
      </p>

      <div className="blog-image-gallery row g-4">
        <div className="gallery-image-wrapper col-lg-6 col-md-12">
          <img
            src="\src\assets\shared\cate-1.jpg"
            alt="Fashion layout 1"
            className="gallery-img"
          />
        </div>
        <div className="gallery-image-wrapper col-lg-6 col-md-12">
          <img
            src="\src\assets\shared\cate-4.jpg"
            alt="Fashion layout 2"
            className="gallery-img"
          />
        </div>
      </div>

      <h2 className="blog-sub-title">How To Deal With Employee Quitting</h2>
      <p className="blog-paragraph">
        Donec eu dui condimentum, laoreet nulla vitae, venenatis ipsum. Donec
        luctus sem sit amet varius laoreet. Aliquam fermentum sit amet urna
        fringilla tincidunt. Vestibulum ullamcorper nec lacus ac molestie.
        Curabitur congue neque sed nisi auctor consequat. Pellentesque rhoncus
        tortor vitae ipsum sagittis tempor.
      </p>

      <hr className="blog-divider" />

      <footer className="blog-footer-section row gx-4 gy-3">
        <div className="col-lg-6">
          <div className="blog-tags">
            <span className="tags-label">Tags:</span>
            <span className="tag-item">fashion</span>
            <span className="tag-item">style</span>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="blog-share d-flex flex-wrap align-items-center gap-3 justify-content-lg-end">
            <span className="share-label">Share this post:</span>
            <div className="share-icons d-flex gap-2">
              <span className="icon-circle">
                <i className="fab fa-facebook-f"></i>
              </span>
              <span className="icon-circle">
                <i className="fab fa-x-twitter"></i>
              </span>
              <span className="icon-circle">
                <i className="fab fa-instagram"></i>
              </span>
              <span className="icon-circle">
                <i className="fab fa-tiktok"></i>
              </span>
              <span className="icon-circle">
                <i className="fab fa-snapchat-ghost"></i>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default BlogContent;
