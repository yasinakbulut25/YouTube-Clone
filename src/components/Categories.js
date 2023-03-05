import React from "react";
import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <div className="categories-area">
      <div className="category-scroll">
        <NavLink to="" className="category-box light-text second-bg">
          All
        </NavLink>
        <NavLink to="category1" className="category-box light-text second-bg">
          Gaming
        </NavLink>
        <NavLink to="category2" className="category-box light-text second-bg">
          Sports
        </NavLink>
        <NavLink to="category3" className="category-box light-text second-bg">
          Music
        </NavLink>
        <NavLink to="category4" className="category-box light-text second-bg">
          Web Site
        </NavLink>
        <NavLink to="category5" className="category-box light-text second-bg">
          Cars
        </NavLink>
        <NavLink to="category6" className="category-box light-text second-bg">
          Eating
        </NavLink>
        <NavLink to="category7" className="category-box light-text second-bg">
          Live
        </NavLink>
        <NavLink to="category8" className="category-box light-text second-bg">
          HTML
        </NavLink>
        <NavLink to="category9" className="category-box light-text second-bg">
          CSS
        </NavLink>
        <NavLink to="category10" className="category-box light-text second-bg">
          JavaScript
        </NavLink>
        <NavLink to="category11" className="category-box light-text second-bg">
          Web Development
        </NavLink>
        <NavLink to="category12" className="category-box light-text second-bg">
          Bootstrap
        </NavLink>
        <NavLink to="category13" className="category-box light-text second-bg">
          Tailwind
        </NavLink>
        <NavLink to="category14" className="category-box light-text second-bg">
          React
        </NavLink>
        <NavLink to="category15" className="category-box light-text second-bg">
          Frontend
        </NavLink>
        <NavLink to="category16" className="category-box light-text second-bg">
          Backend
        </NavLink>
        <NavLink to="category17" className="category-box light-text second-bg">
          Software
        </NavLink>
        <NavLink to="category18" className="category-box light-text second-bg">
          UI Design
        </NavLink>
      </div>
    </div>
  );
}

export default Categories;
