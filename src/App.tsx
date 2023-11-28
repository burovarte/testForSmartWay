import "./App.css";
import { observer } from "mobx-react-lite";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import RepPage from "./pages/RepPage";

const App: React.FC = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Main />} />
				<Route path={`/rep/:repName`} element={<RepPage />} />
			</Routes>
		</Router>
	);
};

export default observer(App);
