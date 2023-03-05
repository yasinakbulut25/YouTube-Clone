import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function PostItem({ post }) {
  const [postOptionsControl, setPostOptionsControl] = useState(false);
  const controlPostOptions = () => setPostOptionsControl(!postOptionsControl);

  return (
    <div className="post-box">
      <div className="post-img">
        <img
          src={require("../assets/images/posts/" + post.id + ".png")}
          alt="post"
        />
        <div className="post-time">
          <span>{post.time}</span>
        </div>
      </div>
      <div className="post-detail">
        <div className="post-info">
          <div className="post-user">
            <img
              src={require("../assets/images/profiles/" + post.id + ".png")}
              alt="user profile"
            />
          </div>
          <div className="post-texts">
            <h3 className="post-title">{post.title}</h3>
            <Link className="channel-name">
              Yasin Akbulut
              <i className="material-icons" title="Verified">
                check_circle
              </i>
            </Link>
            <div className="watched">
              <span>153K views</span>
              <span>2 months ago</span>
            </div>
          </div>
        </div>
        <div className="post-options">
          <i onClick={controlPostOptions} className="material-icons light-text">
            more_vert
          </i>
          {postOptionsControl ? (
            <div className="options-menu">
              <Link className="light-text">
                <i className="material-icons">playlist_play</i> Add List
              </Link>
              <Link className="light-text">
                <i className="material-icons">vertical_align_bottom</i>
                Download
              </Link>
              <Link className="light-text">
                <i className="material-icons">share</i> Share
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
