import React from "react";
import { useSelector } from "react-redux";
import Navbarcomp from "../Navbar/Navbarcomp";
import Cardcomp from "./Cardcomp";
import Techforumcomp from "./Techforumcomp";
import "./Home.css";

const Home = () => {
  const blogs = useSelector((state) => state.blogReducer);
  window.scrollTo(0, 0);
  return (
    <div>
      <Navbarcomp />
      <Techforumcomp />
      <div className="allCards">
        {blogs.map((item) => {
          console.log(item.id);
          return <Cardcomp key={item.id} blog={item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
