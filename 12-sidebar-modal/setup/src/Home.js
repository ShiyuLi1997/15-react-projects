import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Home = () => {
	const { openSidebar, openModal } = useGlobalContext();
	return (
		<main>
			<button onClick={openSidebar} className="sidebar-toggle">
				<FaBars />
			</button>
		</main>
	);
};

export default Home;
