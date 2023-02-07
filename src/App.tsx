
import { Button, Input } from "antd"
import {useEffect, useRef, useState } from "react"
import { useStateCallback } from "./hooks"
const App=()=>{
const {state:count,setStateCallback:setCount}=  useStateCallback<number>(1)

 
  const btnClick=()=>{
    setCount(2,(val:any)=>{
      console.log('====================================');
      console.log('val',val);
      console.log('====================================');
    })

  }
  return <div>
    <div>dev2第一次提交</div>
    <div>dev2第二次提交</div>
  </div>
}
export default App