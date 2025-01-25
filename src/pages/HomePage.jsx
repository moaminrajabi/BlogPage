import React from "react";
import { posts } from "../data/PostData";
import PostCard from "../components/PostCard";

function HomePage() {
  return (
    <div className="Home" >
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
}

export default HomePage;
