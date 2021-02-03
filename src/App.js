import React, { useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import Nav from "./components/Nav";
import SecondaryNav from "./components/SecondaryNav";
import Budget from "./pages/Budget/Budget";
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { ExpenseProvider } from "./State/ExpenseContext";

const useStyles = makeStyles((theme) => ({
	App: {
		backgroundColor: "rgb(250,250,250)",
	},
}));

function App() {
	const classes = useStyles();
	const [userName, setUserName] = useState("");
	const [cash, setCash] = useState(3404.49);
	const [creditCardDebt, setCreditCardDebt] = useState(394.49);

	const setTheUserName = (name) => {
		setUserName(name);
	};

	return (
		<div className={classes.App}>
			<Switch>
				<Route exact path='/'>
					<Nav userName={userName} />
					<SecondaryNav />
					<Login setTheUserName={setTheUserName} />
				</Route>

				<Route path='/overView'>
					<Nav userName={userName} />
					<SecondaryNav />
					<Overview />
				</Route>
				<ExpenseProvider>
					<Route path='/budget'>
						<Nav userName={userName} />
						<SecondaryNav />
						<Budget />
					</Route>
				</ExpenseProvider>
			</Switch>
		</div>
	);
}

export default App;
