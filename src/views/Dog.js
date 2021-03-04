import React from "react";
import DogData from "../components/DogData";
import "../css/Dog.css";

const Dog = () => {
	return (
		<div className="dog">
			<h1>DOGS!</h1>
			<DogData />
		</div>
	);
};

export default Dog;
