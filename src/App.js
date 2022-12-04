import "./App.css";
import { Route, Routes } from "react-router-dom";

import { Login, Signup, Stake, Game, Congratulations } from "./Components/pages";

function App() {
	return (
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Signup />} />
				<Route path="/stake" element={<Stake />} />
				<Route path="/game" element={<Game />} />
				<Route path="/winner" element={<Congratulations />} />
			</Routes>
	);
}

export default App;
