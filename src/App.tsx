import { QueryClient, QueryClientProvider } from "react-query";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Layout } from "./components";
import HomePage from "./pages/Home";
import { TradePage } from "./pages";
import { useStore } from "./utils/store";

const queryClient = new QueryClient();

function App() {
	const isUserLoggedIn = useStore((state) => state.loggedIn);

	return (
		<QueryClientProvider client={queryClient}>
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
					{isUserLoggedIn && (
						<Route
							path="/trade"
							element={
								<Layout>
									<TradePage />
								</Layout>
							}
						/>
					)}
				</Routes>
			</Router>
		</QueryClientProvider>
	);
}

export default App;
