import { useForm } from "react-hook-form";

type Expense = {
  id: number;
  description: string;
  amount: number;
  category: string;
};

type Props = {
  expenses: Expense[];
  setExpenses: (updatedExpenses: Expense[]) => void;
};

const Form = ({ expenses, setExpenses }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddNewExpense = ({ description, amount, category }: any) => {
    const newExpense = {
      id: expenses.length,
      description,
      amount,
      category,
    };

    const updatedExpenses = [...expenses, newExpense];

    setExpenses(updatedExpenses);
  };

  return (
    <>
      <div
        className="border-end p-2"
        style={{ width: "100vw", height: "100vh" }}
      >
        <form
          onSubmit={handleSubmit(({ description, amount, category }: any) =>
            handleAddNewExpense({ description, amount, category })
          )}
        >
          <div className="mb-3">
            <label htmlFor="description_form" className="form-label">
              Description
            </label>
            <input
              id="description_form"
              className="form-control"
              type="text"
              {...register("description", {
                required: "Description is required!",
                minLength: {
                  value: 6,
                  message: "Min Length is 6!",
                },
              })}
            />
            {errors.description && (
              <p className="alert alert-danger mt-1">
                {errors.description?.message as any}
              </p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="amount_form" className="form-label">
              Amount
            </label>
            <input
              id="amount_form"
              className="form-control"
              type="number"
              step="0.01"
              {...register("amount", {
                required: "Amount is required!",
              })}
            />
            {errors.amount && (
              <p className="alert alert-danger mt-1">
                {errors.amount?.message as any}
              </p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="category_form" className="form-label">
              Category
            </label>
            <select
              className="form-select"
              aria-label=".form-select-sm"
              defaultValue="groceries"
              {...register("category", {
                required: "Category From is required!",
              })}
            >
              <option value="Groceries">Groceries</option>
              <option value="Utilities">Utilities</option>
              <option value="Entertainment">Entertainment</option>
            </select>
            {errors.category && (
              <p className="alert alert-danger mt-1">
                {errors.category?.message as any}
              </p>
            )}
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
