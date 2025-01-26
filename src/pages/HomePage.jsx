import React, { useState } from "react";
import { getPosts } from "../data/PostData";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";

function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const posts = getPosts();

  const filterdPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <header>
        <input
          className="input"
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Link className="button" to="/new-post">
          Add New Post
        </Link>
      </header>
      <div className="Home">
        {filterdPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
