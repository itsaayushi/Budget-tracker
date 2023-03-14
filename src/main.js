import React from "react";
import Chart from "./Chart";
import Table from "./Table";
import TotalIncome from "./UI elements/TotalIncome";
import Expenses from "./UI elements/Expenses";
import AvailableBalance from "./UI elements/AvailableBalance";
import Response from "./data.json";

import { useState } from "react";

export default function Main() {
  const [dataArray, setdataArray] = useState(Response);
  const TotalincomeArray = dataArray.data.filter(function (el) {
    return el.Status === "income";
  });

  var total = 0;
  const TOTAL_INCOME = (function total_Income() {
    for (var i = 0; i < TotalincomeArray.length; i++) {
      total = total + TotalincomeArray[i].Price;
    }
    return total;
  })();

  const ExpenseArray = dataArray.data.filter(function (el) {
    return el.Status === "expense";
  });

  var totalExpense = 0;
  const TOTAL_EXPENSE = (function total_Expense() {
    for (var i = 0; i < ExpenseArray.length; i++) {
      totalExpense = totalExpense + ExpenseArray[i].Price;
    }
    return totalExpense;
  })();

  const Available_Balance = Number(TOTAL_INCOME) - Number(TOTAL_EXPENSE);
  console.log(AvailableBalance);

  return (
    <div className="componentclass">
      <h2>OverView</h2>
      <h3>Summary</h3>
      <div className="cardclass">
        <TotalIncome total_income={TOTAL_INCOME} />
        <Expenses expense={TOTAL_EXPENSE} />
        <AvailableBalance availablebalance={Available_Balance} />
      </div>

      {/* <div className="main-Ui">
        <h2>Current Amount</h2>
        <span>₹20000</span>
      </div> */}
      <Chart />
      <Table />
    </div>
  );
}
