import { useState, useEffect } from "react";
import Form from "./components/form/form";
import CategoryPicker from "./components/category-picker/category-picker";
import Table from "./components/table/table";

type Expense = {
  id: number;
  description: string;
  amount: string;
  category: string;
};

const defaultExpenses = [
  { id: 0, description: "Milk", amount: "5.00", category: "Groceries" },
  { id: 1, description: "Eggs", amount: "10.00", category: "Groceries" },
  { id: 2, description: "Bread", amount: "2.50", category: "Groceries" },
  { id: 3, description: "Soap", amount: "3.50", category: "Utilities" },
  {
    id: 4,
    description: "Movie",
    amount: "10.00",
    category: "Entertainment",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [category, setCategory] = useState<string>("all");

  useEffect(() => {
    setExpenses(defaultExpenses);
  }, []);

  return (
    <>
      <div className="d-flex flex-row justify-content-between">
        <Form expenses={expenses} setExpenses={setExpenses} />
        <div
          className="border-start p-2"
          style={{ width: "100vw", height: "100vh" }}
        >
          <CategoryPicker setCategory={setCategory} />
          <Table
            expenses={expenses}
            setExpenses={setExpenses}
            category={category}
          />
        </div>
      </div>
    </>
  );
};

export default App;
