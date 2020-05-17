import React from "react";
import "./App.css";
import Title from "./Components/Title";
import Stats from "./Components/Stats";
import Map from "./Components/Map"
import flagWorld from "./Components/img/world.png";

function App() {
	const url = "https://corona.lmao.ninja/v2/";

	return (
		<>
			<div className="container">
				<Title />
				<Map url={url + "countries"} url2={url + "all"} />
				<Stats url={url + "all"} flagWorld={flagWorld} />
				<Stats url={url + "countries/argentina"} />
				<Stats url={url + "countries/spain"} />
			</div>
		</>
	);
}
export default App;
