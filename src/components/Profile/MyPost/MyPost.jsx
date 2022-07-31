import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = () => {
  return (
    <div>
      my post
      <div>New post</div>
      <div className={s.posts}>
        <Post/>
        <Post/>
      </div>
    </div>
  );
};

export default MyPost;
