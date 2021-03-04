import React, { useState } from "react";
import "../css/Home.css";

const Home = () => {
	const [bestPet, setBestPet] = useState(false);

	return (
		<div className="home-container">
			<h1>Have you ever wondered which pet ROCKS most? 🤘</h1>
			<h2>Dogs or cats?</h2>
			<div>
				<h3>Let's find out! Click on the button below.</h3>
				<button className="best-pet-btn" onClick={() => setBestPet(true)}>
					{bestPet ? "Wasn't it obvious?" : "Click to Find out!"}
				</button>
				<br />
				{bestPet ? (
					<img
						className="best-pet"
						src="https://images.unsplash.com/photo-1595433707802-6b2626ef1c91?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
						alt="best pet?"
					/>
				) : (
					<p>Drumroll please...</p>
				)}
			</div>
		</div>
	);
};

export default Home;
