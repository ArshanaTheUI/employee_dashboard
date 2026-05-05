function Input({ label,name, type = "text", value, onChange, placeholder }) {
  return (
    <div className="input-group">
      <label>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;