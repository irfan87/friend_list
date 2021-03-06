import React from "react";

import { Container } from "react-bootstrap";

import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen";

function App() {
	return (
		<div className="app">
			<Header />
			<main className="py-3">
				<Container>
					<HomeScreen />
				</Container>
			</main>
			<Footer />
		</div>
	);
}

export default App;
