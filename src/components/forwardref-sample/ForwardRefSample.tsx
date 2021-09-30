import React, { useRef } from 'react'
import { Input } from './Input'

export const ForwardRefSample = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const fnReadData = () => {
    console.log(inputRef.current?.value);
  }

  return (
    <div>
      <Input
        type='password'
        placeholder='enter your text here'
        ref={inputRef}
      />
      <button onClick={fnReadData} >Read Data</button>
    </div>
  )
}
