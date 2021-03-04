import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/DogData.css";

const DogData = () => {
	const [dogData, setDogData] = useState([]);

	const fetchDogData = async () => {
		const response = await axios.get("https://dog.ceo/api/breeds/image/random");

		setDogData(response.data);
	};

	useEffect(() => {
		fetchDogData();
	}, []);

	console.log(dogData);

	return (
		<div className="dog-data-container">
			<div className="random-dogs">
				<h1>Random Dogs!</h1>
				<img className="dog-img" src={dogData?.message} alt="" />
				<button className="dog-btn" onClick={fetchDogData}>
					Get Random Dog
				</button>
			</div>
		</div>
	);
};

export default DogData;
