import React, { useState } from "react";
import { addNewPost } from "../data/PostData";
import { useNavigate } from "react-router-dom";

function AddPostForm() {
  const navigate = useNavigate();

  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!author || !title || !description) {
      alert("Please fill in all required fields!");
      return;
    }

    addNewPost({
      author,
      title,
      description,
      tags: tags.split(",").map((tag) => tag.trim()),
      image: preview,
    });

    setAuthor("");
    setTitle("");
    setDescription("");
    setTags("");
    setImage(null);
    setPreview(null);
    alert("Post added successfully!");

    navigate("/");
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Upload Image</label>
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </div>
      {preview && (
        <div>
          <img
            src={preview}
            alt="Preview"
            style={{ width: "200px", height: "auto", marginTop: "10px" }}
          />
        </div>
      )}
      <div className="form-group">
        <label>Author</label>
        <input
          className="inputAddForm"
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div className="form-group">
        <label>Title</label>
        <input
          className="inputAddForm"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the title"
        />
      </div>
      <div className="form-group">
        <label>Description</label>
        <input
          className="inputAddForm"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter the description"
        />
      </div>
      <div className="form-group">
        <label>Tags</label>
        <input
          className="inputAddForm"
          type="text"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          placeholder="Enter tags (comma separated)"
        />
      </div>
      <button className="button" type="submit">
        Publish Post
      </button>
    </form>
  );
}

export default AddPostForm;
