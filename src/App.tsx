
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
const dev2="second commit"
  }
  return <div>
    <div>master main dev 第二次提交</div>
    <div>开发分支开发分支2修改</div>
    <div>开发分支2</div>
  </div>
}
export default App