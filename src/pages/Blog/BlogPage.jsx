import { useState } from "react";

import Stack from "@mui/material/Stack";
import MuiPagination from "@mui/material/Pagination";
import BlogCard from "../../components/BlogPage/BlogCard/BlogCard";
import Sidebar from "../../components/BlogPage/Sidebar/Sidebar";
import blogPosts from "../../data/blogPosts.json";
import "./BlogPage.css";

const BlogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postPerPage = 6;
  const lastPost = postPerPage * currentPage;
  const firstPost = lastPost - postPerPage;
  const pageCount = Math.ceil(blogPosts.length / postPerPage);

  let currentPosts = blogPosts.slice(firstPost, lastPost);

  return (
    <div className="container blog-page-container">
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <div className="row">
            {currentPosts.map((post) => {
              return (
                <div key={post.id} className="col-md-6 col-sm-12">
                  <BlogCard
                    image={post.image}
                    date={post.date}
                    id={post.id}
                    title={post.title}
                    description={post.description}
                  />
                </div>
              );
            })}
          </div>
          <Stack spacing={2} className="pagination-wrapper" sx={{ alignItems: "center" }}>
            <MuiPagination
              count={pageCount}
              variant="outlined"
              shape="rounded"
              className="pagination-main"
              page={currentPage}
              onChange={(e, value) => {
                setCurrentPage(value);
              }}
            />
          </Stack>
        </div>

        <div className="col-lg-4 col-md-12 d-none d-lg-block">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
