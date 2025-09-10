import { inputStyle } from "../style/inputStyle";

export default function InputField({type='text',name,value,onChange,placeholder,onBlur,minLength,maxLength}) {

  return (
    <>
    <label>
    <input 
    className={inputStyle}
    type={type} name={name} value={value} onChange={onChange} placeholder={placeholder} onBlur={onBlur} autoComplete="off" minLength={minLength} maxLength={maxLength} />
    </label>
    </>
  );
}
