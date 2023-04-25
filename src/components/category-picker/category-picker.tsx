type Props = {
  setCategory: (event: any) => void;
};

const CategoryPicker = ({ setCategory }: Props) => {
  return (
    <>
      <select
        className="form-select"
        aria-label=".form-select-sm"
        defaultValue="all"
        onChange={(event: any) => setCategory(event.currentTarget.value)}
      >
        <option value="all">All Categories</option>
        <option value="groceries">Groceries</option>
        <option value="utilities">Utilities</option>
        <option value="entertainment">Entertainment</option>
      </select>
    </>
  );
};

export default CategoryPicker;
