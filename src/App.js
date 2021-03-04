import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Home from "./views/Home";
import Cat from "./views/Cat";
import Dog from "./views/Dog";
import Footer from "./components/Footer";

export default function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/cats" exact component={Cat} />
					<Route path="/dogs" exact component={Dog} />
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}
