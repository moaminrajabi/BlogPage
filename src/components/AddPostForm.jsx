import React from "react";
import "../App.css";

function AddPostForm() {
  return (
    <div class="form-container">
      <form>
        <div class="form-group">
          <label className="lable" for="firstName">
            First Name
          </label>
          <input
            className="inputAddForm"
            type="text"
            id="firstName"
            placeholder="Enter your first name"
          />
        </div>
        <div class="form-group">
          <label className="lable" for="lastName">
            Last Name
          </label>
          <input
            className="inputAddForm"
            type="text"
            id="lastName"
            placeholder="Enter your last name"
          />
        </div>
        <div class="form-group">
          <label className="lable" for="email">
            Email
          </label>
          <input
            className="inputAddForm"
            type="email"
            id="email"
            placeholder="Enter your email"
          />
        </div>
        <div class="form-group">
          <label className="lable" for="password">
            Password
          </label>
          <input
            className="inputAddForm"
            type="password"
            id="password"
            placeholder="Enter your password"
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
