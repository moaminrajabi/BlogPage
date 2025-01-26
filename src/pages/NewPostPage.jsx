import React, { useState } from "react";
import AddPostForm from "../components/AddPostForm";

function NewPostPage() {
  const [posts, setPosts] = useState([]);
  return (
    <div>
      <h1 className="newPost">New Post</h1>
      <AddPostForm />
    </div>
  );
}

export default NewPostPage;
