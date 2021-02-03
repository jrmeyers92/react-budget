import { makeStyles } from "@material-ui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
	innerGrid: {
		padding: "2rem",
	},
	button: {
		color: "#333",
		margin: "1rem",
	},
	addIcon: {
		marginRight: ".5rem",
	},
	paper: {
		height: "70vh",
	},
}));

const Budget = () => {
	const classes = useStyles();
	return <div>hi</div>;
};

export default Budget;
