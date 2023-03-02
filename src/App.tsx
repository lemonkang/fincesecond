import React from 'react'
import Style from "./App.module.scss"
 const App = () => {
  const button = document.querySelector('button');

  button?.addEventListener('click', () => console.log('Clicked!'));
  return (
    <div className={Style.App}>
      <div className={Style.rangePicker}>
      <button>button</button>
      </div>
    </div>
  )
}
export default App