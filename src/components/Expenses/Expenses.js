import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses({ expenses }) {
  const [year, setYear] = useState("2020");
  const selectYearHandler = (year) => {
    setYear(year);
  };

  const newArray = expenses.filter((expense) => {
    return expense.date.getFullYear() === parseInt(year);
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onSelectYear={selectYearHandler} selected={year} />
        <ExpenseChart expenses={newArray} />
        <ExpenseList items={newArray} />
      </Card>
    </div>
  );
}

export default Expenses;
