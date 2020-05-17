import React, { useState, useEffect } from "react";
import Chart from "react-google-charts";

const Map = ({ url, url2 }) => {
	const [values, setValues] = useState([]);
	const [activeCases, setActiveCases] = useState([])

	useEffect(() => {
		fetch(url)
			.then((response) => response.json())
			.then((data) =>setValues(data.map(({ country, active, deaths }) => [country, active, deaths])))
			.catch(error => console.log('error', error))

		fetch(url2)
			.then((response) => response.json())
			.then((data) => setActiveCases(data))
			.catch(error => console.log('error', error))
	}, [url, url2]);

	return (
		<div className="col-xl-12 text-center mb-3">
			<h4>Hover on map to see...</h4>
			<Chart
				width={"100%"}
				height={"350px"}
				chartType="GeoChart"
				options={{
					displayMode: "regions",
					backgroundColor: "#81d4fa",
					colorAxis: {
						values: [4000, 20000, 50000, 100000, activeCases.active],
						colors: ["#00bc8c", "#f39c12", "#e74c3c", "red", "darkred"],
					},
				}}
				data={[["Country", "Active cases", "Deaths"], ...values]}
				// Note: you will need to get a mapsApiKey for your project.
				// See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
				mapsApiKey="AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY"
				rootProps={{ "data-testid": "1" }}
			/>
		</div>
	);
};
export default Map;
