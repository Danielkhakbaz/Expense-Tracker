type Expense = {
  id: number;
  description: string;
  amount: string;
  category: string;
};

type Props = {
  expenses: Expense[];
  setExpenses: (updatedExpenses: Expense[]) => void;
  category: string;
};

const Table = ({ expenses, setExpenses, category }: Props) => {
  const filteredExpenses = expenses.filter((expense: Expense) => {
    return category === "all"
      ? expense
      : expense.category.toLowerCase() === category && expense;
  });

  const handleDeleteButton = (id: number) => {
    const updatedExpenses = expenses.filter((item) => item.id !== id);

    setExpenses(updatedExpenses);
  };

  return (
    <>
      {filteredExpenses.length ? (
        <table className="table table-bordered text-center align-middle mt-2">
          <thead>
            <tr>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
              <th scope="col">Category</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>
            {filteredExpenses.map((expense, index) => (
              <tr key={index}>
                <td>{expense.description}</td>
                <td>{`${expense.amount}$`}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteButton(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h4 className="p-2">No Items here :(</h4>
      )}
    </>
  );
};

export default Table;
