import {useSelector, useDispatch} from 'react-redux'

import './App.css'

import {inc, dec, res, addPalyLoad, removePayLoad} from './store'
function App(){

  const x = useSelector((state)=> state)
  const dispatch = useDispatch()
  

  return(
    <div className='App'> 
      <h1>Value is: {x}</h1>
      <button onClick={()=> dispatch(inc())}>Increate</button>
      <button onClick={()=> dispatch(dec())}>Decrease</button>
      <button onClick={()=> dispatch(res())}>Reset</button>
      <button onClick={()=> dispatch(addPalyLoad(10))}>Increate Payload by 10</button>
      <button onClick={()=> dispatch(removePayLoad(10))}>Decrease Payload by 10</button>
      
    </div>
  )
}

export default App
