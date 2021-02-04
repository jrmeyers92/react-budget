import React, { useState, createContext } from "react";

export const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
	const [expenses, setExpenses] = useState([
		{
			name: "Car Insurance",
			Catagory: "Auto & Transport",
			dollars: 100,
			spent: 100,
		},
		{
			name: "Gas & Fuel",
			Catagory: "Auto & Transport",
			dollars: 80,
			spent: 70,
		},
		{
			name: "Internet",
			Catagory: "Bills & Utilities",
			dollars: 70,
			spent: 0,
		},
		{
			name: "Rent",
			Catagory: "Bills & Utilities",
			dollars: 800,
			spent: 0,
		},
		{
			name: "Utilities",
			Catagory: "Bills & Utilities",
			dollars: 80,
			spent: 0,
		},
		{
			name: "Short Term Savings",
			Catagory: "Financial",
			dollars: 200,
			spent: 0,
		},
		{
			name: "Long Term Savings",
			Catagory: "Financial",
			dollars: 500,
			spent: 0,
		},
		{
			name: "Groceries",
			Catagory: "Food & Dining",
			dollars: 350,
			spent: 0,
		},
		{
			name: "Restaurants",
			Catagory: "Food & Dining",
			dollars: 100,
			spent: 39,
		},
	]);
	return (
		<ExpenseContext.Provider value={expenses}>
			{children}
		</ExpenseContext.Provider>
	);
};
