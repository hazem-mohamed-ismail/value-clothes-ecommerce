import BlogHeader from '../../components/BlogSingle/BlogHeader/BlogHeader';
import BlogContent from '../../components/BlogSingle/BlogContent/BlogContent';
import BlogComments from '../../components/BlogSingle/BlogComments/BlogComments';
import RelatedPosts from '../../components/BlogSingle/RelatedPosts/RelatedPosts';
import './BlogSingle.css';

const BlogSingle = () => {
  return (
    <section className="blog-single-page py-5">
      <div className="container">
        <BlogHeader />
        <BlogContent />
        <BlogComments />
        <RelatedPosts />
      </div>
    </section>
  );
};

export default BlogSingle;
