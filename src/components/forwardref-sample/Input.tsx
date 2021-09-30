import { forwardRef } from "react"

type InputProps = {
  type: string;
  placeholder: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({ type, placeholder }, ref) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      ref={ref}
    />
  )
})
