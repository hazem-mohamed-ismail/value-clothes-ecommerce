import "./BlogComments.css";
import MessageForm from "../../common/MessageForm/MessageForm";

const BlogComments = () => {
  return (
    <div className="blog-comments-container">
      <h2 className="comments-heading">03 Comments</h2>

      <div className="comment-item">
        <div className="comment-header">
          <img
            src="/src/assets/shared/avatar-2.jpg"
            alt="Guy Hawkins"
            className="comment-avatar"
          />
          <div className="comment-meta">
            <h4 className="comment-author fw-bold">Guy Hawkins</h4>
            <span className="comment-date">August 13, 2024</span>
          </div>
        </div>
        <p className="comment-text">
          I absolutely loved this article! The styling tips were super
          practical, and I finally understand how to mix streetwear pieces
          without overdoing it.
        </p>

        <div className="comment-reply">
          <div className="reply-header">
            <div className="reply-avatar-brand">
              <img
                src="/src/assets/shared/avatar-1.jpg"
                className="w-100 h-100  rounded-circle"
                alt=""
              />
            </div>
            <div className="comment-meta">
              <h4 className="comment-author fw-bold">Reply From Amerce</h4>
              <span className="comment-date">1 day ago</span>
            </div>
          </div>
          <p className="comment-text comment-reply-text">
            Thank you so much! We are glad you found it helpful streetwear is
            all about confidence and balance. Stay tuned for next week's trend
            guide!
          </p>
        </div>
      </div>

      <div className="comment-item">
        <div className="comment-header">
          <img
            src="/src/assets/shared/avatar-3.jpg"
            alt="Eleanor Pena"
            className="comment-avatar"
          />
          <div className="comment-meta">
            <h4 className="comment-author fw-bold">Eleanor Pena</h4>
            <span className="comment-date">3 days ago</span>
          </div>
        </div>
        <p className="comment-text">
          Great read! I've been looking for new outfit ideas, and this gave me
          tons of inspiration for my next shopping trip.
        </p>
      </div>

      <div className="leave-comment-box">
        <MessageForm
          title="Leave A Comment"
          subtitle="Share your thoughts below"
          buttonText="Post Comment"
        />
      </div>
    </div>
  );
};

export default BlogComments;
