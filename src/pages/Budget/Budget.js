import { Typography, Grid, Paper, Button } from "@material-ui/core";
import React, { useContext } from "react";
import { ExpenseContext } from "../../State/ExpenseContext";
import { makeStyles } from "@material-ui/core/styles";
import ProgressBar from "./Components/ProgressBar";

const useStyles = makeStyles(() => ({
	budgetDiv: {
		height: "100%",
		width: "100vw",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		backgroundColor: "#ffffff",
	},
	paper: {
		padding: 20,
		marginTop: 20,
	},
	expense: {
		display: "flex",
		flexDirection: "column",
		marginBottom: 10,
		marginTop: 20,
	},
	expenseText: {
		width: "25vw",
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	catagory: {
		color: "#444",
		marginRight: 20,
	},
}));

const Budget = () => {
	const classes = useStyles();
	const expenses = useContext(ExpenseContext);
	const expense = expenses.map((expense) => {
		const percent = (expense.spent / expense.dollars) * 350 + "px";
		return (
			<div className={classes.expense} key={expense.name}>
				<div className={classes.expenseText}>
					<Typography variant='subtitle1'>
						{expense.Catagory}: <strong>{expense.name}</strong>
					</Typography>
					<Typography>
						<strong>${expense.spent}</strong> <em>of</em>{" "}
						<strong>${expense.dollars}</strong>
					</Typography>
				</div>
				<ProgressBar percent={percent} />
			</div>
		);
	});

	return (
		<div className={classes.budgetDiv}>
			<Grid xs={10} md={8}>
				<Paper className={classes.paper}>
					<Button variant='outlined'>Create a Budget</Button>
					{expense}
				</Paper>
			</Grid>
		</div>
	);
};

export default Budget;
