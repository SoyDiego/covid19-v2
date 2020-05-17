import React from "react";
import "./App.css";
import Title from "./Components/Title";
import Stats from "./Components/Stats";
// import flagWorld from "./Components/img/world.png";
// import flagArgentina from "./Components/img/ar.png";
// import flagSpain from "./Components/img/es.png";

function App() {
	const url = "https://corona.lmao.ninja/v2/";

	return (
		<>
			<div className="container">
				<Title />
				{/* <Stats url={url + "all"} /> */}
				<Stats url={url + "countries/argentina"} />
				{/* <Stats url={url + "countries/spain"} /> */}
			</div>
		</>
	);
}
export default App;
