const FormRow = ({ type, value, name, handleChange, labelText }) => {
  return (
    <div className="form-row">
      {/* label */}
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      {/* input  */}
      <input
        type={type}
        value={value}
        name={labelText}
        onChange={handleChange}
        className="form-input"
      />
    </div>
  );
};
export default FormRow;