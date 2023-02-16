import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import "./BlogContent.css";

const BlogContent = () => {
  const { id } = useParams();

  const blogs = useSelector((state) => state.blogReducer);
  return (
    <div>
      <br />
      <br />
      {blogs
        .filter((item) => item.id === Number(id))
        .map((item) => {
          return (
            <div key={item.id}>
              <h2 className="title">{item.title}</h2>
              <div className="author">
                By: <span className="authorName">{item.author}</span>
              </div>
              <div className="date">
                Published On: <span className="dateName">{item.date}</span>
              </div>

              <div className="category">
                Category:
                <span className="categoryName">{item.category}</span>
              </div>
              <div className="content">{item.content}</div>
            </div>
          );
        })}
    </div>
  );
};

export default BlogContent;
