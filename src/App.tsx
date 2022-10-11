import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import HomePage from "./views/homePage/homePage";
import DetailsPage from "./views/detailsPage/detailsPage";
import AboutPage from "./views/aboutPage/aboutPage";
import Footer from "./components/footer/footer";
import ErrorPage from "./views/errorPage/errorPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={
						<React.Fragment>
							{" "}
							<Navbar />
							<Banner />
							<HomePage />
							<Footer />{" "}
						</React.Fragment>
					}
				/>
				<Route
					path="/Logements/:currentId"
					element={
						<React.Fragment>
							{" "}
							<Navbar />
							<DetailsPage />
							<Footer />{" "}
						</React.Fragment>
					}
				/>
				<Route
					path="/about"
					element={
						<React.Fragment>
							{" "}
							<Navbar />
							<Banner /> <AboutPage />{" "}
							<Footer />
						</React.Fragment>
					}
				/>
				<Route
					path="*"
					element={
						<React.Fragment>
							{" "}
							<Navbar />
							<ErrorPage />
							<Footer />{" "}
						</React.Fragment>
					}
				/>
			</Routes>
			

		</BrowserRouter>
	);
}

export default App;
