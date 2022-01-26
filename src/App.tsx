import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import HomePage from "./pages/Home";
import { TradePage } from "./pages";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path="/"
					element={
						<Layout>
							<HomePage />
						</Layout>
					}
				/>
				<Route
					path="/trade"
					element={
						<Layout>
							<TradePage />
						</Layout>
					}
				/>
			</Routes>
		</Router>
	);
}

export default App;
