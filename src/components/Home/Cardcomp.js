import React from "react";
import "./Cardcomp.css";
import { Link } from "react-router-dom";
import bg1 from "../../Assests/cardimg1.webp";
import bg2 from "../../Assests/cardimg2.webp";
import bg3 from "../../Assests/cardimg3.webp";
import bg4 from "../../Assests/cardimg4.webp";

const Cardcomp = ({ blog }) => {
  console.log(blog);
  const { id, image, author, date, category, title, content } = blog;
  let bg = bg1;
  if (id % 1 === 0) bg = bg1;
  if (id % 2 === 0) bg = bg2;
  if (id % 3 === 0) bg = bg3;
  if (id % 4 === 0) bg = bg4;
  return (
    <div className="cardGroup">
      <div className="cardComp">
        <Link
          to={`/blogContent/${id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          {image ? (
            <img src={image} className="imgCard" alt="BlogImage" />
          ) : (
            <div
              className="imgCard"
              style={{ backgroundImage: "url(" + bg + ")" }}
            ></div>
          )}
          <div className="authorCard" style={{ textTransform: "uppercase" }}>
            POSTED BY :{author} | {date}
          </div>
          <div className="categoryCard" style={{ textTransform: "uppercase" }}>
            {category.trim() === "" ? "General" : category}
          </div>
          <div className="headingCard" style={{ textTransform: "uppercase" }}>
            {title}
          </div>
        </Link>
        <div className="contentCard">
          <p>{content}</p>
          <div className="iconCard">
            <i
              className="far fa-heart"
              style={{ fontSize: "15px", textAlign: "center" }}
            ></i>
            <i
              className="fas fa-comment-alt-lines"
              style={{ fontSize: "15px", textAlign: "center" }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cardcomp;
