import React from "react";
import CatData from "../components/CatData";
import "../css/Cat.css";

const Cat = () => {
	return (
		<div className="cat">
			<h1>CATS!</h1>
			<CatData />
		</div>
	);
};

export default Cat;
