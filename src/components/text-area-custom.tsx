import React from "react"

interface IProps {
  placeholder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>
}

const TextareaCustom: React.FC<IProps> = (props: IProps) => {
  const {placeholder, value, setValue} = props;
  
  const changeText = (value: string) => {
    setValue(value);
  };

  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={(e) => changeText(e.target.value)}></textarea>
  )
}

export default TextareaCustom;