import React, { useState, createContext } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
	const [expenses, setExpenses] = useState([
		{
			name: "Car Insurance",
			Catagory: "Auto & Transport",
			dollars: 100,
		},
		{
			name: "Gas & Fuel",
			Catagory: "Auto & Transport",
			dollars: 80,
		},
		{
			name: "Internet",
			Catagory: "Bills & Utilities",
			dollars: 70,
		},
		{
			name: "Rent",
			Catagory: "Bills & Utilities",
			dollars: 800,
		},
		{
			name: "Utilities",
			Catagory: "Bills & Utilities",
			dollars: 80,
		},
		{
			name: "Short Term Savings",
			Catagory: "Financial",
			dollars: 200,
		},
		{
			name: "Long Term Savings",
			Catagory: "Financial",
			dollars: 500,
		},
		{
			name: "Groceries",
			Catagory: "Food & Dining",
			dollars: 350,
		},
		{
			name: "Restaurants",
			Catagory: "Food & Dining",
			dollars: 100,
		},
	]);
	return (
		<ExpenseContext.Provider value={expenses}>
			{children}
		</ExpenseContext.Provider>
	);
};
