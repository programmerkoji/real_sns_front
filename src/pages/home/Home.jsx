import React from "react";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Timeline from "../../components/timeline/TimeLine";
import Rightbar from "../../components/rightbar/Rightbar";
import "./Home.css";

const Home = () => {
	return (
		<>
			<Topbar />
			<div className="homeContainer">
				<Sidebar />
				<Timeline />
				<Rightbar />
			</div>
		</>
	);
};

export default Home;
