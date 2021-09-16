import { useState } from "react";
import { ButtonInputComp } from "./ButtonInputComp"

const handleBtnClick = (evt: React.MouseEvent<HTMLButtonElement>, id: number) => {
  console.log('handleBtnClick', id, evt);
}

export const EventSample = () => {
  const [inputText, setInputText] = useState<string>('');

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(evt.currentTarget.value);
  }

  return (
    <div>
      <ButtonInputComp
        handleClick={handleBtnClick}
        value={inputText}
        handleChange={handleChange}
      />
    </div>
  )
}
