import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/CatData.css";

const CatData = () => {
	const [catData, setCatData] = useState([]);
	const [searchTerm, setSearchTerm] = useState("");
	const [catBreed, setCatBreed] = useState([]);

	const fetchCatData = async () => {
		const response = await axios.get("https://api.thecatapi.com/v1/images/search");
		const searchResponse = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${searchTerm}`);
		setCatData(response.data);
	};

	const fetchSearchData = async () => {
		const searchResponse = await axios.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${searchTerm}`);

		setCatBreed(searchResponse.data);
	};

	const handleInputChange = (e) => {
		setSearchTerm(e.target.value);
	};

	useEffect(() => {
		fetchCatData();
		fetchSearchData();
	}, []);

	return (
		<div className="cat-data-container">
			<div className="random-cats">
				<h1 className="title">Random Cats!</h1>
				<img className="cat-img" src={catData[0]?.url} alt="" />
				<button className="cat-btn" onClick={fetchCatData}>
					Get Random Cat
				</button>
			</div>
			<div className="cat-breed">
				<h1>Search image of cat breed</h1>
				<p>Enter a breed ID..., e.g., 'beng'</p>
				<input type="text" placeholder="Enter breed ID" onChange={handleInputChange} />
				<button className="cat-btn" onClick={fetchSearchData}>
					Search
				</button>
				<p>
					See a list of breeds IDs here (right panel): <a href="https://codebeautify.org/jsonviewer/cb4f9ca6"> Breeds IDs</a>
				</p>
				<img className="cat-img" src={catBreed[0]?.url} alt="" />
			</div>
		</div>
	);
};

export default CatData;
