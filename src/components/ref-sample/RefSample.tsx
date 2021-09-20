import { useEffect, useRef, useState } from "react"

export const RefSample = () => {
  const nameRef = useRef<HTMLInputElement>(null!); //if we don't add ! then will get erorr at line 27
  const timerRef = useRef<number | undefined>(undefined);
  const [name, setName] = useState('');
  const [timer, setTimer] = useState(0);

  const timerCounter = () => {
    timerRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000)
  }

  useEffect(() => {
    timerCounter();

    return () => {
      clearInterval(timerRef.current);
    }
  }, [])

  return (
    <div>
      <input placeholder="Enter Your Name" defaultValue="" ref={nameRef} />
      <button onClick={() => { setName(nameRef.current.value) }} >Greet</button>
      <h3>{`Welcome ${name}`}</h3>
      <h3>{`Timer: ${timer}`}</h3>
      <button onClick={() => { clearInterval(timerRef.current) }} >Stop Timer</button>
    </div>
  )
}
