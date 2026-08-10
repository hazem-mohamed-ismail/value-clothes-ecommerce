import "./RelatedPosts.css";

const relatedPosts = [
  {
    id: 1,
    image: "/src/assets/shared/cate-4.jpg",
    date: "15 August",
    title: "The Secret to Effortless Elegance in Every Season",
    description:
      "Discover key layering techniques and fabric choices that keep you chic year-round.",
  },
  {
    id: 2,
    image: "/src/assets/shared/cate-5.jpg",
    date: "18 August",
    title: "Why Accessories Define More Than Just Your Outfit",
    description:
      "Explore how small details like jewelry and bags can transform your entire look.",
  },
  {
    id: 3,
    image: "/src/assets/shared/cate-1.jpg",
    date: "19 August",
    title: "From Work to Weekend: Outfits That Do It All",
    description:
      "Find versatile looks that transition seamlessly from office hours to after-hours fun.",
  },
];

const RelatedPosts = () => {
  const relatedRender = relatedPosts.map((post) => (
    <article key={post.id} className="col-lg-4 col-md-6">
      <div className="related-post-card">
        <div className="related-post-image rounded-4">
          <img src={post.image} alt={post.title} />
        </div>
        <div className="related-post-card-body">
          <span className="related-post-date">{post.date}</span>
          <h3 className="related-post-title">{post.title}</h3>
          <p className="related-post-desc">{post.description}</p>
        </div>
      </div>
    </article>
  ));

  return (
    <section className="related-posts-section pt-5 pb-2">
      <div className="related-posts-head text-center mx-auto">
        <h2>Related Posts</h2>
        <p>
          Discover more stories and style tips to keep your fashion inspiration
          flowing.
        </p>
      </div>

      <div className="row g-5">{relatedRender}</div>
    </section>
  );
};

export default RelatedPosts;
