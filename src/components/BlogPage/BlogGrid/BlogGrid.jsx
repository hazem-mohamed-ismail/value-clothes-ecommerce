import BlogCard from '../BlogCard/BlogCard';
import './BlogGrid.css';
import slider1 from '../../../assets/shared/slider-1.jpg';
import slider2 from '../../../assets/shared/slider-2.jpg';
import slider3 from '../../../assets/shared/slider-3.jpg';
import cate1 from '../../../assets/shared/cate-1.jpg';
import cate2 from '../../../assets/shared/cate-2.jpg';
import cate3 from '../../../assets/shared/cate-4.jpg';

const blogPosts = [
  {
    id: 1,
    image: slider1,
    date: '13 August',
    title: 'How to Build a Capsule Wardrobe That Fits Your Lifestyle',
    description: 'Learn the art of mixing timeless basics with statement pieces for effortless, everyday style.',
  },
  {
    id: 2,
    image: slider2,
    date: '15 August',
    title: 'The Secret to Effortless Elegance in Every Season',
    description: 'Discover key layering techniques and fabric choices that keep you chic year-round.',
  },
  {
    id: 3,
    image: slider3,
    date: '18 August',
    title: 'Why Accessories Define More Than Just Your Outfit',
    description: 'Explore how small details like jewelry and bags can transform your entire look.',
  },
  {
    id: 4,
    image: cate1,
    date: '19 August',
    title: 'From Work to Weekend: Outfits That Do It All',
    description: 'Find versatile looks that transition seamlessly from office hours to after-hours fun.',
  },
  {
    id: 5,
    image: cate2,
    date: '22 August',
    title: 'Mastering Color Palettes for a Modern Wardrobe',
    description: 'Understand how to blend tones and textures to express your personality through fashion.',
  },
  {
    id: 6,
    image: cate3,
    date: '24 August',
    title: 'Sustainable Fashion Choices That Never Go Out of Style',
    description: 'Learn how to shop smarter with eco-friendly pieces that look good and do good.',
  },
];

const blogCards = blogPosts.map((post) => (
  <div key={post.id} className="col-md-6 col-sm-12">
    <BlogCard
      image={post.image}
      date={post.date}
      title={post.title}
      description={post.description}
    />
  </div>
));

const BlogGrid = () => {
  return <div className="row">{blogCards}</div>;
};

export default BlogGrid;
