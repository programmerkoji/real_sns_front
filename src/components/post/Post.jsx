import { MoreVert } from "@mui/icons-material";
import React from "react";
import "./Post.css";
import { Users } from "../../dummyData";

export default function Post({post}) {
  const userInfo = Users.filter((user) => user.id === post.id);

	return (
		<div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="./assets/person/1.jpeg" alt="" className="postProfileImg" />
            <span className="postUsername">{ userInfo[0].username }</span>
            <span className="postDate">{ post.date }</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{ post.desc }</span>
          <img src={post.photo} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src={ userInfo[0].profilePicture } alt="" className="likeIcon" />
            <span className="postLikeCounter">{ post.like }がいいねを押しました</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment}:コメント</span>
          </div>
        </div>
      </div>
		</div>
	);
}
