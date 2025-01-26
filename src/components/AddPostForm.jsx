import React, { useState } from "react";
import "../App.css";

function AddPostForm({ onAddPost }) {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPost({ title, description, tags: tags.split(",") });
    setTitle("");
    setDescription("");
    setTags("");
  };
  return (
    <div class="form-container">
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label className="lable" for="author">
            Author
          </label>
          <input
            className="inputAddForm"
            type="text"
            id="firstName"
            placeholder="Enter your name"
          />
        </div>
        <div class="form-group">
          <label className="lable" for="title">
            Title
          </label>
          <input
            className="inputAddForm"
            type="text"
            id="lastName"
            placeholder="Enter your title"
          />
        </div>
        <div class="form-group">
          <label className="lable" for="description">
            Description
          </label>
          <input
            className="inputAddForm"
            type="email"
            id="email"
            placeholder="Enter your description"
          />
        </div>
        <div class="form-group">
          <label className="lable" for="password">
            Tags
          </label>
          <input
            className="inputAddForm"
            type="password"
            id="password"
            placeholder="Enter your Tags"
          />
        </div>
        <button className="button" type="submit">
          Publish post
        </button>
      </form>
    </div>
  );
}

export default AddPostForm;
