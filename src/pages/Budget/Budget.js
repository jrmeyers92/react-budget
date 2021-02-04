import { Typography } from "@material-ui/core";
import React, { useContext } from "react";
import { ExpenseContext } from "../../State/ExpenseContext";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	App: {
		expense: {
			display: "flex",
			flexDirection: "row",
			marginLeft: 100,
		},
		name: {
			display: "inline-block",
		},
	},
}));

const Budget = () => {
	const classes = useStyles();
	const expenses = useContext(ExpenseContext);
	const expense = expenses.map((expense) => {
		return (
			<div className={classes.expense}>
				<Typography variant='subtitle2' className={classes.name}>
					{expense.Catagory}:
				</Typography>
				<Typography variant='subtitle1'>{expense.name}</Typography>
			</div>
		);
	});

	return <div>{expense}</div>;
};

export default Budget;
