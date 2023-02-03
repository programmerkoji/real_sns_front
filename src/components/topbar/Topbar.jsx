import React from "react";
import { Search, Chat, Notifications } from "@mui/icons-material";
import "./Topbar.css";

const Topbar = () => {
	return (
		<div className="topbarContainer">
			<div className="topbarLeft">
				<span className="logo">Real SNS</span>
			</div>
			<div className="topbarCenter">
				<div className="searchBar">
          <Search className="searchIcon" />
					<input
						type="text"
						className="searchInput"
						placeholder="探しものは何ですか？"
					/>
				</div>
			</div>
			<div className="topbarRight">
				<div className="topbarItemIcons">
					<div className="topbarIconItem">
						<Chat />
						<span className="topbarIconBadge">1</span>
					</div>
					<div className="topbarIconItem">
						<Notifications />
						<span className="topbarIconBadge">2</span>
					</div>
					<img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
				</div>
      </div>
		</div>
	);
};

export default Topbar;
