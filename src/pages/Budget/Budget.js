import React, { useContext } from "react";
import { ExpenseContext } from "../../State/ExpenseContext";

const Budget = () => {
	const expenses = useContext(ExpenseContext);
	const title = expenses.map((expense) => {
		return <h1>{expense.name}</h1>;
	});

	return <div>{title}</div>;
};

export default Budget;
