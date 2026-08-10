import "./Sidebar.css";

const categories = [
  { id: 1, label: "Style Inspiration", count: 112 },
  { id: 2, label: "Fashion Tips", count: 32 },
  { id: 3, label: "Trends & News", count: 42 },
  { id: 4, label: "Outfit Guides", count: 65 },
  { id: 5, label: "Sustainable Living", count: 13 },
];

const recentPosts = [
  {
    id: 1,
    image: new URL("../../../assets/shared/cate-1.jpg", import.meta.url).href,
    date: "13 August",
    title: "How to Build a Capsule Wardrobe That Fits Your Lifestyle",
  },
  {
    id: 2,
    image: new URL("../../../assets/shared/cate-2.jpg", import.meta.url).href,
    date: "15 August",
    title: "The Secret to Effortless Elegance in Every Season",
  },
  {
    id: 3,
    image: new URL("../../../assets/shared/cate-3.jpg", import.meta.url).href,
    date: "18 August",
    title: "Why Accessories Define More Than Just Your Outfit",
  },
  {
    id: 4,
    image: new URL("../../../assets/shared/cate-4.jpg", import.meta.url).href,
    date: "19 August",
    title: "From Work to Weekend: Outfits That Do It All",
  },
  {
    id: 5,
    image: new URL("../../../assets/shared/cate-5.jpg", import.meta.url).href,
    date: "21 August",
    title: "Weekend Essentials for a Stylish Capsule Closet",
  },
  {
    id: 6,
    image: new URL("../../../assets/shared/slider-1.jpg", import.meta.url).href,
    date: "23 August",
    title: "Key Accessories That Elevate Every Look",
  },
  {
    id: 7,
    image: new URL("../../../assets/shared/slider-2.jpg", import.meta.url).href,
    date: "25 August",
    title: "Layering Tips for Seamless Office-to-Evening Outfits",
  },
  {
    id: 8,
    image: new URL("../../../assets/shared/slider-3.jpg", import.meta.url).href,
    date: "27 August",
    title: "Sustainable Wardrobe Staples You Need This Season",
  },
];

const categoryItems = categories.map((category) => (
  <li key={category.id}>
    <span>{category.label}</span>{" "}
    <span className="count">({category.count})</span>
  </li>
));

const recentPostItems = recentPosts.map((post) => (
  <div key={post.id} className="recent-post-item">
    <img src={post.image} alt="post" />
    <div className="recent-post-info">
      <span className="recent-post-date">{post.date}</span>
      <h6>{post.title}</h6>
    </div>
  </div>
));

const Sidebar = () => {
  return (
    <aside className="blog-sidebar">
      <div className="sidebar-widget search-widget">
        <div className="search-input-wrapper">
          <input type="text" placeholder="Search..." className="search-input" />
          <span className="search-icon"><i className="fa-solid fa-magnifying-glass text-dark"></i></span>
        </div>
      </div>

      <div className="sidebar-widget">
        <h4 className="widget-title">Categories</h4>
        <ul className="categories-list">{categoryItems}</ul>
      </div>

      <div className="sidebar-widget">
        <h4 className="widget-title recent-post-title">Recent Posts</h4>
        <div className="recent-posts-list">{recentPostItems}</div>
      </div>

      <div className="sidebar-widget">
        <h4 className="widget-title">Popular Tag</h4>
        <div className="tags-cloud">
          <span className="tag-item">fashion</span>
          <span className="tag-item">style</span>
          <span className="tag-item">outfit</span>
          <span className="tag-item">trend</span>
          <span className="tag-item">elegance</span>
          <span className="tag-item">minimal</span>
          <span className="tag-item">luxury</span>
          <span className="tag-item">casual</span>
          <span className="tag-item">accessories</span>
          <span className="tag-item">sustainable</span>
          <span className="tag-item">wardrobe</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
