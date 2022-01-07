import React from "react";
import { useHistory } from "react-router-dom";
import "./css/main.css";
import Header from "./header";
import Footer from "./footer";
import { useEffect } from "react";
import AppointmentPage from "./appointmentpage";


const Homepage = ({ loggedIn, baseURL }) => {
	const history = useHistory();

	useEffect(() => {
		if (loggedIn.current) {
			setTimeout(() => {
				history.push("/appointmentpage");
			}, 100);
		}
	});

	const onAppointmentBook = () => {
		history.push("/appointments");
	};

	return !loggedIn.current ? (
		<React.Fragment>
			<Header />
			<div className={"services"} id={"services"}>
				<h1 id={"services-head"}>Best in Town</h1>
				<div className={"container1"}>
					<div className={"service"}>
						<i className={"fa fa-bed fa-3x"}></i>
						<h4>Emergencies</h4>
					</div>
					<div className={"service"}>
						<i className={"fa fa-ambulance fa-3x"}></i>
						<h4>Ambulance</h4>
					</div>
					<div className={"service"}>
						<i className={"fa fa-medkit fa-3x"}></i>
						<h4>Medical Kit</h4>
					</div>
				</div>
				<div className={"container2"}>
					<div className={"service"}>
						<i className={"fa fa-wheelchair fa-3x"}></i>
						<h4>Wheelchair</h4>
					</div>
					<div className={"service"}>
						<i className={"fas fa-flask fa-3x"}></i>
						<h4>Laboratory</h4>
					</div>
					<div className={"service"}>
						<i className={"fas fa-phone fa-3x"}></i>
						<h4>
							24x7
							<br />
							Helpline
						</h4>
					</div>
				</div>
			</div>
			<div id={"book-appointment"}>
				<h4 id={"book-apt-head"}>
					Its hassle free, book an appointment with our system online!
				</h4>
				<button id={"book-btn"} onClick={onAppointmentBook}>
					Book
				</button>
			</div>
			<Footer />
		</React.Fragment>
	) : (
		<AppointmentPage />
	);
};

export default Homepage;
