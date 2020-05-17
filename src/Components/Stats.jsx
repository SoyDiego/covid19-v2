import React, { useState, useEffect } from "react";
import moment from '../../node_modules/moment/dist/moment'

const Stats = ({ url, flagWorld}) => {
	const [stats, setStats] = useState(null);

	const getData = async () => {
		const data = await fetch(url);
		const json = await data.json();
		setStats(json);
	};

	useEffect(() => {
		getData();
	},);

	return (
		stats &&(
		<>
			<div className="col-xl-12 text-center mb-3">
				<img className="img-fluid" src={flagWorld || stats.countryInfo.flag} alt="" width="150" />
			</div>
			<div className="col-xl-12 col-md-6 text-center mb-5">
				<div id="divWorld" className="card mb-2">
					<div className="row no-gutters">
						<div className="col-md-2">
							<div className="card-body bg-primary">
								<h5 className="card-title">Total Cases</h5>
								<p id="totalCasesW" className="card-text">
									{stats.cases}
								</p>
							</div>
						</div>
						<div className="col-md-2">
							<div className="card-body bg-success">
								<h5 className="card-title">Recovered</h5>
								<p id="recoveredW" className="card-text">
									{stats.recovered}
								</p>
							</div>
						</div>

						<div className="col-md-4">
							<div className="card-body bg-warning">
								<h5 className="card-title">Today Cases</h5>
								<p id="totalCasesW" className="card-text">
									{stats.todayCases}
								</p>
							</div>
						</div>
						<div className="col-md-2">
							<div className="card-body bg-danger">
								<h5 className="card-title">Deaths</h5>
								<p id="deathsW" className="card-text">
									{stats.deaths}
								</p>
							</div>
						</div>

						<div className="col-md-2">
							<div className="card-body bg-secondary">
								<h5 className="card-title">Active</h5>
								<p id="activeW" className="card-text">
									{stats.active}
								</p>
							</div>
						</div>

						<div className="col-xl-12 text-center">
							<p className="card-text">
								<small id="updateW" className="text-muted">
									Last updated: {moment(stats.updated).fromNow()}
								</small>
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	));
};

export default Stats;
