import "../css/Nav.css";
import { Link } from "react-router-dom";

export default function Nav() {
	const navStyle = {
		color: "white",
		listStyleType: "none",
	};

	return (
		<nav>
			<div className="logo">
				<Link to="/">
					<img src="https://www.svgrepo.com/show/256402/cat.svg" alt="" />
					<img src="https://www.svgrepo.com/show/256401/dog.svg" alt="" />
				</Link>
			</div>

			<ul>
				<Link style={navStyle} to="/">
					<li>Home</li>
				</Link>
				<Link style={navStyle} to="/cats">
					<li>Cats</li>
				</Link>
				<Link style={navStyle} to="/dogs">
					<li>Dogs</li>
				</Link>
			</ul>
		</nav>
	);
}
