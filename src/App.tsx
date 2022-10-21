import React, { useState, useEffect } from "react";
import "./App.css";
import Router from './views/route';
import Navbar from './components/navbar/navbar';
import Footer from "./components/footer/footer";


function App() {
	return (
		<>
			<Navbar />
			<Router />
			<Footer />
		</>
	);
}

export default App;
