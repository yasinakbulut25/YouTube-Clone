import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import PostItem from "./PostItem";

function Posts() {
  const { dummyPosts } = useContext(AppContext);
  return (
    <div className="posts-area">
      <div className="post-boxes">
        {dummyPosts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}

export default Posts;
