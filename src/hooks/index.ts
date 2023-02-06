import { useEffect, useRef, useState } from "react"

export const useStateCallback=<T>(defaultValue:T)=>{
  const [state, setState] = useState<T>(defaultValue)
 const ref= useRef<any>()
  const setStateCallback=(value:T,callback:Function)=>{
    ref.current=callback
     setState(value)

  }
  useEffect(() => {
    ref.current&&ref.current(state)
  }, [state])
  return {state,setStateCallback}
}