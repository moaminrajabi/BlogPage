import React from "react";
import { getPosts } from "../data/PostData";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";

function HomePage() {
  const posts = getPosts();
  return (
    <div>
      <header>
        <input className="input" type="text" placeholder="Search..." />
        <Link className="button" to="/new-post">
          Add New Post
        </Link>
      </header>
      <div className="Home">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
