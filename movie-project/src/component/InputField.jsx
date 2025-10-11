import { inputStyle, warningStyle } from "../style/style";

export default function InputField({
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  error,
  errorMsg,
}) {
  return (
    <>
      <label>
        <input
          className={inputStyle}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
        />
        {error ? <p className={warningStyle}>{errorMsg}</p> : ""}
      </label>
    </>
  );
}
