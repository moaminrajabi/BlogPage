import React from "react";

function PostCard({ title, description, author, tags, date, likes, image }) {
  return (
    <div className="post-card">
      <img src={image} alt={title} width="300px" />
      <h3>{title}</h3>
      <p className="desc">{description}</p>
      <div className="tags">
        {tags.map((tag) => (
          <span key={tag.id}>{tag}</span>
        ))}
      </div>
      <div className="info">
        <p className="one">
          <small>
            By {author} on {date}
          </small>
        </p>
        <p className="tow"> {likes} ❤️</p>
      </div>
    </div>
  );
}

export default PostCard;
