import { useEffect, useRef, useState } from "react"

export const useStateCallback=<T>(initialState: T | (() => T))=>{
  const [state, setState] = useState<T>(initialState)
 const ref= useRef<any>()
  const setStateCallback=(value: T | ((prevState: T) => T),callback:Function)=>{  
    ref.current=callback
     setState(value)
  }
  useEffect(() => {
    ref.current&&ref.current(state)
  }, [state])
  return {state,setStateCallback}
}